<?php

namespace App\Launchpads;

class Solanium extends LaunchpadAbstract
{
    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://api.solanium.com/solana/projects/new/',
            'headers' => [
                'sec-ch-ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                'Referer: https://www.solanium.io/',
                'sec-ch-ua-mobile: ?0',
                'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'sec-ch-ua-platform: "macOS"',
            ]
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $response = json_decode($response, true);

        $activeProducts = collect([]);

        foreach ($response['projects'] as $item) {
            if ($item['is_closed']) continue;
            $name = trim($item['name']);
            $token = $item['sale_token']['ticker'];
            $network = $this->product->network_mapping_chain_id($item['chain']['chain_id']);
            $image = $item['logo'];
            $website = $item['website'];

            $price = $item['token_price'];
            $raise = $item['token_amount'] * $price;
            $offering_type = "";
            $url = "https://www.solanium.io/project/" . $item['url'];

            $start_date = null;
            $end_date = null;
            if ($item['whitelist_start']) $start_date = str_replace('T', ' ' , $item['whitelist_start']);
            if ($item['whitelist_end']) $end_date = str_replace('T', ' ' , $item['whitelist_end']);
            $start_date = trim($start_date, 'Z');
            $end_date = trim($end_date, 'Z');

            $product = $this->product->product(
                $name,
                $this->product->token_clear($token),
                $this->product->network_mapping($network),
                $image,
                $website
            );

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
