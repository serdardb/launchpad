<?php

namespace Database\Seeders;

use App\Models\Launchpad;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LaunchpadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $launchpads = [
            [
                'name' => 'DAOMaker',
                'url' => 'https://daomaker.com/launchpad',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/8420.png',
                'pad' => 'dao_maker',
                'status' => 0
            ],
            [
                'name' => 'Seedify',
                'url' => 'https://seedify.fund/',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/8972.png',
                'pad' => 'seedify',
                'status' => 1
            ],
            [
                'name' => 'GameFi.org',
                'url' => 'https://gamefi.org/ido',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/11783.png',
                'pad' => 'game_fi',
                'status' => 1
            ],
            [
                'name' => 'Polkastarter',
                'url' => 'https://polkastarter.com/projects',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/7208.png',
                'pad' => 'polkastarter',
                'status' => 1
            ],
            [
                'name' => 'Decubate',
                'url' => 'https://platform.decubate.com/',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/10563.png',
                'pad' => 'decubate',
                'status' => 1
            ],
            [
                'name' => 'Aitechpad',
                'url' => 'https://www.aitechpad.io/',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/19055.png',
                'pad' => 'aitechpad',
                'status' => 1
            ],
            [
                'name' => 'Chaingpt',
                'url' => 'https://pad.chaingpt.org/',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/23756.png',
                'pad' => 'chaingpt',
                'status' => 1
            ],
            [
                'name' => 'Wepad',
                'url' => 'https://wepad.io/projects',
                'image' => 'https://icoholder.com/media/cache/ico_logo_view_page/files/img/1a6fbd7a3323b5ee7e85a0a0d01d02a0.jpeg',
                'pad' => 'wepad',
                'status' => 1
            ],
            [
                'name' => 'Seapad',
                'url' => 'https://app.seapad.fund/',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/26655.png',
                'pad' => 'seapad',
                'status' => 1
            ],
            [
                'name' => 'BinStarter',
                'url' => 'https://bsr.binstarter.io/ido/projects',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/11275.png',
                'pad' => 'bin_starter',
                'status' => 1
            ],
            [
                'name' => 'Enjinstarter',
                'url' => 'https://launchpad.enjinstarter.com/',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/11088.png',
                'pad' => 'enjinstarter',
                'status' => 1
            ],
            [
                'name' => 'Poolz',
                'url' => 'https://www.poolz.finance/',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/8271.png',
                'pad' => 'poolz',
                'status' => 1
            ],
            [
                'name' => 'Redkitepad',
                'url' => 'https://redkitepad.com/#/dashboard',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/8617.png',
                'pad' => 'redkitepad',
                'status' => 1
            ],
            [
                'name' => 'Kommunitas',
                'url' => 'https://launchpad.kommunitas.net/',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/10403.png',
                'pad' => 'kommunitas',
                'status' => 1
            ],
            [
                'name' => 'Avalaunch',
                'url' => 'https://avalaunch.app/launchpad',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/9797.png',
                'pad' => 'avalaunch',
                'status' => 1
            ],
            [
                'name' => 'Aipad',
                'url' => 'https://app.aipad.tech/api/projects',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/23300.png',
                'pad' => 'aipad',
                'status' => 0
            ],
            [
                'name' => 'Trustswap',
                'url' => 'https://dashboard.trustswap.org/app/launchpads',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/5829.png',
                'pad' => 'trustswap',
                'status' => 0
            ],
            [
                'name' => 'Arbipad',
                'url' => 'https://www.arbipad.com/projects',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/25152.png',
                'pad' => 'arbipad',
                'status' => 1
            ],
            [
                'name' => 'Solanium',
                'url' => 'https://www.solanium.io/dashboard',
                'image' => 'https://s2.coinmarketcap.com/static/img/coins/64x64/9741.png',
                'pad' => 'solanium',
                'status' => 1
            ]

        ];
        foreach ($launchpads as $launchpad)
        {
            Launchpad::firstOrCreate($launchpad);
        }
    }
}
