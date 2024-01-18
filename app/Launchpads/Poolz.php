<?php

namespace App\Launchpads;

use DateTime;

class Poolz extends LaunchpadAbstract
{
    // Settings required for data retrieval process
    public function send(): array
    {
        $currentTime = date("Y-m-d\TH:i:sP");  // Şu anki tarihi ve saat bilgisini al
        $array = [
            "_where" => [
                "_and" => [
                    [
                        "_or" => [
                            ["IsTimeTBA" => true],
                            ["FinishTime_gte" => $currentTime]
                        ]
                    ],
                    [
                        "IsShow" => true
                    ]
                ]
            ],
            "_sort" => "IsTimeTBA:ASC,StartTime:ASC"
        ];
        $newURL = "https://poolzfinancedata.com/Projects-Informations?" . http_build_query($array);

        return [
            'url' => $newURL,
            //'headers' => [],
            //'post' => "" or [],
            //'options' => []
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $response = json_decode($response, true);
        $activeProducts = collect([]);

        foreach ($response as $item) {

            $name = $item['Name'];
            $token = str_replace('$', '', trim($item['VisualText']['Tokenomics']['Symbol']));
            $network = $this->product->network_mapping($item['chain_setting']['chainMainCoin']);
            $image = 'https://poolzfinancedata.com/cdn-cgi/image/format=auto' . $item['Logo']['url'];
            $website = $item['VisualText']['SmartLinks'][0]['URL'];

            $price = $item['VisualText']['Tokenomics']['USDPrice'] ?? 'TBA';
            $raisePrice = $item['VisualText']['Tokenomics']['TotalRaise'];
            $raisePrice = str_replace('$', '', $raisePrice);
            $raisePrice = str_replace(',','',$raisePrice);
            $raisePrice = intval($raisePrice);
            $raise = ($price !== 'TBA') ? $raisePrice / $price : 'TBA';

            $offering_type = $item['ido_badge']['Name'];
            $start_date = "TBA";
            $end_date = 'TBA';
            try{
                $dateStart = new DateTime($item['StartTime']);
                $start_date = $dateStart->format('Y-m-d H:i:s');
            } catch (\Exception $e) {}
            try{
                $dateEnd = new DateTime($item['StartTime']);
                $end_date = $dateEnd->format('Y-m-d H:i:s');
            }catch (\Exception $e) {}

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
}
