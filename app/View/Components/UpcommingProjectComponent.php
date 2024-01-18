<?php

namespace App\View\Components;

use App\Models\Project;
use Carbon\Carbon;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\DB;
use Illuminate\View\Component;

class UpcommingProjectComponent extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        $today = Carbon::today();
        $projects = Project::select('projects.*')
            ->leftJoin(DB::raw('(SELECT * FROM listings WHERE start_date >= "'.$today.'" OR start_date IS NULL) as filtered_listings'), function($join) {
                $join->on('projects.id', '=', 'filtered_listings.project_id');
            })
            ->selectRaw('MIN(COALESCE(filtered_listings.start_date)) as earliest_start_date')
            ->groupBy('projects.id')
            ->orderByRaw('ISNULL(earliest_start_date) ASC')
            ->orderBy('earliest_start_date', 'ASC')
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
            ->take(3)->get();

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
        return view('components.upcomming-project-component', [
            'projects' => $projects
        ]);
    }
}
