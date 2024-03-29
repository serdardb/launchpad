<?php

namespace App\Launchpads;

class Chaingpt extends LaunchpadAbstract
{
    public function prepare(): array
    {
        return [
            'url' => 'https://padapi.chaingpt.org/pools/v3/next-to-launch-pools'
        ];
    }

    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://padapi.chaingpt.org/pools/v3/upcoming-pools'
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $activeProducts = collect([]);
        $response = json_decode($response, true);
        $data = $response['data']['data'];
        $this->render($data,$activeProducts);
        $prepareResponse = json_decode($this->prepareData['response'], true);
        $this->render($prepareResponse['data']['data'],$activeProducts);
        $this->product->check($activeProducts, class_basename(self::class));
    }

    public function render($data,$activeProducts) {
        foreach ($data as $item)
        {
            $name = $item['title'];
            $token = $item['symbol'];
            $network = $item['network_available'];
            $image = $item['token_images'];
            $website = $item['website'];
            $price = $item['token_conversion_rate'];
            $raise = ceil(intval(floatval($item['total_sold_coin']) * floatval($price)));
            $offering_type = $item['relationship_type'];
            $start_date = null;
            if ($item['actual_finish_time']) {
                $start_date =  date('Y-m-d H:i:s', intval($item['actual_finish_time']));
            } else if ($item['start_time']) {
                $start_date =  date('Y-m-d H:i:s', intval($item['start_time']));
            }
            $end_date = $item['finish_time'] ? date('Y-m-d H:i:s', intval($item['finish_time'])) : null;

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
                'url' => 'https://pad.chaingpt.org/buy-token/' . $item['id'],
                'start_date' => $start_date,
                'end_date' => $end_date,
                'product' => $product
            ]);
        }
    }
}
