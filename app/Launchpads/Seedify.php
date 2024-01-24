<?php

namespace App\Launchpads;

class Seedify extends LaunchpadAbstract
{

    public function prepare(): array
    {
        return [
            'url' => 'https://api.seedify.fund/api/v2/pools?poolType=featured',
            'headers' => [
                'authority: api.seedify.fund',
                'accept: application/json, text/plain, */*',
                'accept-language: tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
                'origin: https://seedify.fund',
                'referer: https://seedify.fund/',
                'sec-ch-ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                'sec-ch-ua-mobile: ?0',
                'sec-ch-ua-platform: "macOS"',
                'sec-fetch-dest: empty',
                'sec-fetch-mode: cors',
                'sec-fetch-site: same-site',
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            ]
        ];
    }

    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://api.seedify.fund/api/v2/pools?poolType=upcoming',
            'headers' => [
                'authority: api.seedify.fund',
                'accept: application/json, text/plain, */*',
                'accept-language: tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
                'origin: https://seedify.fund',
                'referer: https://seedify.fund/',
                'sec-ch-ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                'sec-ch-ua-mobile: ?0',
                'sec-ch-ua-platform: "macOS"',
                'sec-fetch-dest: empty',
                'sec-fetch-mode: cors',
                'sec-fetch-site: same-site',
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            ]
        ];
    }


    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $activeProducts = collect([]);
        $response = json_decode($response, 1);
        $this->render($response['data'], $activeProducts);

        $prepareResponse = json_decode($this->prepareData['response'], 1);
        $this->render($prepareResponse['data'], $activeProducts);

        $this->product->check($activeProducts, class_basename(self::class));
    }

    private function render($data, $activeProducts)
    {
        foreach ($data as $upcPool) {
            $name = $upcPool['title'];
            $name = str_replace('(Public)', '', $name);
            $name = str_replace('(Private)', '', $name);
            $name = trim($name);
            $product = $this->product->product(
                $name,
                $this->product->token_clear($upcPool['symbol']),
                $this->product->network_mapping($upcPool['distribution_type']),
                $upcPool['images'],
                $upcPool['browser_web_link']
            );
            $activeProducts->push($product);
            $startDate = $upcPool['start_date'];
            if ($startDate === "TBA") {
                $startDate = null;
            } else {
                $startDate = intval(intval($startDate) / 1000);
                $startDate = date('Y-m-d H:i:s', $startDate);
            }

            $endDate = $upcPool['end_date'];
            if ($endDate === "TBA") {
                $endDate = null;
            } else {
                $endDate = intval(intval($endDate) / 1000);
                $endDate = date('Y-m-d H:i:s', $endDate);
            }

            $price = ($upcPool['up_pool_raise'] !== 0) ? $upcPool['up_pool_raise'] : null;
            $raise = null;
            if ($upcPool['total_supply'] !== 0 and $price) $raise = $upcPool['total_supply'] * $price;

            $this->product->run([
                'launchpad' => class_basename(self::class),
                'price' => $price,
                'raise' => $raise,
                'offering_type' => $upcPool['up_pool_access'],
                'url' => 'https://seedify.fund/igo/' . $upcPool['_id'],
                'start_date' => $startDate,
                'end_date' => $endDate,
                'product' => $product
            ]);
        }
    }
}
