<?php

namespace App\Launchpads;


class DaoMaker extends LaunchpadAbstract
{
    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://api.daomaker.com/prepareHomePage',
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $response = json_decode($response, 1);
        foreach ($response['offerings'] as $offering) {

            // if (isset($offering['dummy_offer']) and $offering['dummy_offer']) continue;
            if (isset($offering['ended']) and $offering['ended']) continue;
            if (!isset($offering['company']) or !isset($offering['company'][0])) continue;
            $startDate = 'TBA';
            if (intval($offering['start_date']) > 0) $startDate = date('Y-m-d H:i:s', intval($offering['start_date']) / 1000);
            $endDate = 'TBA';
            if (intval($offering['end_date']) > 0) $endDate = date('Y-m-d H:i:s', intval($offering['end_date']) / 1000);
            $this->product->run([
                'launchpad' => class_basename(self::class),
                'price' => $offering['price_per_token'],
                'raise' => $offering['total_raise'],
                'offering_type' => $offering['offering_type'],
                'start_date' => $startDate,
                'end_date' => $endDate,
                'product' => [
                    'name' => $offering['title'],
                    'token' => $offering['token_ticker'],
                    'network' => $offering['network'],
                    'icon' => $offering['company'][0]['project_logo'],
                    'website' => $offering['company'][0]['website_url']
                ]
            ]);
        }

    }
}
