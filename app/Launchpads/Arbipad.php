<?php

namespace App\Launchpads;

class Arbipad extends LaunchpadAbstract
{
    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://cmmxhjvzgmjfiruhibgb.supabase.co/rest/v1/projects?select=id%2Cname%2Cnetwork%2Cicon%2Ccover%2Cpool_details%2Ctoken_details&or=%28status.eq.Upcoming%2C+status.eq.Whitelist+Open%2C+status.eq.Whitelist+Closed%2C+status.eq.Offering%29',
            'headers' => [
                'authority: cmmxhjvzgmjfiruhibgb.supabase.co',
                'accept: */*',
                'accept-language: tr-TR,tr;q=0.9',
                'accept-profile: public',
                'apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE1NDUyNCwiZXhwIjoxOTU1NzMwNTI0fQ.l5BNv3vAtc3PeXokRUtujkfRRg7A8XKrn2ud3CDUNM4',
                'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE1NDUyNCwiZXhwIjoxOTU1NzMwNTI0fQ.l5BNv3vAtc3PeXokRUtujkfRRg7A8XKrn2ud3CDUNM4',
                'origin: https://www.arbipad.com',
                'referer: https://www.arbipad.com/',
                'sec-ch-ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                'sec-ch-ua-mobile: ?0',
                'sec-ch-ua-platform: "macOS"',
                'sec-fetch-dest: empty',
                'sec-fetch-mode: cors',
                'sec-fetch-site: cross-site',
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'x-client-info: supabase-js-web/2.39.2'
            ]
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $response = json_decode($response, true);

        $activeProducts = collect([]);

        foreach ($response as $item) {
            $name = trim($item['name']);
            $token = null;
            $network = $this->product->network_mapping_chain_id($item['network']);
            $image = $item['icon'];
            $website = null;
            foreach ($item['token_details'] as $detail) {
                if ($detail['label'] === "Symbol") {
                    $token = $detail['value'];
                }
            }
            $price = null; $raise = null; $offering_type = null; $start_date = null; $end_date = null; $url = null;
            foreach ($item['pool_details'] as $pool_detail) {
                if ($pool_detail['label'] === "Token Price") $price = $pool_detail['value'];
                if ($pool_detail['label'] === "Max. Allocation") $raise = $pool_detail['value'];
                if ($pool_detail['label'] === "Access Type") $offering_type = $pool_detail['value'];
            }

            if ($price) {
                $price = str_replace('$','', $price);
                $price = floatval($price);
            }

            if ($raise) {
                $raise = str_replace('$','', $raise);
                $raise = str_replace('.','', $raise);
                $raise = str_replace(',','', $raise);
                $raise = intval($raise);
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
                'url' => $url,
                'start_date' => $start_date,
                'end_date' => $end_date,
                'product' => $product
            ]);
        }
    }
}
