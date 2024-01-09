<?php

namespace App\Launchpads;

class Seedify extends LaunchpadAbstract
{
    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://launchpad.seedify.fund/api/get_upcPool'
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $response = json_decode($response, 1);
        $upcPools = $response['upcPool'];
        $activeProducts = collect([]);
        foreach ($upcPools as $upcPool) {
            $product = $this->product->product(
                $upcPool['title'],
                $this->product->token_clear($upcPool['symbol']),
                $this->product->network_mapping($upcPool['distribution_type']),
                $upcPool['images'],
                $upcPool['browser_web_link']
            );
            $activeProducts->push($product);
            $this->product->run([
                'launchpad' => class_basename(self::class),
                'price' => $upcPool['up_pool_raise'],
                'raise' => $upcPool['total_supply'],
                'offering_type' => $upcPool['up_pool_access'],
                'start_date' => $upcPool['start_date'],
                'end_date' => $upcPool['end_date'],
                'product' => $product
            ]);
        }
        $this->product->check($activeProducts, class_basename(self::class));
    }
}
