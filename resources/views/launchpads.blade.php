@extends('app')

@section('content')
    <div class="cs-height_90 cs-height_lg_80"></div>
    <!-- Start Page Head -->
    <section class="pt-4 pb-3 cs-bg" data-src="/assets/img/page_head_bg.svg">
        <div class="container">
            <div class="text-center">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('home') }}">{{ trans('menu.home') }}</a></li>
                    <li class="breadcrumb-item active">{{ trans('menu.launchpads') }}</li>
                </ol>
            </div>
        </div>
    </section>
    <div class="cs-height_30"></div>
    <section>
        <div class="container">
            <h2 class="cs-section_heading cs-style1 text-center">{{ trans('menu.launchpads') }}</h2>
            <div class="cs-height_45 cs-height_lg_45"></div>
            <div class="cs-sliders cs-style1 cs-gap-30">

                <div class="row">
                    @foreach($launchpads as $launchpad)

                        <div class="col-2 mb-4">
                            <a href="{{ route('launchpad', ['launchpad' => $launchpad->id, 'slug' => $launchpad->pad]) }}" class="cs-card cs-style6 cs-box_shadow cs-white_bg text-center">
                                <span class="cs-avatar"><img src="{{ asset($launchpad->image) }}" alt="Avatar"></span>
                                <div class="cs-card_info">
                                    <h3 class="cs-card_title">{{ $launchpad->name }}</h3>
                                </div>
                            </a>
                        </div>

                    @endforeach

                </div>

                <div class="cs-height_10 cs-height_lg_10"></div>
                <div class="cs-pagination cs-style1"></div>
            </div>
        </div>
    </section>
@endsection
