<?php

namespace App\Launchpads;

use Illuminate\Support\Str;

class BinStarter extends LaunchpadAbstract
{
    protected array $chainIds = [
        1 => 'binance',
        2 => 'polygon',
        3 => 'ethereum',
        4 => 'avalanche'
    ];
    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://bsr.binstarter.io/api/ido/projects/coming-soon',
            //'headers' => [],
            'post' => "",
            //'options' => []
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $response = json_decode($response, true);
        $activeProducts = collect([]);

        foreach ($response as $item) {
            $name = $item['projectName'];
            $token = $item['tokenSymbol'];
            $network = $this->getNetwork($item['projectNetwork']);
            $image = 'https://bsr.binstarter.io' . $item['projectLogo'];
            $website = $item['website'];
            $price = $item['tokenPrice'];
            $raise = $item['totalRaise'] / $item['tokenPrice'];
            $offering_type = 'Public';
            $start_date = "TBA";
            $end_date = 'TBA';
            if ($item['startTime']) $start_date = str_replace('T', ' ' , $item['startTime']);
            if ($item['endTime']) $end_date = str_replace('T', ' ' , $item['endTime']);
            if (Str::lower($this->product->token_clear($token)) === "patex") {
                $network = 'ethereum';
            }
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
                'start_date' => $start_date,
                'end_date' => $end_date,
                'product' => $product
            ]);

        }

        $this->product->check($activeProducts, class_basename(self::class));
    }

    private function getNetwork($id)
    {
        return $this->chainIds[$id] ?? 'undefined';
    }
}
