<header id="header">
    <nav data-aos="zoom-out" data-aos-delay="800" class="navbar gameon-navbar navbar-expand relative" style="background-color: #121117; z-index: 1500;">
        <div class="container header">

            <a class="navbar-brand" href="{!! url('/') !!}">
                <img src="{!! asset("assets/img/logo/logo.png") !!}" />
            </a>

            <div class="d-none ml-auto"></div>

            <ul class="navbar-nav items mx-auto">
                <li class="nav-item">
                    <a href="{!! url('/') !!}" class="nav-link">Home</a>
                </li>
                <li class="d-none nav-item dropdown">
                    <a href="#" class="nav-link">Projects <i class="icon-arrow-down"></i></a>
                    <ul class="dropdown-menu" style="z-index: 1900;">
                        <li class="nav-item active">
                            <a href="project-1.html" class="nav-link active">Project Style 1</a>
                        </li>
                        <li class="nav-item">
                            <a href="project-2.html" class="nav-link">Project Style 2</a>
                        </li>
                        <li class="nav-item">
                            <a href="project-3.html" class="nav-link">Project Style 3</a>
                        </li>
                        <li class="nav-item">
                            <a href="project-4.html" class="nav-link">Project Style 4</a>
                        </li>
                        <li class="nav-item">
                            <a href="project-details.html" class="nav-link">Project Details</a>
                        </li>
                    </ul>
                </li>
                <li class="d-none nav-item dropdown">
                    <a href="#" class="nav-link">Staking <i class="icon-arrow-down"></i></a>
                    <ul class="dropdown-menu">
                        <li class="nav-item">
                            <a href="staking-1.html" class="nav-link">Staking Style 1</a>
                        </li>
                        <li class="nav-item">
                            <a href="staking-2.html" class="nav-link">Staking Style 2</a>
                        </li>
                    </ul>
                </li>
                <li class="d-none nav-item dropdown">
                    <a href="#" class="nav-link">Pages <i class="icon-arrow-down"></i></a>
                    <ul class="dropdown-menu">
                        <li class="nav-item">
                            <a href="farming.html" class="nav-link">Farming</a>
                        </li>
                        <li class="nav-item">
                            <a href="leaderboard.html" class="nav-link">Leaderboard</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">Inner Pages <i class="icon-arrow-right"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item">
                                    <a href="apply.html" class="nav-link">Apply for Project</a>
                                </li>
                                <li class="nav-item">
                                    <a href="wallet-connect.html" class="nav-link">Wallet Connect</a>
                                </li>
                                <li class="nav-item">
                                    <a href="help-center.html" class="nav-link">Help Center</a>
                                </li>
                                <li class="nav-item">
                                    <a href="contact.html" class="nav-link">Contact</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">Auth Pages <i class="icon-arrow-right"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item">
                                    <a href="login.html" class="nav-link">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a href="register.html" class="nav-link">Register</a>
                                </li>
                                <li class="nav-item">
                                    <a href="reset.html" class="nav-link">Forgot Password</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="tokenomics.html" class="nav-link">Tokenomics</a>
                        </li>
                        <li class="nav-item">
                            <a href="tier-system.html" class="nav-link">Tier System</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">Community <i class="icon-arrow-right"></i></a>
                            <ul class="dropdown-menu">
                                <li class="nav-item">
                                    <a href="blog.html" class="nav-link">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a href="blog-single.html" class="nav-link">Blog Single</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="javascript:void()" style="display: inline-block" class="nav-link">
                        <div>Launchpads</div>
                        <div style="font-size: xx-small;">Coming Soon</div>
                    </a>
                </li>
            </ul>

            <ul class="d-none navbar-nav icons">
                <li class="nav-item">
                    <a href="#" class="nav-link" data-toggle="modal" data-target="#search">
                        <i class="icon-magnifier"></i>
                    </a>
                </li>
            </ul>

            <ul class="d-none navbar-nav toggle">
                <li class="nav-item">
                    <a href="#" class="nav-link" data-toggle="modal" data-target="#menu">
                        <i class="icon-menu m-0"></i>
                    </a>
                </li>
            </ul>

            <ul class="d-none navbar-nav action">
                <li class="nav-item ml-2">
                    <a href="wallet-connect.html" class="btn ml-lg-auto btn-bordered-white"><i class="icon-wallet mr-md-2"></i>Wallet Connect</a>
                </li>
            </ul>

        </div>
    </nav>
</header>
