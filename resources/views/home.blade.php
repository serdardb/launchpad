@extends('app')

@section('content')

    <x-hero-component></x-hero-component>

    <x-upcomming-project-component></x-upcomming-project-component>

    <x-icon-box-component></x-icon-box-component>

    <x-logo-carousel-component></x-logo-carousel-component>

    <x-faq-style1-component></x-faq-style1-component>

    <x-cta-component></x-cta-component>

@endsection

@push('head.after')

{{--    <meta property="og:title" content="{{ trans('seo.home.title') }}">
    <meta property="og:description" content="{{ trans('seo.home.description') }}">
    <meta property="og:image" content="{{ asset('assets/img/logo.png') }}">
    <meta property="og:url" content="{{ route('home') }}">
    <meta property="og:type" content="website">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ trans('seo.home.title') }}">
    <meta name="twitter:description" content="{{ trans('seo.home.description') }}">
    <meta name="twitter:image" content="{{ asset('assets/img/logo.png') }}">--}}

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
    </style>
@endpush
