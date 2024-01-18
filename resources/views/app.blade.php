<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @stack('head.before')
    @include('common.head')
    @stack('head.after')
    <style>
        .cs-notification_box .cs-toggle_body {
            width: 150px;
            padding: 0 0;
        }
        .cs-notification_box .cs-notification_item {
            padding: 10px;
        }
        .cs-card.cs-style4 .cs-avatar {
            padding-right: 0;
        }
        body.cs-dark .cs-card.cs-style4 .cs-avatar {
            background-color: transparent;
        }
        #app{
            min-height: calc(100vh - 180px);
        }
        .cs-profile_box ul {
            margin: 0;
        }
        .cs-cover_photo {
            height: 200px;
        }
    </style>
</head>
<body>
    @include('common.loader')
    @stack('header.before')
    @include('common.header')
    @stack('header.after')
    <div id="app">
    @stack('content.before')
    @yield('content')
    @stack('content.after')
    </div>

    @stack('footer.before')
    @include('common.footer')
    @stack('footer.after')
    @stack('scripts.before')
    @include('common.scripts')
    @stack('scripts.after')
</body>
</html>
