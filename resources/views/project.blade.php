@extends('app')
@section('content')
    <div class="cs-height_100 cs-height_lg_70"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="cs-height_0 cs-height_lg_40"></div>
                <div class="cs-single_product_head cs-card cs-style5 cs-style4 cs-type1 cs-white_bg cs-box_shadow">

                    <div class="cs-card_media">
                        <div class="cs-card_img">
                            <img src="{{ $project->image }}" alt="Avatar">
                        </div>
                        <div class="cs-card_media_right">
                            <h3>{{ \Illuminate\Support\Str::ucfirst($project->name) }}</h3>
                            <p>${{ \Illuminate\Support\Str::upper($project->token) }}</p>
                        </div>
                    </div>

                    <span class="d-none"><i style="color: #FF4E4E;" class="fas fa-heart fa-fw"></i>2.1K</span>
                </div>
                <div class="cs-height_25 cs-height_lg_25"></div>
                <div class="cs-tabs cs-fade_tabs cs-style1">
                    <div class="cs-medium">
                        <ul class="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                            <li class="active"><a href="#listings">{{ trans('project.page.listings') }}</a></li>
                            <li><a href="#details">{{ trans('project.page.detail') }}</a></li>
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
                                                <h3>Launchpad</h3>
                                            </div>
                                        </div>
                                        <div class="col-2 text-center">
                                            <h3>Start Date</h3>
                                        </div>
                                        <div class="col-2 text-center">
                                            <h3>End Date</h3>
                                        </div>
                                        <div class="col-2 text-center">
                                            <h3>Price</h3>
                                        </div>
                                        <div class="col-2 text-center">
                                            <h3>Raise</h3>
                                        </div>
                                        <div class="col-2 d-flex justify-content-end text-right"></div>
                                    </div>
                                </li>
                                @foreach($listings as $listing)
                                <li>
                                    <div class="cs-card cs-style5 cs-style4 cs-type1 cs-white_bg cs-box_shadow">
                                        <div class="col-2">
                                            <div class="cs-card_media">
                                                <div class="cs-card_img">
                                                    <img src="{!! asset($listing->launchpad->image) !!}" alt="Avatar">
                                                </div>
                                                <div class="cs-card_media_right">
                                                    <h3>{!! $listing->launchpad->name !!}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2 text-center">
                                            <div class="cs-card_media_right">
                                                @if($listing->start_date)
                                                    <h3>{!! \Carbon\Carbon::createFromDate($listing->start_date)->format('Y-m-d') !!}</h3>
                                                    <p>{!! \Carbon\Carbon::createFromDate($listing->start_date)->format('H:i') !!}</p>
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
                                                    <p>{!! \Carbon\Carbon::createFromDate($listing->end_date)->format('H:i') !!}</p>
                                                    <small>{{ \Carbon\Carbon::createFromDate($listing->end_date)->diffForHumans() }}</small>
                                                @else
                                                    <h3>TBA</h3>
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
