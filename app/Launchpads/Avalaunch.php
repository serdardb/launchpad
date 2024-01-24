<?php

namespace App\Launchpads;

class Avalaunch extends LaunchpadAbstract
{
    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://api.avalaunch.website/api/v1/projects'
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $response = json_decode($response, true);

        $activeProducts = collect([]);

        foreach ($response['projects'] as $item) {
            if ($item['current_round'] === 'Sale ended.') continue;
            $name = trim($item['title']);
            $token = $item['token']['symbol'];
            $network = null;
            $image = $item['logo_url'];
            $website = $item['website_url'];

            $product = $this->product->product(
                $name,
                $this->product->token_clear($token),
                $this->product->network_mapping($network),
                $image,
                $website
            );
            if (!$product) continue;
            $price = $item['token']['token_price_in_usd'];
            $raise = $item['target_raised'];
            $offering_type = $item['sale_type'];
            $start_date = null; $end_date = null;
            $url = 'https://avalaunch.app/project-details?id='.$item['id'];
            if (isset($item['timeline']['registration_opens'])) {
                $start_date = date('Y-m-d H:i:s', intval($item['timeline']['registration_opens']));
            }
            if (isset($item['timeline']['sale_ends'])) {
                $end_date = date('Y-m-d H:i:s', intval($item['timeline']['sale_ends']));
            }

            $activeProducts->push($product);

            $this->product->run([
                'launchpad' => class_basename(self::class),
                'price' => $price,
                'raise' => $raise,
                'offering_type' => $offering_type,
                'url' => $url,
                'start_date' => $start_date,
                'end_date' => $end_date,
                'product' => $product
            ]);
        }

    }
}
