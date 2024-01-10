<?php

namespace App\Http\Controllers;

use App\Models\Launchpad;
use App\Models\LaunchpadProduct;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function indexold(): Response
    {

        $products = Product::select('products.*')
            ->join('launchpad_product', 'products.id', '=', 'launchpad_product.product_id')
            ->where('launchpad_product.status', 1)
            ->orderByRaw("CASE
                WHEN launchpad_product.end_date LIKE 'TBA' THEN 1
                WHEN launchpad_product.end_date >= NOW() THEN 0
                ELSE 2
            END, launchpad_product.end_date")
            ->groupBy('products.id')
            ->with('launchpads')
            ->has('launchpads')
            ->get()
            ->map(function ($e) {
                $e->minPrice = $e->minPrice;
                $e->maxPrice = $e->maxPrice;
                $e->minRaise = $e->minRaise;
                $e->maxRaise = $e->maxRaise;
                return $e;
            });
        return Inertia::render('Home', [
            'products' => $products,
        ]);
    }

    public function index(Request $request): Response
    {

        $today = Carbon::now()->format('Y-m-d H:i:s');

        $subQuery = DB::table('launchpad_product as lp_inner')
            ->select('lp_inner.product_id', DB::raw('MIN(lp_inner.start_date) as earliest_start_date'))
            ->groupBy('lp_inner.product_id');


        $query = DB::table('launchpad_product as lp')
            ->select(
                'lp.*',
                DB::raw('(SELECT GROUP_CONCAT(launchpad_id) FROM launchpad_product WHERE product_id = lp.product_id) as launchpad_ids')
            )
            ->leftJoin('products', 'lp.product_id', '=', 'products.id')
            ->leftJoin('launchpads', 'lp.launchpad_id', '=', 'launchpads.id')
            ->joinSub($subQuery, 'sub', function ($join) {
                $join->on('lp.product_id', '=', 'sub.product_id')
                    ->on('lp.start_date', '=', 'sub.earliest_start_date');
            })
            ->whereRaw("(lp.start_date = 'TBA' OR lp.start_date > ?)", [$today]);

        $productQuery = null;
        if ($request->token) {
            $productQuery = Product::where('token', '=', $request->token)
                ->orWhere('name', 'LIKE','%'.$request->token.'%');
        }
        if ($request->network) {
            if ($productQuery) {
                $productQuery = $productQuery->where('network', '=', $request->network);
            } else {
                $productQuery = Product::where('network', '=', $request->network);
            }
        }
        if ($productQuery) {
            $query = $query->whereRaw('lp.product_id IN (' . implode(',', $productQuery->get()->pluck('id')->toArray()) . ')');
        }
        if ($request->launchpadId) {
            $query = $query->where('launchpad_id', $request->launchpadId);
        }
        if ($request->excludeTBA) {
            $filter = filter_var($request->excludeTBA, FILTER_VALIDATE_BOOLEAN);
            if ($filter) {
                $query = $query->where('lp.end_date', '!=', 'TBA');
            }
        }
        $query->orderByRaw("CASE
                WHEN lp.start_date = 'TBA' THEN 1
                WHEN lp.start_date > ? THEN 0
                ELSE 2
            END", [Carbon::now()])
            ->orderBy('lp.start_date', 'desc')->groupBy('product_id');
        $data = $query->paginate(10);
        foreach ($data as $key => $item) {
            $product = Product::find($item->product_id);
            $sub = $product;
            $sub->minPrice = $product->minPrice;
            $sub->maxPrice = $product->maxPrice;
            $sub->minRaise = $product->minRaise;
            $sub->maxRaise = $product->maxRaise;
            $launchpadIds = explode(',',$item->launchpad_ids);
            $sub->launchpads = Launchpad::whereIn('id', $launchpadIds)->where('status',1)->get();
            $sub->start_date = $item->start_date;
            $sub->end_date = $item->end_date;
            $sub->offering_type = $item->offering_type;
            $sub->price = $item->price;
            $sub->raise = $item->raise;
            $data[$key] = $sub;
        }

        return Inertia::render('Home', [
            'products' => $data,
            'networks' => Product::select('network')->distinct()->get()->pluck('network'),
            'launchpads' => Launchpad::where('status', 1)->get(),
        ]);
    }

    public function product(Product $product)
    {
        dd($product);
    }

}
