@extends('app')

@section('content')

    <!-- Start Error -->
    <div class="cs-bg" data-src="{{ asset('/assets/img/page_head_bg.svg') }}">
        <div class="container">
            <div class="cs-error_card text-center">
                <div class="cs-error_img"><img src="{{ asset('/assets/img/soon.svg') }}" alt="404"></div>
                <div class="cs-height_70 cs-height_lg_40"></div>
                <a href="{!! route('home') !!}" class="cs-btn cs-style1 cs-btn_lg"><span>{{ trans('menu.home') }}</span></a>
            </div>
        </div>
    </div>
    <!-- End Error -->

@endsection
