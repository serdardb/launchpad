@extends('app')

@section('content')

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
