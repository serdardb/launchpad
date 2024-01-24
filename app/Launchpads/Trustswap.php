<?php

namespace App\Launchpads;

class Trustswap extends LaunchpadAbstract
{
    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://stakingportal-backend-origdfl2wq-uc.a.run.app/launchpads/getUpcomingLaunchpads'
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $response = json_decode($response, true);

        foreach ($response as $item)
        {
            $name = trim($item['projectName']);
            $token = $item['token']['symbol'];
            $network = null;
            $image = $item['logo_url'];
            $website = $item['website_url'];
        }
    }
}
