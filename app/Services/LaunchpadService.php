<?php

namespace App\Services;

class LaunchpadService
{
    protected array $launchpads = [];

    public function addLaunchpad($launchpad): void
    {
        $this->launchpads[] = $launchpad;
    }

    public function processLaunchpads(): void
    {
        // Step 1: Prepare fonksiyonunu çalıştır ve multi curl isteği hazırla
        $this->executeLaunchpadFunctions('prepare');

        // Step 2: Send fonksiyonunu çalıştır, multi curl isteği hazırla ve process fonksiyonunu çağır
        $this->executeLaunchpadFunctions('send', true);
    }

    protected function executeLaunchpadFunctions($functionName, $callProcess = false): void
    {
        $multiCurlHandles = [];
        $responses = [];

        foreach ($this->launchpads as $key => $launchpad) {
            $requestData = method_exists($launchpad, $functionName) ? $launchpad->$functionName() : [];
            if (!count($requestData)) continue;
            $ch = $this->prepareCurlHandle($requestData);
            $multiCurlHandles[$key] = $ch;
        }

        // Multi curl istekleri çalıştırılır
        $mh = curl_multi_init();
        foreach ($multiCurlHandles as $handle) {
            curl_multi_add_handle($mh, $handle);
        }

        $this->executeMultiCurl($mh);
        // Yanıtlar toplanır
        foreach ($multiCurlHandles as $index => $handle) {
            $rawResponse = curl_multi_getcontent($handle);
            list($header, $body) = explode("\r\n\r\n", $rawResponse, 2);
            $request = curl_getinfo($handle);
            $request['header'] = $header;
            $responses[$index] = [
                'response' => $body,
                'request' => $request,
                'time' => curl_getinfo($handle, CURLINFO_TOTAL_TIME)
            ];
            curl_multi_remove_handle($mh, $handle);
        }

        curl_multi_close($mh);

        if ($callProcess) {
            // Process fonksiyonlarını çağır
            foreach ($this->launchpads as $index => $launchpad) {
                $launchpad->process($responses[$index]['response'], $responses[$index]['request'], $responses[$index]['time']);
            }
        }

        if ($functionName === 'prepare') {
            foreach ($this->launchpads as $index => $launchpad) {
                if (isset($responses[$index])) {
                    $launchpad->prepareData = $responses[$index];
                }
            }
        }
    }

    protected function prepareCurlHandle($requestData): \CurlHandle|bool
    {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $requestData['url']);

        if (isset($requestData['post'])) {
            if (is_array($requestData['post'])) {
                $postFields = http_build_query($requestData['post']);
            } else {
                $postFields = $requestData['post'];
            }
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
        }

        if (isset($requestData['headers'])) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $requestData['headers']);
        }

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_HEADER, true);

        if (isset($requestData['options'])) {
            foreach ($requestData['options'] as $option => $value) {
                curl_setopt($ch, $option, $value);
            }
        }
        return $ch;
    }

    protected function executeMultiCurl($mh): void
    {
        $running = null;
        do {
            curl_multi_exec($mh, $running);
        } while ($running);
    }
}
