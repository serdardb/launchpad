<?php

namespace App\Launchpads;

use Illuminate\Support\Str;

class GameFi extends LaunchpadAbstract
{
    public function prepare(): array
    {
        return [
            'url' => 'https://gamefi.org/ido',
        ];
    }

    // Settings required for data retrieval process
    public function send(): array
    {

        preg_match('/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/', $this->prepareData['response'], $matches);
        $jsonData = $matches[1];
        $arrayData = json_decode($jsonData, true);

        return [
            'url' => 'https://gamefi.org/_next/data/' . $arrayData['buildId'] . '/index.json',
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {

        $response = json_decode($response, 1);

        $activeProducts = collect([]);
        foreach ($response['pageProps']['pools'] as $pool) {
            if (!isset($pool['token']['price'])) continue;

            $product = $this->product->product(
                $pool['name'],
                $this->product->token_clear($pool['token']['symbol']),
                $this->product->network_mapping_chain_id($pool['token']['chain_id']),
                $pool['token']['logo'],
                $pool['social_networks']['website']
            );
            $activeProducts->push($product);
            $startDate = isset($pool['whitelist']['from']) ? date('Y-m-d H:i:s', intval($pool['whitelist']['from'])) : 'TBA';
            $endDate = isset($pool['whitelist']['to']) ? date('Y-m-d H:i:s', intval($pool['whitelist']['to'])) : 'TBA';
            $type = $pool['type'] !== "" ? Str::ucfirst($pool['type']) : 'Public';

            $this->product->run([
                'launchpad' => class_basename(self::class),
                'price' => $pool['token']['price'],
                'raise' => $pool['total_token'],
                'offering_type' => $type,
                'start_date' => $startDate,
                'end_date' => $endDate,
                'product' => $product
            ]);
        }
        $this->product->check($activeProducts, class_basename(self::class));
    }

}
