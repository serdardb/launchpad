<?php

namespace App\Http\Controllers;

use App\Models\Launchpad;
use App\Models\Project;
use Butschster\Head\Contracts\MetaTags\MetaInterface;
use Carbon\Carbon;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    protected MetaInterface $meta;

    public function __construct(MetaInterface $meta)
    {
        $this->meta = $meta;
    }
    public function home(): Factory|Application|View|\Illuminate\Contracts\Foundation\Application
    {
        $this->meta
            ->prependTitle(trans('seo.home.title'))
            ->setDescription(trans('seo.home.description'))
            ->setKeywords(trans('seo.home.keywords'))
            ->addMeta('twitter:card', ['content' => 'summary_large_image',])
            ->addMeta('twitter:title',['content' => trans('seo.home.title')])
            ->addMeta('twitter:description',['content' => trans('seo.home.description')])
            ->addMeta('twitter:image', ['content' => asset('assets/img/logo.png')])
            ->addMeta('og:title',['content' => trans('seo.home.title')])
            ->addMeta('og:description',['content' => trans('seo.home.description')])
            ->addMeta('og:image', ['content' => asset('assets/img/logo.png')])
            ->addMeta('og:url', ['content' => route('home')])
            ->addMeta('og:type', ['content' => 'website'])
            ->includePackages('twitter');
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

    public function launchpads(): Factory|Application|View|\Illuminate\Contracts\Foundation\Application
    {
        $this->meta
            ->prependTitle(trans('seo.launchpads.title'))
            ->setDescription(trans('seo.launchpads.description'))
            ->setKeywords(trans('seo.launchpads.keywords'))
            ->addMeta('twitter:card', ['content' => 'summary_large_image',])
            ->addMeta('twitter:title',['content' => trans('seo.launchpads.title')])
            ->addMeta('twitter:description',['content' => trans('seo.launchpads.description')])
            ->addMeta('twitter:image', ['content' => asset('assets/img/logo.png')])
            ->addMeta('og:title',['content' => trans('seo.launchpads.title')])
            ->addMeta('og:description',['content' => trans('seo.launchpads.description')])
            ->addMeta('og:image', ['content' => asset('assets/img/logo.png')])
            ->addMeta('og:url', ['content' => route('launchpads')])
            ->addMeta('og:type', ['content' => 'website'])
            ->includePackages('twitter');
        return view('launchpads',[
            'launchpads' => Launchpad::where('status',1)->orderBy('name')->get()
        ]);

    }

    public function launchpad(Launchpad $launchpad): Factory|Application|View|\Illuminate\Contracts\Foundation\Application
    {
        $this->meta
            ->prependTitle(trans('seo.launchpad.title', ['launchpad' => $launchpad->name]))
            ->setDescription(trans('seo.launchpad.description', ['launchpad' => $launchpad->name]))
            ->setKeywords(trans('seo.launchpad.keywords', ['launchpad' => $launchpad->name]))
            ->addMeta('twitter:card', ['content' => 'summary_large_image'])
            ->addMeta('twitter:title',['content' => trans('seo.launchpad.title', ['launchpad' => $launchpad->name])])
            ->addMeta('twitter:description',['content' => trans('seo.launchpad.description', ['launchpad' => $launchpad->name])])
            ->addMeta('twitter:image', ['content' => asset('assets/img/logo.png')])
            ->addMeta('og:title',['content' => trans('seo.launchpad.title', ['launchpad' => $launchpad->name])])
            ->addMeta('og:description',['content' => trans('seo.launchpad.description', ['launchpad' => $launchpad->name])])
            ->addMeta('og:image', ['content' => asset('assets/img/logo.png')])
            ->addMeta('og:url', ['content' => route('launchpad', ['launchpad' => $launchpad->id, 'slug'=> $launchpad->pad ])])
            ->addMeta('og:type', ['content' => 'website'])
            ->includePackages('twitter');

        $today = Carbon::now();
        $listings = $launchpad->listings()->with('project')->has('project')
            ->orderByRaw("
                CASE
                    WHEN end_date IS NULL THEN 1
                    WHEN end_date < '{$today}' THEN 2
                    ELSE 0
                END ASC,
                ABS(DATEDIFF(end_date, '{$today}'))
            ")
            ->get();

        return view('launchpad', [
            'launchpad' => $launchpad,
            'listings' => $listings
        ]);
    }

    public function project(Project $project, $slug): Factory|Application|View|\Illuminate\Contracts\Foundation\Application
    {
        $this->meta
            ->prependTitle(trans('seo.project.title', ['project' => Str::title($project->name)]))
            ->setDescription(trans('seo.project.description', ['project' => Str::title($project->name)]))
            ->setKeywords(trans('seo.project.keywords', ['project' => Str::title($project->name)]))
            ->addMeta('twitter:card', ['content' => 'summary_large_image'])
            ->addMeta('twitter:title',['content' => trans('seo.project.title', ['project' => Str::title($project->name)])])
            ->addMeta('twitter:description',['content' => trans('seo.project.description', ['project' => Str::title($project->name)])])
            ->addMeta('twitter:image', ['content' => asset('assets/img/logo.png')])
            ->addMeta('og:title',['content' => trans('seo.project.title', ['project' => Str::title($project->name)])])
            ->addMeta('og:description',['content' => trans('seo.project.description', ['project' => Str::title($project->name)])])
            ->addMeta('og:image', ['content' => asset('assets/img/logo.png')])
            ->addMeta('og:url', ['content' => route('project', ['project' => $project->id, 'slug'=> $project->token ])])
            ->addMeta('og:type', ['content' => 'website'])
            ->includePackages('twitter');

        if ($project->token !== $slug) abort(404);
        $today = Carbon::now();

        $listings = $project->listings()->with('launchpad')->has('launchpad')
            ->orderByRaw("
                CASE
                    WHEN end_date IS NULL THEN 1
                    WHEN end_date < '{$today}' THEN 2
                    ELSE 0
                END ASC,
                ABS(DATEDIFF(end_date, '{$today}'))
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
