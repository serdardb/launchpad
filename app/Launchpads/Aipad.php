<?php

namespace App\Launchpads;

class Aipad extends LaunchpadAbstract
{
    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://app.aipad.tech/api/projects'
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $url = route('api.aipad');
        exec("chrome " .$url);

        $response = json_decode($response, true);
        dd($response);
    }
}
