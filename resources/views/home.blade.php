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
