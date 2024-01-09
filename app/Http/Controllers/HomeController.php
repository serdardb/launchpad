<?php

namespace App\Http\Controllers;

use App\Models\Launchpad;
use App\Models\Product;
use Illuminate\Http\Request;
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
        $query = Product::select('products.*')
            ->join('launchpad_product', 'products.id', '=', 'launchpad_product.product_id')
            ->where('launchpad_product.status', 1)
            ->with([
                'launchpads' => function($query){
                    $query->orderByRaw("CASE
                        WHEN launchpad_product.end_date LIKE 'TBA' THEN 2
                        WHEN launchpad_product.end_date >= NOW() THEN 0
                        ELSE 1
                    END, launchpad_product.end_date");
                }
            ])
            ->has('launchpads')
            ->when($request->token, function ($q) use ($request) {
                return $q->where('products.token', 'like', '%' . $request->token . '%')
                    ->orWhere('products.name', 'like', '%' . $request->token . '%');
            })
            ->when($request->network, function ($q) use ($request) {
                return $q->where('products.network', 'like', $request->network);
            })
            ->when($request->launchpadId, function ($q) use ($request) {
                return $q->whereHas('launchpads', function ($q) use ($request) {
                    $q->where('launchpads.id', $request->launchpadId);
                });
            })
            ->when($request->excludeTBA, function ($q) use($request){
                $filter = filter_var($request->excludeTBA, FILTER_VALIDATE_BOOLEAN);
                if ($filter) {
                    return $q->where('launchpad_product.end_date', '!=', 'TBA');
                }
            })
            ->orderByRaw("CASE
                WHEN launchpad_product.end_date LIKE 'TBA' THEN 2
                WHEN launchpad_product.end_date >= NOW() THEN 0
                ELSE 1
            END, launchpad_product.end_date")
            ->groupBy('products.id');
        $products = $query->paginate(10)->withQueryString()->through(function($e){
            $e->minPrice = $e->minPrice;
            $e->maxPrice = $e->maxPrice;
            $e->minRaise = $e->minRaise;
            $e->maxRaise = $e->maxRaise;
            return $e;
        });
        return Inertia::render('Home', [
            'products' => $products,
            'networks' => Product::select('network')->distinct()->get()->pluck('network'),
            'launchpads' => Launchpad::where('status',1)->get(),
        ]);
    }
}
