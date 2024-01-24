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
            //  if (!isset($pool['token']['price'])) continue;
            $price = !isset($pool['token']['price']) ? null : $pool['token']['price'];

            $product = $this->product->product(
                $pool['name'],
                $this->product->token_clear($pool['token']['symbol']),
                $this->product->network_mapping_chain_id($pool['token']['chain_id']),
                $pool['token']['logo'],
                $pool['social_networks']['website']
            );
            $activeProducts->push($product);
            $startDate = isset($pool['whitelist']['from']) ? date('Y-m-d H:i:s', intval($pool['whitelist']['from'])) : null;
            $endDate = isset($pool['whitelist']['to']) ? date('Y-m-d H:i:s', intval($pool['whitelist']['to'])) : null;
            $type = $pool['type'] !== "" ? Str::ucfirst($pool['type']) : 'Public';

            $raise = null;
            if ($price) {
                $raise = intval($pool['total_token'] * $price);
            }

            $this->product->run([
                'launchpad' => class_basename(self::class),
                'price' => $price,
                'raise' => $raise,
                'offering_type' => $type,
                'url' => 'https://gamefi.org/ido/' . $pool['gamefi_slug'],
                'start_date' => $startDate,
                'end_date' => $endDate,
                'product' => $product
            ]);
        }
        $this->product->check($activeProducts, class_basename(self::class));
    }

}
