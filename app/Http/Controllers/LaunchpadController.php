<?php

namespace App\Http\Controllers;

use App\Models\Launchpad;
use Illuminate\Http\Request;

class LaunchpadController extends Controller
{

    public function create()
    {
        $new = new Launchpad();
        $new->name = "ChainGPT";
        $new->path = "https://pad.chaingpt.org/";
        $new->image = "https://s2.coinmarketcap.com/static/img/coins/64x64/23756.png";
        $new->save();
    }

}
