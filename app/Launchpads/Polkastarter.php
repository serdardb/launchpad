<?php

namespace App\Launchpads;

class Polkastarter extends LaunchpadAbstract
{
    // Settings required for data retrieval process
    public function send(): array
    {
        return [
            'url' => 'https://polkastarter.com/v3/projects?status=upcoming',
            'headers' => [
                'authority: polkastarter.com',
                'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'accept-language: tr-TR,tr;q=0.9',
                'sec-ch-ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                'sec-ch-ua-mobile: ?0',
                'sec-ch-ua-platform: "macOS"',
                'sec-fetch-dest: document',
                'sec-fetch-mode: navigate',
                'sec-fetch-site: none',
                'sec-fetch-user: ?1',
                'upgrade-insecure-requests: 1',
                'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            ]
        ];
    }

    // Processing of retrieved data
    public function process($response, $request, $time): void
    {
        $response = json_decode($response, 1);

        $activeProducts = collect([]);
        foreach ($response['data'] as $data)
        {
            $chain = 'undefined';
            $website = null;
            if (isset($data['content']['socials'])) {
                $website = $data['content']['socials'][0]['url'];
            }

            if (isset($data['chains'][0])) {
                $chain = $this->product->network_mapping($data['chains'][0]);
            }

            $product = $this->product->product(
                $data['content']['name'],
                $this->product->token_clear($data['content']['tokenSymbol'] ?? 'TBA'),
                $chain,
                $data['content']['logo']['url'],
                $website
            );
            $activeProducts->push($product);

            $this->product->run([
                'launchpad' => class_basename(self::class),
                'price' => count($data['content']['Sales']) ? $data['content']['Sales'][0] : 'TBA',
                'raise' => $data['content']['totalRaise'] ?? 0,
                'offering_type' => $data['type'],
                'start_date' => $data['content']['startDate'] ?? 'TBA',
                'end_date' => $data['content']['endDate'] ?? 'TBA',
                'product' => $product
            ]);
        }
        $this->product->check($activeProducts, class_basename(self::class));
    }
}
