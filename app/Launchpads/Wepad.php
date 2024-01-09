<?php

namespace App\Launchpads;

use Carbon\Carbon;

class Wepad extends LaunchpadAbstract
{
    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://wepad-api.wepad.io/api/v1/projects/'
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $response = json_decode((string)$response, true);
        $upcoming = $response['data']['upcoming'];

        $activeProducts = collect([]);

        foreach ($upcoming as $item) {

            $name = $item['title'];
            $token = $item['ticker'];
            $network = $this->product->network_mapping_chain_id($item["network"]);
            $image = collect($item['logo'])->first();
            $website = null;
            $metrics = collect($item['metrics']);
            $raisePrice = $metrics->where('key', '=', 'Fundraise goal')->first();
            $raisePrice = $raisePrice ? intval(str_replace(',', '',$raisePrice['value'])) : 0;
            $tokenPrice = $metrics->where('key', '=','Price per token')->first();
            $price = $tokenPrice ? floatval(str_replace(',', '',$tokenPrice['value'])) : 0;
            $raise  = $raisePrice / $price;
            $offering_type = 'public';
            $start_date = 'TBA';
            if ($item['startsAt']) {
                $carbonInstance = new Carbon($item['startsAt']);
                $start_date = $carbonInstance->format('Y-m-d H:i:s');
            }
            $end_date = 'TBA';
            if ($item['endsAt']) {
                $carbonInstance = new Carbon($item['endsAt']);
                $end_date = $carbonInstance->format('Y-m-d H:i:s');
            }

            $product = $this->product->product(
                $name,
                $this->product->token_clear($token),
                $network,
                $image,
                $website
            );
            $activeProducts->push($product);

            $this->product->run([
                'launchpad' => class_basename(self::class),
                'price' => $price,
                'raise' => $raise,
                'offering_type' => $offering_type,
                'start_date' => $start_date,
                'end_date' => $end_date,
                'product' => $product
            ]);
        }

        $this->product->check($activeProducts, class_basename(self::class));
    }
}
