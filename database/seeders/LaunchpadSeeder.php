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
                'url' => 'https://launchpad.seedify.fund/',
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
                'url' => 'https://paltform.decubate.com',
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
            ]
        ];
        foreach ($launchpads as $launchpad)
        {
            Launchpad::firstOrCreate($launchpad);
        }
    }
}
