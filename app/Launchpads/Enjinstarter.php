<?php

namespace App\Launchpads;

use Illuminate\Support\Str;

class Enjinstarter extends LaunchpadAbstract
{
    public function prepare(): array
    {
        return [
            'url' => 'https://lpproject-rest.enjinstarter.com/api/v1/project/GetActiveProjectList?PageNumber=1&pageSize=99',
            'headers' => [
                'authority: lpproject-rest.enjinstarter.com',
                'accept: */*',
                'accept-language: tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
                'origin: https://launchpad.enjinstarter.com',
                'referer: https://launchpad.enjinstarter.com/',
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
            'url' => 'https://lpproject-rest.enjinstarter.com/api/v1/project/GetUpcomingProjectList?PageNumber=1&pageSize=99',
            'headers' => [
                'authority: lpproject-rest.enjinstarter.com',
                'accept: */*',
                'accept-language: tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
                'origin: https://launchpad.enjinstarter.com',
                'referer: https://launchpad.enjinstarter.com/',
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
        $response = json_decode($response, true);
        $activeProducts = collect([]);
        $prepareDate = $this->prepareData['response'];
        $prepareDate = json_decode($prepareDate, true);

        $this->render($prepareDate['data']['data'], $activeProducts);
        $this->render($response['data']['data'], $activeProducts);

        $this->product->check($activeProducts, class_basename(self::class));
    }

    private function render($data, $activeProducts){
        foreach ($data as $item) {
            $name = $item['title'];
            $token = $item['tokenSymbol'];
            $network = $this->product->network_mapping($item['blockchainNetwork']);
            $image = $item['projectImages'][0]['imageUrl'];
            $website = null;
            $price = $item['paymentTokens'][0]['unitTokenPriceUsd'];
            $raise = $item['platformAllocationUsd'];
            $offering_type = 'Public';
            $start_date = null;
            $end_date = null;
            if ($item['guaranteedStartDateTime']) $start_date = str_replace('T', ' ' , $item['guaranteedStartDateTime']);
            if ($item['guaranteedEndDateTime']) $end_date = str_replace('T', ' ' , $item['guaranteedEndDateTime']);
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
                'url' => 'https://launchpad.enjinstarter.com/project/' . $item['projectId'],
                'start_date' => $start_date,
                'end_date' => $end_date,
                'product' => $product
            ]);
        }
    }
}
