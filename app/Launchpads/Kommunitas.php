<?php

namespace App\Launchpads;

use Carbon\Carbon;

class Kommunitas extends LaunchpadAbstract
{
    public function prepare(): array
    {
        return  [
            'url' => 'https://api.kommunitas.net/v1/launchpad/project/?status=active&address=&invested=false',
            'headers' => [
                'authority: api.kommunitas.net',
                'accept: application/json, text/plain, */*',
                'accept-language: tr-TR,tr;q=0.9',
                'origin: https://launchpad.kommunitas.net',
                'referer: https://launchpad.kommunitas.net/',
                'sec-ch-ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                'sec-ch-ua-mobile: ?0',
                'sec-ch-ua-platform: "macOS"',
                'sec-fetch-dest: empty',
                'sec-fetch-mode: cors',
                'sec-fetch-site: same-site',
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'x-kom-token: 0xC004e2318722EA2b15499D6375905d75Ee5390B8'
            ]
        ];
    }

    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://api.kommunitas.net/v1/launchpad/project/?status=upcoming&address=&invested=false',
            'headers' => [
                'authority: api.kommunitas.net',
                'accept: application/json, text/plain, */*',
                'accept-language: tr-TR,tr;q=0.9',
                'origin: https://launchpad.kommunitas.net',
                'referer: https://launchpad.kommunitas.net/',
                'sec-ch-ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                'sec-ch-ua-mobile: ?0',
                'sec-ch-ua-platform: "macOS"',
                'sec-fetch-dest: empty',
                'sec-fetch-mode: cors',
                'sec-fetch-site: same-site',
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'x-kom-token: 0xC004e2318722EA2b15499D6375905d75Ee5390B8'
            ]
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {

        $activeProducts = collect([]);

        $prepare = json_decode($this->prepareData['response'], true);
        $this->render($prepare['result'], $activeProducts);

        $response = json_decode($response, true);
        $this->render($response['result'], $activeProducts);

        $this->product->check($activeProducts, class_basename(self::class));

    }

    private function render($data, $activeProducts) {

        foreach ($data as $item) {

            $name = trim($item['name']);
            $token = $item['ticker'];
            $network = trim($item['type']['icon']);
            $image = $item['image'];
            $website = null;
            if (isset($item['social'])) $website = $item['social'][0]['link'];

            $product = $this->product->product(
                $name,
                $this->product->token_clear($token),
                $this->product->network_mapping($network),
                $image,
                $website
            );

            $price = null; $raise = null; $offering_type = $item['roundLabel']; $start_date = null; $end_date = null; $url = null;
            if (isset($item['price'])) {
                $pExplode = explode(' ', $item['price']);
                $price = floatval(trim(str_replace('$', '', $pExplode[0])));
            }
            if (isset($item['target']['total'])) $raise = floatval($item['target']['total']);

            $today = Carbon::now();
            $sixMonthsLater = $today->copy()->addMonths(6);

            if (isset($item['start']) and $item['start']) {
                $start_date = date('Y-m-d H:i:s', intval($item['start']));
                $startDateTime = Carbon::createFromTimestamp(intval($item['start']));
                if ($startDateTime->greaterThan($sixMonthsLater)) $start_date = null;

            }

            if (isset($item['end']) and $item['end']) {
                $end_date = date('Y-m-d H:i:s', intval($item['end']));
                $endDateTime = Carbon::createFromTimestamp(intval($item['start']));
                if ($endDateTime->greaterThan($sixMonthsLater)) $end_date = null;
            }

            $url = 'https://launchpad.kommunitas.net/pool/'.$item['ticker'].'/'.$item['round'];

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
