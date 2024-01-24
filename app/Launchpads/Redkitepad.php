<?php

namespace App\Launchpads;

class Redkitepad extends LaunchpadAbstract
{
    public function prepare(): array
    {
        return [
            'url' => 'https://redkite-api.polkafoundry.com/pools/v3/next-to-launch-pools'
        ];
    }

    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://redkite-api.polkafoundry.com/pools/v3/upcoming-pools'
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $activeProducts = collect([]);
        $response = json_decode($response, true);
        $this->render($response['data']['data'],$activeProducts);

        $prepareResponse = json_decode($this->prepareData['response'], true);
        $this->render($prepareResponse['data']['data'],$activeProducts);

        $this->product->check($activeProducts, class_basename(self::class));

    }

    private function render($data, $activeProducts)
    {
        foreach ($data as $item)
        {
            $name = str_replace('IDO','',$item['title']);
            $name = str_replace('Private Sale', '',$name);
            $name = trim($name);
            $token = $item['symbol'];
            $network = $item['network_available'];
            $image = $item['token_images'];
            $website = $item['website'];
            $price = $item['ether_conversion_rate'];
            $raise = ceil(intval(floatval($item['total_sold_coin']) * floatval($price)));
            $offering_type = intval($item['is_private']) === 1 ? 'Private' : 'Public';
            $start_date = null;

            if ($item['start_time']) {
                $start_date =  date('Y-m-d H:i:s', intval($item['start_time']));
            } else if ($item['start_join_pool_time']) {
                $start_date =  date('Y-m-d H:i:s', intval($item['start_join_pool_time']));
            }

            $end_date = null;
            if ($item['finish_time']) {
                $end_date =  date('Y-m-d H:i:s', intval($item['finish_time']));
            }
            else if ($item['end_join_pool_time']) {
                $end_date =  date('Y-m-d H:i:s', intval($item['end_join_pool_time']));
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
                'url' => 'https://redkitepad.com/#/buy-token/' . $item['id'],
                'start_date' => $start_date,
                'end_date' => $end_date,
                'product' => $product
            ]);
        }
    }
}
