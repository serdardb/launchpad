@extends('app')
@section('content')
    <div class="cs-height_90 cs-height_lg_80"></div>
    <!-- Start Page Head -->
    <section class="pt-4 pb-3 cs-bg" data-src="/assets/img/page_head_bg.svg">
        <div class="container">
            <div class="text-center">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('home') }}">{{ trans('menu.home') }}</a></li>
                    <li class="breadcrumb-item"><a href="{{ route('launchpads') }}">{{ trans('menu.launchpads') }}</a></li>
                    <li class="breadcrumb-item active">{{ $launchpad->name }}</li>
                </ol>
            </div>
        </div>
    </section>
    <!-- End Page Head -->
    <div class="cs-height_30"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="cs-height_0 cs-height_lg_40"></div>
                <div class="cs-single_product_head cs-card cs-style5 cs-style4 cs-type1 cs-white_bg cs-box_shadow">

                    <div class="cs-card_media">
                        <div class="me-2 ms-2">
                            <img class="limg" src="{{ $launchpad->image }}" alt="Avatar">
                        </div>
                        <div class="cs-card_media_right">
                            <h3>{{ \Illuminate\Support\Str::title($launchpad->name) }}</h3>
                        </div>
                    </div>

                    <span class="d-none"><i style="color: #FF4E4E;" class="fas fa-heart fa-fw"></i>2.1K</span>
                </div>
                <div class="cs-height_25 cs-height_lg_25"></div>
                <div class="cs-tabs cs-fade_tabs cs-style1">
                    <div class="cs-medium">
                        <ul class="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                            <li class="active"><a href="#listings">{{ trans('general.listings') }}</a></li>
                            <li><a href="#details">{{ trans('general.launchpad_detail') }}</a></li>
                        </ul>
                    </div>
                    <div class="cs-height_20 cs-height_lg_20"></div>
                    <div class="cs-tab_content">
                        <div id="listings" class="cs-tab active">
                            <ul class="cs-activity_list cs-mp0">
                                <li>

                                    <div class="cs-card cs-style5 cs-style4 cs-type1 cs-white_bg cs-box_shadow">
                                        <div class="col-2">
                                            <div class="cs-card_media">
                                                <h3>{{ trans('general.project') }}</h3>
                                            </div>
                                        </div>
                                        <div class="col-2 text-center">
                                            <h3>{{ trans('general.start_date') }}</h3>
                                        </div>
                                        <div class="col-2 text-center">
                                            <h3>{{ trans('general.end_date') }}</h3>
                                        </div>
                                        <div class="col-2 text-center">
                                            <h3>{{ trans('project.price') }}</h3>
                                        </div>
                                        <div class="col-2 text-center">
                                            <h3>{{ trans('project.raise') }}</h3>
                                        </div>
                                        <div class="col-2 d-flex justify-content-end text-right"></div>
                                    </div>
                                </li>
                                @foreach($listings as $listing)
                                    <li>
                                        <div class="cs-card cs-style5 cs-style4 cs-type1 cs-white_bg cs-box_shadow">
                                            <div class="col-2">
                                                <div class="cs-card_media">
                                                    <div class="me-2 ms-2">
                                                        <img class="bg-dark p-3 limg" src="{!! asset($listing->project->image) !!}" alt="Avatar">
                                                    </div>
                                                    <div class="cs-card_media_right">
                                                        <h3>{{ \Illuminate\Support\Str::title( $listing->project->name) }}</h3>
                                                        <p>${{ \Illuminate\Support\Str::upper($listing->project->token) }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-2 text-center">
                                                <div class="cs-card_media_right">
                                                    @if($listing->start_date)
                                                        <h3>{!! \Carbon\Carbon::createFromDate($listing->start_date)->format('Y-m-d') !!}</h3>
                                                        <p>{!! \Carbon\Carbon::createFromDate($listing->start_date)->format('H:i') !!} UTC</p>
                                                        <small>{{ \Carbon\Carbon::createFromDate($listing->start_date)->diffForHumans() }}</small>
                                                    @else
                                                        <h3>TBA</h3>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="col-2 text-center">
                                                <div class="cs-card_media_right">
                                                    @if($listing->end_date)
                                                        <h3>{!! \Carbon\Carbon::createFromDate($listing->end_date)->format('Y-m-d') !!}</h3>
                                                        <p>{!! \Carbon\Carbon::createFromDate($listing->end_date)->format('H:i') !!} UTC</p>
                                                        <small>{{ \Carbon\Carbon::createFromDate($listing->end_date)->diffForHumans() }}</small>
                                                    @else
                                                        <h3>{{ trans('general.tba') }}</h3>
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="col-2 text-center">
                                                <p><strong>{{ trans('project.price') }}: </strong>{!! ($listing->price) !!}</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <p><strong>{{ trans('project.raise') }}: </strong>${!! number_format($listing->raise) !!}</p>
                                            </div>
                                            <div class="col-2 d-flex justify-content-end text-right">
                                                <a target="_blank" href="{{ $listing->url ?? $listing->launchpad->url }}" class="cs-color2 cs-hero_btn cs-style1" style="padding: 5px 20px"><span>{{ trans('project.view') }}</span></a>
                                            </div>
                                        </div>
                                    </li>
                                @endforeach
                            </ul>
                        </div><!-- .cs-tab -->
                        <div id="details" class="cs-tab">
                            <div class="cs-white_bg cs-box_shadow cs-general_box_5">
                                Amet lorem minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet lorem minim mollit nonese deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Velit officia else est sit ullamco es duis.
                            </div>
                        </div><!-- .cs-tab -->
                    </div>
                </div>

            </div>
        </div>
    </div>

@endsection
@push('head.after')
    <style>
        .limg {
            border-radius:50%;
            width: 85px;
            height: 85px;
            min-height: 85px;
            min-width: 85px;
            max-width: inherit;
            border: 1px solid #fff;
            margin-left: -12px;
            background: black;
            padding: 5px;
        }
    </style>
@endpush
