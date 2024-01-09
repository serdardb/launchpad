@extends('layout.main')

@section('content')

    <div class="row items sticky-top" style="z-index: 1000;">
        <div class="col-12 item">
            <div class="card project-card prev-project-card" style="background-color: rgba(22, 24, 45, 1);">
                <div class="project-content d-md-flex flex-column flex-md-row align-items-center justify-content-md-between">
                    <div class="col-3"> Token </div>
                    <div class="col-3 text-center"> Chain - Launchpad </div>
                    <div class="col-2 text-center">Date</div>
                    <div class="col-2">Price</div>
                    <div class="col-2">Raise</div>
                </div>
            </div>

        </div>
    </div>

    <div class="row items" id="productList">

        @foreach($products as $product)
            <div class="col-12 item">
                <div class="card project-card prev-project-card">
                    <div class="project-content d-md-flex flex-column flex-md-row align-items-center justify-content-md-between">
                        <div class="col-3 item-header d-flex align-items-center mb-4 mb-md-0">
                            <img class="card-img-top avatar-md" style="max-width: 50px; max-height: 50px; width: 100%; height: 100%" src="{!! asset($product->icon) !!}">
                            <div class="content ml-4 text-light">
                                <p class="m-0 text-truncate">{!! \Illuminate\Support\Str::title($product->name) !!}</p>
                                <p class="small mt-0 mb-0">Token: ${!! \Illuminate\Support\Str::upper($product->token) !!}</p>
                            </div>
                        </div>
                        <div class="align-items-center col-3 d-flex images justify-content-around">
                            <img style="border-radius: 50%"
                                 width="25" height="25"
                                 src="https://icons.llamao.fi/icons/chains/rsz_{!! \Illuminate\Support\Str::lower($product->network) !!}.jpg">
                            <div>
                                @foreach($product->launchpads->unique('id') as $launchpad)
                                    <img style="border-radius: 50%"
                                         src="{!! $launchpad->image !!}"
                                         alt="{!! $launchpad->name !!}"
                                         title="{!! $launchpad->name !!}"
                                         width="40" height="40">
                                @endforeach
                            </div>
                        </div>
                        <div class="col-2 small text-center">
                            @if($product->launchpads->first()->pivot->end_date === "TBA")
                                TBA
                            @else
                                {{ \Carbon\Carbon::parse($product->launchpads->first()->pivot->end_date)->format('Y-m-d') }}<br>
                                <span style="font-size: smaller">{{ \Carbon\Carbon::parse($product->launchpads->first()->pivot->end_date)->format('H:i:s') }}</span>
                            @endif
                        </div>
                        <div class="col-2 text-truncate">
                            @if(count($product->launchpads) and $product->minPrice !== $product->maxPrice )
                                <p class="single-item " style="width: initial">
                                    <span>Min: {!! $product->minPrice !!}</span><br>
                                    <span>Max: {!! $product->maxPrice !!}</span>
                                </p>
                            @else
                                <p class="single-item " style="width: initial">Price: {!! $launchpad->pivot->price !!}</p>
                            @endif
                        </div>
                        <div class="col-2">
                            @if(count($product->launchpads) and $product->minRaise !== $product->maxRaise )
                                <p class="single-item">
                                    <span>Min: {!! number_format($product->minRaise) !!}</span><br>
                                    <span>Max: {!! number_format($product->maxRaise) !!}</span>
                                </p>
                            @else
                                <p class="single-item">Raise: {!! number_format($launchpad->pivot->raise) !!}</p>
                            @endif
                        </div>
                    </div>
                    <a class="project-link" href="#"></a>
                </div>
            </div>
        @endforeach

    </div>

@endsection
