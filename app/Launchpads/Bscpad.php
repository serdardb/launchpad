<?php

namespace App\Launchpads;

class Bscpad extends LaunchpadAbstract
{
    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://bscpad.com/static/js/main.d1ff61b2.chunk.js'
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        preg_match_all("/JSON\.parse\('(.*?)'\)/", $response, $matches);
        $tokenData = null;

        foreach ($matches[1] as $key => $jsonString) {
            $jsonString = str_replace(["\'"], [""], $jsonString);
            $json =  json_decode($jsonString,true);
            if (gettype($json) === 'array' and isset($json[0])) {
                $first = $json[0];
                if (isset($first['id'])) {
                    $tokenData = $json;
                }
            }
        }
        if ($tokenData) {
            foreach ($tokenData as $key => $item) {
                $name = trim($item['name']);
                $token = $item['projectTokenSymbol'];
                $network = null;
                $image = $item['logo'];
                $website = $item['website'];
                if ($name === "AIPAD")
                {
                    echo $key;
                    echo "";
                }
                /*$product = $this->product->product(
                    $name,
                    $this->product->token_clear($token),
                    $this->product->network_mapping($network),
                    $image,
                    $website
                );
                if (!$product) continue;

                $price = $item['token']['token_price_in_usd'];
                $raise = $item['target_raised'];
                $offering_type = $item['sale_type'];
                $start_date = null; $end_date = null;
                $url = 'https://avalaunch.app/project-details?id='.$item['id'];
                if (isset($item['timeline']['registration_opens'])) {
                    $start_date = date('Y-m-d H:i:s', intval($item['timeline']['registration_opens']));
                }
                if (isset($item['timeline']['sale_ends'])) {
                    $end_date = date('Y-m-d H:i:s', intval($item['timeline']['sale_ends']));
                }*/

            }
        }
        dd($tokenData[4]);
    }
}
