<?php

namespace App\Launchpads;

use Carbon\Carbon;

class Seapad extends LaunchpadAbstract
{
    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://api.seapad.fund/api/v1/project/list?page=1&limit=100'
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $response = json_decode($response, 1);
        $activeProducts = collect([]);

        foreach ($response['data']['items'] as $item) {

            $startDate = $endDate = null;
            if (isset($item['timelines'])) {
                $endCarbon =  Carbon::parse($item['timelines']['end']);
                if ($endCarbon->isPast()) continue;
                $startCarbon =  Carbon::parse($item['timelines']['start']);
                $startDate = $startCarbon->format('Y-m-d H:i:s');
                $endDate = $endCarbon->format('Y-m-d H:i:s');
            }
            $product = $this->product->product(
                $item['name'],
                $this->product->token_clear($item['token_info']['symbol']),
                $this->product->network_mapping($item['token_info']['chain_network']),
                $item['logo'],
                null
            );
            $activeProducts->push($product);
            $this->product->run([
                'launchpad' => class_basename(self::class),
                'price' => $item['more_info']['token_price'] ?? null,
                'raise' => $item['more_info']['target_fund'] ?? null,
                'offering_type' => $item['sales_type'],
                'url' => 'https://app.seapad.fund/projects/' . $item['_id'],
                'start_date' => $startDate,
                'end_date' => $endDate,
                'product' => $product
            ]);
        }
    }
}
