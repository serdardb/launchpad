@extends('app')

@section('content')
    <div class="cs-height_90 cs-height_lg_80"></div>
    <!-- Start Page Head -->
    <section class="pt-4 pb-3 cs-bg" data-src="/assets/img/page_head_bg.svg">
        <div class="container">
            <div class="text-center">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('home') }}">{{ trans('menu.home') }}</a></li>
                    <li class="breadcrumb-item active">{{ trans('menu.listings') }}</li>
                </ol>
            </div>
        </div>
    </section>

    <x-listing-component></x-listing-component>

@endsection

@push('head.after')
    <style>
        .cs-card.cs-style4.cs-type1 .cs-avatar_images img {
            width: 50px;
            height: 50px;
            max-width: inherit;
            border: 1px solid #fff;
            margin-left: -12px;
            background: black;
            padding: 5px;
        }
        .cs-card.cs-style5 .cs-card_img img {
            background: black;
            height: 100%;
            width: 100%;
            -o-object-fit: inherit;
            object-fit: inherit;
            padding: 5px;
            /* border-radius: inherit; */
        }
    </style>
@endpush
