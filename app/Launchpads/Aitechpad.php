<?php

namespace App\Launchpads;

class Aitechpad extends LaunchpadAbstract
{
    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://www.aitechpad.io/'
        ];
    }

    public function process($response, $request, $time): void
    {
        preg_match('/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/', $response, $matches);
        $jsonData = $matches[1];
        $arrayData = json_decode($jsonData, true);

        $activeProducts = collect([]);
        foreach ($arrayData['props']['pageProps']['projects'] as $project) {
            if ($project['status'] !== "ACTIVE") continue;
            $name = $project['name'];
            $token = $project['token']["ticker"];
            $network = $project['token']['network'];
            $image = 'https://platformaitech-s3-publicread.s3.eu-central-1.amazonaws.com/'.$project['id'].'/'.$project['square_logo'];
            foreach ($project['events'] as $event) {
                if ($event['type'] === "Crowdfunding") {
                    if (intval($event['start_date']) < time()) continue;
                    if (str_contains($event['name'], 'Test IDO')) continue;

                    $price = floatval(str_replace(',','.', $event['token_price']));
                    $raise = intval(str_replace(',','',str_replace('.','',$event['total_allocation'])));

                    $product = $this->product->product(
                        $name,
                        $this->product->token_clear($token),
                        $this->product->network_mapping($network),
                        $image,
                        null
                    );
                    $activeProducts->push($product);

                    $this->product->run([
                        'launchpad' => class_basename(self::class),
                        'price' => $price,
                        'raise' => $raise,
                        'offering_type' => 'public',
                        'url' => 'https://www.aitechpad.io/project/' . $project['slug'],
                        'start_date' => date('Y-m-d H:i:s', intval($event['start_date'])),
                        'end_date' => date('Y-m-d H:i:s', intval($event['start_date'])),
                        'product' => $product
                    ]);
                }
            }
        }
        $this->product->check($activeProducts, class_basename(self::class));
    }
}
