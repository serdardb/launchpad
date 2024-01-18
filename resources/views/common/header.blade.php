
<!-- Start Header Section -->
<header class="cs-site_header cs-style1 cs-sticky-header cs-white_bg">
    <div class="cs-main_header">
        <div class="container-fluid">
            <div class="cs-main_header_in">
                <div class="cs-main_header_left">
<!--
                    <a class="cs-site_branding" href="/"><img src="{!! asset("https://upload.wikimedia.org/wikipedia/commons/1/1e/D.E.M.O._Logo_2006.svg") !!}" alt="Logo"></a>
-->
                    <a class="cs-site_branding" href="/"><img src="{!! asset("assets/img/logo.png") !!}" alt="Logo"></a>

                </div>
                <div class="cs-main_header_right">
                    <div class="cs-search_wrap d-none">
                        <form action="#" class="cs-search">
                            <input type="text" class="cs-search_input" placeholder="Search">
                            <button class="cs-search_btn">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="currentColor" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.5 18L13.875 14.375" stroke="currentColor" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div class="cs-nav_wrap">
                        <div class="cs-nav_out">
                            <div class="cs-nav_in">
                                <div class="cs-nav">
                                    <ul class="cs-nav_list">
                                        <li><a href="{!! route('home') !!}">{{ trans('menu.home') }}</a></li>
                                        <li><a href="{!! route('listings') !!}">{{ trans('menu.listings') }}</a></li>
                                        <li><a href="{!! route('launchpads') !!}">{{ trans('menu.launchpads') }}</a></li>
                                        <li><a href="{!! route('contact') !!}">{{ trans('menu.contact') }}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cs-header_btns_wrap">
                        <div class="cs-header_btns">
                            <div class="cs-header_icon_btn cs-center cs-mobile_search_toggle">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.5 18L13.875 14.375" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="cs-toggle_box cs-notification_box">
                                <div class="cs-toggle_btn cs-header_icon_btn cs-center">
                                    <svg width="19" height="19" viewBox="0 0 25 25" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="languageIconTitle" stroke="#ffffff" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#ffffff"> <title id="languageIconTitle">Language</title> <circle cx="12" cy="12" r="10"></circle> <path stroke-linecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"></path> <path stroke-linecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"></path> </svg>
                                </div>
                                <div class="cs-toggle_body">
                                    <ul class="cs-notification_list">
                                        @foreach(\LaravelLang\Locales\Facades\Locales::installed() as $locale)
                                        <li>
                                            <a href="{{ route('changeLang',['lang' => $locale->code]) }}" class="cs-notification_item">
                                                {{ $locale->native }}
                                            </a>
                                        </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                            <div class="cs-toggle_box cs-profile_box">
                                <div class="cs-toggle_btn cs-header_icon_btn cs-center">
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5 15.75V14.25C15.5 13.4544 15.1839 12.6913 14.6213 12.1287C14.0587 11.5661 13.2956 11.25 12.5 11.25H6.5C5.70435 11.25 4.94129 11.5661 4.37868 12.1287C3.81607 12.6913 3.5 13.4544 3.5 14.25V15.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9.5 8.25C11.1569 8.25 12.5 6.90685 12.5 5.25C12.5 3.59315 11.1569 2.25 9.5 2.25C7.84315 2.25 6.5 3.59315 6.5 5.25C6.5 6.90685 7.84315 8.25 9.5 8.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="cs-toggle_body">

                                    @auth
                                    <div class="cs-user_info">
                                        <h4 class="cs-user_balance">{{ auth()->user()->name }}</h4>
                                    </div>
                                    @endauth
                                    <ul>
                                        @auth
                                        <li><a href="{{ route('profile') }}">My Profile</a></li>
                                        @endauth
                                        <li>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" id="mode_switch">
                                                <label class="form-check-label" for="mode_switch">Night Mode</label>
                                            </div>
                                        </li>
                                        @guest
                                        <li><a href="{{ route('login') }}">Login</a></li>
                                        <li><a href="{{ route('register') }}">Register</a></li>
                                        @else
                                        <li>
                                            <a href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">Logout</a>
                                            <form id="logout-form" action="{{ route('logout') }}" method="POST">@csrf</form>
                                        </li>
                                        @endguest
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- End Header Section -->
