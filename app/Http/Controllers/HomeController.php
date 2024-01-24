<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Carbon\Carbon;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;

class HomeController extends Controller
{

    public function home(): Factory|Application|View|\Illuminate\Contracts\Foundation\Application
    {
        return view('home');
    }

    public function listings(): Factory|Application|View|\Illuminate\Contracts\Foundation\Application
    {
        return view('listings');
    }

    public function soon(): Factory|Application|View|\Illuminate\Contracts\Foundation\Application
    {
        return view('soon');
    }

    public function project(Project $project, $slug): Factory|Application|View|\Illuminate\Contracts\Foundation\Application
    {
        if ($project->token !== $slug) abort(404);
        $today = Carbon::now();

        $listings = $project->listings()->with('launchpad')->has('launchpad')
            ->orderByRaw("
                CASE
                    WHEN start_date IS NULL THEN 1
                    WHEN start_date < '{$today}' THEN 2
                    ELSE 0
                END DESC,
                ABS(DATEDIFF(start_date, '{$today}'))
            ")
            ->get();
        return view('project', [
            'project' => $project,
            'listings' => $listings
        ]);
    }

   /* public function index(Request $request): Response
    {

        $today = Carbon::today();
        $token = $request->token;
        $network = $request->network;
        $launchpadId = request('launchpadId');

        $projects = Project::select('projects.*')
            ->leftJoin(DB::raw('(SELECT * FROM listings WHERE start_date >= "'.$today.'" OR start_date IS NULL) as filtered_listings'), function($join) {
                $join->on('projects.id', '=', 'filtered_listings.project_id');
            })
            ->selectRaw('MIN(COALESCE(filtered_listings.start_date)) as earliest_start_date')
            ->groupBy('projects.id')
            ->orderByRaw('ISNULL(earliest_start_date) ASC')
            ->orderBy('earliest_start_date', 'ASC')
            ->when($token, function ($query) use ($token) {
                return $query->where(function($query) use ($token) {
                    $query->where('projects.name', 'LIKE', "%$token%")
                        ->orWhere('projects.token', 'LIKE', "%$token%");
                });
            })
            ->when($network, function ($query) use ($network) {
                return $query->where('projects.network', $network);
            })
            ->when($launchpadId, function ($query) use ($launchpadId) {
                return $query->whereHas('listings.launchpad', function ($query) use ($launchpadId) {
                    $query->where('id', $launchpadId);
                });
            })
            ->whereHas('listings', function ($query) use($today) {
                return $query->whereNull('start_date')
                    ->orWhere('start_date', '>=', $today); // Sonra tarihe göre artan sıralama;
            })
            ->with([
                'listings' => function($query) use($today) {
                    return $query->whereNull('start_date')
                        ->orWhere('start_date', '>=', $today)
                        ->orderByRaw('ISNULL(start_date) ASC') // Önce null olmayanlar
                        ->orderBy('start_date', 'ASC')
                        ->with('launchpad');
                }
            ])->has('listings')
            ->paginate(10);

        foreach ($projects as $key => $item) {
            $product = $item;
            $sub = $product;
            $sub->icon = $product->image;
            $sub->minPrice = 0;
            $sub->maxPrice = 0;
            $sub->minRaise = 0;
            $sub->maxRaise = 0;
            $uniqueLaunchpads = $product->listings->pluck('launchpad')->unique('id')->values();
            $sub->launchpads = $uniqueLaunchpads;
            $sub->start_date = $product->listings->first()->start_date;
            $sub->end_date = $product->listings->first()->end_date;
            $sub->offering_type = 'Public';
            $sub->price = $product->listings->first()->price;
            $sub->raise = $product->listings->first()->raise;
            $projects[$key] = $sub;
        }
        return Inertia::render('Home', [
            'products' => $projects,
            'networks' => Product::select('network')->distinct()->get()->pluck('network'),
            'launchpads' => Launchpad::where('status', 1)->get(),
        ]);
    }

    public function product(Product $product): Response
    {

        return Inertia::render('Product', [
            'product' => $product,
            'details' => $product->launchpadProducts()->with('launchpad')->get()
        ]);

    }*/

}
