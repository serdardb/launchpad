<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Crypto SEDB</title>
    <link rel="icon" href="{!! asset("assets/img/favicon.png") !!}">
    <link rel="stylesheet" href="{!! asset("assets/css/style.css") !!}">

    @vite('resources/js/app.js')
    @inertiaHead
</head>

<body>
<div id="gameon-preloader" class="gameon-preloader">
    <div class="preloader-animation">
        <div class="spinner"></div>
        <p class="fw-5 text-center text-uppercase">Loading</p>
    </div>
    <div class="loader-animation">
        <div class="row h-100">
            <div class="col-3 single-loader p-0">
                <div class="loader-bg"></div>
            </div>
            <div class="col-3 single-loader p-0">
                <div class="loader-bg"></div>
            </div>
            <div class="col-3 single-loader p-0">
                <div class="loader-bg"></div>
            </div>
            <div class="col-3 single-loader p-0">
                <div class="loader-bg"></div>
            </div>
        </div>
    </div>
</div>

<div class="main">

    @include('layout.header')

    <section class="explore-area prev-project-area">
        <div class="container">
            @yield('content')
            @inertia
            <div class="row d-none">
                <div class="col-12">
                    <div class="intro d-flex justify-content-between align-items-end m-0">
                        <div class="intro-content">
                            <span class="intro-text">Exclusive</span>
                            <h3 class="mt-3 mb-0">Ongoing IGOs</h3>
                        </div>
                        <div class="intro-btn">
                            <a class="btn content-btn" href="leaderboard.html">View Leaderboard</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row items d-none">
                <div class="col-12 item">
                    <div class="card project-card prev-project-card">
                        <div class="project-content d-md-flex flex-column flex-md-row align-items-center justify-content-md-between">
                            <div class="item-header d-flex align-items-center mb-4 mb-md-0">
                                <img class="card-img-top avatar-max-lg" src="{!! asset("assets/img/content/thumb_6.png") !!}">
                                <div class="content ml-4">
                                    <h4 class="m-0">Ancient Kingdom</h4>
                                    <h6 class="mt-3 mb-0">Price (GAC) = 0.89 BUSD</h6>
                                </div>
                            </div>
                            <div class="blockchain d-inline-block mr-1 mr-md-0">
                                <img src="{!! asset("assets/img/content/ethereum.png") !!}">
                            </div>
                            <div class="single-item">
                                <span>5 hours ago</span>
                            </div>
                            <div class="single-item d-none d-md-inline-block">
                                <span>x86</span>
                            </div>
                            <div class="single-item">
                                <span>ATH:</span>
                                <span>$1.06298</span>
                            </div>
                        </div>
                        <a class="project-link" href="project-details.html"></a>
                    </div>
                </div>
                <div class="col-12 item">
                    <div class="card project-card prev-project-card">
                        <div class="project-content d-md-flex flex-column flex-md-row align-items-center justify-content-md-between">
                            <div class="item-header d-flex align-items-center mb-4 mb-md-0">
                                <img class="card-img-top avatar-max-lg" src="{!! asset("assets/img/content/thumb_7.png") !!}">
                                <div class="content ml-4">
                                    <h4 class="m-0">Galaxy War</h4>
                                    <h6 class="mt-3 mb-0">Price (GAC) = 0.72 BUSD</h6>
                                </div>
                            </div>
                            <div class="blockchain d-inline-block mr-1 mr-md-0">
                                <img src="{!! asset("assets/img/content/binance.png") !!}">
                            </div>
                            <div class="single-item">
                                <span>7 hours ago</span>
                            </div>
                            <div class="single-item d-none d-md-inline-block">
                                <span>x97</span>
                            </div>
                            <div class="single-item">
                                <span>ATH:</span>
                                <span>$0.9268</span>
                            </div>
                        </div>
                        <a class="project-link" href="project-details.html"></a>
                    </div>
                </div>
                <div class="col-12 item">
                    <div class="card project-card prev-project-card">
                        <div class="project-content d-md-flex flex-column flex-md-row align-items-center justify-content-md-between">
                            <div class="item-header d-flex align-items-center mb-4 mb-md-0">
                                <img class="card-img-top avatar-max-lg" src="{!! asset("assets/img/content/thumb_8.png") !!}">
                                <div class="content ml-4">
                                    <h4 class="m-0">Crypto Art</h4>
                                    <h6 class="mt-3 mb-0">Price (GAC) = 0.68 BUSD</h6>
                                </div>
                            </div>
                            <div class="blockchain d-inline-block mr-1 mr-md-0">
                                <img src="{!! asset("assets/img/content/solana.png") !!}">
                            </div>
                            <div class="single-item">
                                <span>8 hours ago</span>
                            </div>
                            <div class="single-item d-none d-md-inline-block">
                                <span>x64</span>
                            </div>
                            <div class="single-item">
                                <span>ATH:</span>
                                <span>$2.87641</span>
                            </div>
                        </div>
                        <a class="project-link" href="project-details.html"></a>
                    </div>
                </div>
                <div class="col-12 item">
                    <div class="card project-card prev-project-card">
                        <div class="project-content d-md-flex flex-column flex-md-row align-items-center justify-content-md-between">
                            <div class="item-header d-flex align-items-center mb-4 mb-md-0">
                                <img class="card-img-top avatar-max-lg" src="{!! asset("assets/img/content/thumb_9.png") !!}">
                                <div class="content ml-4">
                                    <h4 class="m-0">Marvel Design</h4>
                                    <h6 class="mt-3 mb-0">Price (GAC) = 0.49 BUSD</h6>
                                </div>
                            </div>
                            <div class="blockchain d-inline-block mr-1 mr-md-0">
                                <img src="{!! asset("assets/img/content/ethereum-gold.png") !!}">
                            </div>
                            <div class="single-item">
                                <span>6 hours ago</span>
                            </div>
                            <div class="single-item d-none d-md-inline-block">
                                <span>x75</span>
                            </div>
                            <div class="single-item">
                                <span>ATH:</span>
                                <span>$1.5967</span>
                            </div>
                        </div>
                        <a class="project-link" href="project-details.html"></a>
                    </div>
                </div>
                <div class="col-12 item">
                    <div class="card project-card prev-project-card">
                        <div class="project-content d-md-flex flex-column flex-md-row align-items-center justify-content-md-between">
                            <div class="item-header d-flex align-items-center mb-4 mb-md-0">
                                <img class="card-img-top avatar-max-lg" src="{!! asset("assets/img/content/thumb_5.png") !!}">
                                <div class="content ml-4">
                                    <h4 class="m-0">Partial Monk</h4>
                                    <h6 class="mt-3 mb-0">Price (GAC) = 0.78 BUSD</h6>
                                </div>
                            </div>
                            <div class="blockchain d-inline-block mr-1 mr-md-0">
                                <img src="{!! asset("assets/img/content/ethereum.png") !!}">
                            </div>
                            <div class="single-item">
                                <span>9 hours ago</span>
                            </div>
                            <div class="single-item d-none d-md-inline-block">
                                <span>x94</span>
                            </div>
                            <div class="single-item">
                                <span>ATH:</span>
                                <span>$0.43615</span>
                            </div>
                        </div>
                        <a class="project-link" href="project-details.html"></a>
                    </div>
                </div>
            </div>
            <div class="row mt-4 mt-md-5 d-none">
                <div class="col-12">
                    <nav>
                        <ul class='page-numbers'>
                            <li><span aria-current="page" class="page-numbers current">1</span></li>
                            <li><a class="page-numbers" href="#">2</a></li>
                            <li><span class="page-numbers dots">&hellip;</span></li>
                            <li><a class="page-numbers" href="#">4</a></li>
                            <li><a class="next page-numbers" href="#"><i class="icon-arrow-right"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>

    @include('layout.footer')

    @include('layout.search')

    @include('layout.menu')

</div>

@include('layout.scripts')
@stack('scripts')

</body>

</html>
