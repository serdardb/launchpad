<?php

namespace App\Services;

use App\Models\Launchpad;
use App\Models\LaunchpadProduct;
use App\Models\Project;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductService
{
    protected Project $model;

    public function __construct(Project $product)
    {
        $this->model = $product;
    }

    public function product($name, $token, $network, $icon = null, $website = null)
    {
        $name = Str::of($name)->lower();
        $token = $this->token_clear(Str::of($token)->lower());
        $network = $this->network_mapping(Str::of($network)->lower());
        $product = $this->model
            ->where('token', $token)
            ->where('network', $network)
            ->first();
        if (!$product) {
            $product = $this->model->create([
                'name' => $name,
                'token' => $token,
                'network' => $network,
                'icon' => $icon,
                'website' => $website,
            ]);
        }
        return $product;
    }

    private function launchpad($key)
    {
        return Launchpad::where('pad', Str::snake($key))->first();
    }

    private function launchpad_product($launchpad, $project, $array): void
    {
        $price = $array['price'];
        $raise = intval($array['raise']);
        //$offeringType = $array['offering_type'];
        $startDate = null; $endDate = null;
        if (isset($array['start_date']) and  Str::upper($array['start_date']) !== "TBA") $startDate = $array['start_date'];
        if (isset($array['end_date']) and  Str::upper($array['end_date']) !== "TBA") $endDate = $array['end_date'];

        $launchpadProduct = DB::table('listings')
            ->where('launchpad_id', $launchpad->id)
            ->where('project_id', $project->id)
            ->where('price', $price)
            ->where('raise', $raise)
            //->where('offering_type', $offeringType)
            ->first();
        if ($launchpadProduct) {
            DB::table('listings')
                ->where('id', $launchpadProduct->id)
                ->update([
                    'start_date' => $startDate,
                    'end_date' => $endDate,
                ]);
        } else {
            DB::table('listings')->insert([
                'launchpad_id' => $launchpad->id,
                'project_id' => $project->id,
                'price' => $price,
                'raise' => $raise,
                //'offering_type' => $offeringType,
                'start_date' => $startDate,
                'end_date' => $endDate,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    public function run($array): void
    {
        $arrayProduct = $array['product'];
        $launchpad = $this->launchpad($array['launchpad']);
        if (gettype($arrayProduct) !== 'object') {
            $product = $this->product(
                $arrayProduct['name'],
                $this->token_clear($arrayProduct['token']),
                $this->network_mapping($arrayProduct['network']),
                $arrayProduct['icon'] ?? null,
                $arrayProduct['website'] ?? null,
            );
        } else {
            $product = $arrayProduct;
        }

        $this->launchpad_product($launchpad, $product, [
            'price' => $array['price'],
            'raise' => $array['raise'],
            'offering_type' => $array['offering_type'],
            'start_date' => $array['start_date'],
            'end_date' => $array['end_date'],
        ]);
    }

    public function token_clear($token): array|string
    {
        return str_replace('$', '', $token);
    }

    public function network_mapping($network): string
    {
        return match (Str::lower($network)) {
            'bsc', 'bnb', 'bsc_based', 'bep20' => "binance",
            'erc20', 'eth', 'ethereum' => "ethereum",
            'matic' => "polygon",
            default => Str::lower($network),
        };
    }

    public function network_mapping_chain_id($id): string
    {
        $networks = [
            1 => "ethereum",
            8 => "ubiq",
            10 => "optimism",
            19 => "songbird",
            20 => "elastos",
            24 => "kardiachain",
            25 => "cronos",
            30 => "rsk",
            40 => "telos",
            50 => "xdc",
            52 => "csc",
            55 => "zyx",
            56 => "binance",
            57 => "syscoin",
            60 => "gochain",
            61 => "ethereumclassic",
            66 => "okexchain",
            70 => "hoo",
            82 => "meter",
            87 => "nova network",
            88 => "viction",
            100 => "xdai",
            106 => "velas",
            108 => "thundercore",
            122 => "fuse",
            128 => "heco",
            137 => "polygon",
            148 => "shimmer_evm",
            169 => "manta",
            200 => "xdaiarb",
            204 => "op_bnb",
            246 => "energyweb",
            248 => "oasys",
            250 => "fantom",
            269 => "hpb",
            288 => "boba",
            311 => "omax",
            314 => "filecoin",
            321 => "kucoin",
            324 => "era",
            336 => "shiden",
            361 => "theta",
            369 => "pulse",
            416 => "sx",
            534 => "candle",
            570 => "rollux",
            592 => "astar",
            820 => "callisto",
            888 => "wanchain",
            1030 => "conflux",
            1088 => "metis",
            1101 => "polygon_zkevm",
            1116 => "core",
            1231 => "ultron",
            1234 => "step",
            1284 => "moonbeam",
            1285 => "moonriver",
            1440 => "living assets mainnet",
            1559 => "tenet",
            1975 => "onus",
            2000 => "dogechain",
            2222 => "kava",
            2332 => "soma",
            4337 => "beam",
            4689 => "iotex",
            5000 => "mantle",
            5050 => "xlc",
            5551 => "nahmii",
            6969 => "tombchain",
            7700 => "canto",
            8217 => "klaytn",
            8453 => "base",
            8899 => "jbc",
            9001 => "evmos",
            9790 => "carbon",
            10000 => "smartbch",
            15551 => "loop",
            17777 => "eos_evm",
            32520 => "bitgert",
            32659 => "fusion",
            32769 => "zilliqa",
            42161 => "arbitrum",
            42170 => "arbitrum_nova",
            42220 => "celo",
            42262 => "oasis",
            43114 => "avalanche",
            47805 => "rei",
            55555 => "reichain",
            59144 => "linea",
            71402 => "godwoken",
            333999 => "polis",
            420420 => "kekchain",
            888888 => "vision",
            245022934 => "neon",
            1313161554 => "aurora",
            1666600000 => "harmony",
            11297108109 => "palm",
            836542336838601 => "curio"
        ];
        return $networks[$id] ?? 'undefined';
    }

    public function check($products, $launchpadKey): void
    {
        $launchpad = $this->launchpad($launchpadKey);
        $data = LaunchpadProduct::where('launchpad_id', $launchpad->id)
            ->whereNotIn('product_id',$products->pluck('id'))->update([
                'status' => 0
            ]);
    }
}
