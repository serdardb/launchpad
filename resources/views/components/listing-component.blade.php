<div class="cs-height_95 cs-height_lg_70"></div>
<!-- Start Category -->
<section>
    <div class="container">

        <div class="cs-section_heading cs-style2" style="margin: 0 -15px;">
            <div class="cs-section_left">
                <h2 class="cs-section_title">{{ trans('project.title') }}</h2>
            </div>
        </div>

        <div class="cs-height_10 cs-height_lg_10"></div>

        <div class="row">
            <div class="col-xl-12">
                <form action="" method="get">
                <div class="cs-box_shadow cs-card cs-filter_widget cs-style4 cs-style5 cs-type1 cs-white_bg row">
                    <div class="col-3">
                        <div class="cs-card_media cs-form_field_wrap">
                            <input name="token" type="text" class="cs-form_field cs-field_sm" value="{!! request()->token !!}" placeholder="{{ trans('project.form.token') }}">
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="cs-form_field_wrap cs-select_arrow">
                            <select name="network" class="cs-form_field cs-field_sm">
                                <option value="">{{ trans('project.form.network') }}</option>
                                @foreach($networks as $network)
                                    <option value="{{ $network  }}" {{ request()->network == $network ? 'selected' : '' }}>{{ \Illuminate\Support\Str::ucfirst($network) }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="cs-form_field_wrap cs-select_arrow">
                            <select name="launchpad" class="cs-form_field cs-field_sm">
                                <option value="">{{ trans('project.form.launchpad') }}</option>
                                @foreach($launchpads as $launchpad)
                                    <option value="{{ $launchpad->id  }}" {{ request()->launchpad == $launchpad->id ? 'selected' : '' }}>{{ \Illuminate\Support\Str::ucfirst($launchpad->name) }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="float-end">
                            <a href="{!! route('listings') !!}" class="cs-btn cs-style1 cs-color1 cs-btn_sm">{{ trans('project.form.clear') }}</a>
                            <button class="cs-btn cs-style1 cs-btn_sm" type="submit"><span>{{ trans('project.form.apply') }}</span></button>
                        </div>
                    </div>
                </div>
                </form>
                <div class="cs-height_10"></div>
            </div>
            @foreach($projects as $project)

                <div class="col-xl-12">
                    <div class="cs-card cs-style5 cs-style4 cs-type1 cs-white_bg cs-box_shadow row">
                        <div class="col-2">
                            <div class="cs-card_media">
                                <div class="cs-card_img">
                                    <img src="{!! asset($project->image) !!}" alt="Avatar">
                                </div>
                                <div class="cs-card_media_right">
                                    <h3>{!! \Illuminate\Support\Str::ucfirst($project->name) !!}</h3>
                                    <p>${!! \Illuminate\Support\Str::upper($project->token) !!}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 text-center">
                            <img style="border-radius: 50%;margin: 0 auto;width: 28px; height: 28px" src="https://icons.llamao.fi/icons/chains/rsz_{!! $project->network !!}.jpg">
                        </div>
                        <div class="col-2 text-center">
                            <div class="cs-avatar">
                                <div class="cs-avatar_images">
                                    @foreach($project->launchpads as $launchpad)
                                        <img style="width: 50px!important; height: 50px!important;" width="50" height="50" src="{!! $launchpad->image !!}" alt="{!! $launchpad->name !!}">
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        <div class="col-2 text-center">
                            <div class="cs-card_media_right">
                                @if($project->earliest_start_date)
                                <h3>{!! $project->earliest_start_date !!}</h3>
                                <p class="d-none">10:00</p>
                                @else
                                    <h3>TBA</h3>
                                @endif
                            </div>
                        </div>
                        <div class="col-2 text-center">
                            <p><strong>{{ trans('project.price') }}: </strong>${!! $project->price !!}</p>
                            <p><strong>{{ trans('project.raise') }}: </strong>${!! $project->raise !!}</p>
                        </div>
                        <div class="col-2 d-flex justify-content-end text-right">
                            <a href="{{ route('project', ['project' => $project->id, 'slug' => $project->token]) }}" class="cs-color2 cs-hero_btn cs-style1" style="padding: 5px 20px"><span>{{ trans('project.view') }}</span></a>
                        </div>
                    </div>
                    <div class="cs-height_15 cs-height_lg_15"></div>
                </div>

            @endforeach

            {{ $projects->withQueryString()->links() }}

        </div>
    </div>
</section>
<!-- End Category -->
