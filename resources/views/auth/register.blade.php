@extends('app')

@section('content')
    <div class="cs-height_100 cs-height_lg_70"></div>
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-md-8 offset-xl-3 offset-md-2">
                <form action="{{ route('store') }}" method="post" class="cs-form_card cs-style1 cs-box_shadow cs-white_bg">
                    @csrf
                    <div class="cs-form_card_in">
                        <h2 class="cs-form_title text-center">{{ trans('auth.register_title') }}</h2>
                        <div class="cs-form_btns d-none">
                            <a href="#" class="cs-btn cs-style2 cs-btn_lg">
                                <span><i class="fab fa-google"></i>Google</span>
                            </a>
                            <a href="#" class="cs-btn cs-style2 cs-btn_lg">
                                <span><i class="fab fa-facebook-f"></i>Facebook</span>
                            </a>
                            <a href="#" class="cs-btn cs-style2 cs-btn_lg">
                                <span><i class="fab fa-linkedin-in"></i>Linkedin</span>
                            </a>
                        </div>
                        <div class="cs-height_30 cs-height_lg_30"></div>
                        <div class="cs-form_field_wrap">
                            <input type="text" class="cs-form_field @error('name') is-invalid @enderror" id="name" name="name" value="{{ old('name') }}" placeholder="{{ trans('auth.username') }}">
                            @if ($errors->has('name'))
                                <span class="cs-bold cs-filter_widget">{{ $errors->first('name') }}</span>
                            @endif
                        </div>
                        <div class="cs-height_20 cs-height_lg_20"></div>
                        <div class="cs-form_field_wrap">
                            <input type="email" class="cs-form_field @error('email') is-invalid @enderror" id="email2" name="email" value="{{ old('email') }}" placeholder="{{ trans('auth.email') }}">
                            @if ($errors->has('email'))
                                <span class="cs-bold cs-filter_widget">{{ $errors->first('email') }}</span>
                            @endif
                        </div>
                        <div class="cs-height_20 cs-height_lg_20"></div>
                        <div class="cs-form_field_wrap">
                            <input type="password" class="cs-form_field @error('password') is-invalid @enderror" id="password" name="password" placeholder="{{ trans('auth.password') }}">
                            @if ($errors->has('password'))
                                <span class="cs-bold cs-filter_widget">{{ $errors->first('password') }}</span>
                            @endif
                        </div>

                        <div class="cs-height_20 cs-height_lg_20"></div>
                        <div class="cs-form_field_wrap">
                            <input type="password" class="cs-form_field @error('password') is-invalid @enderror" id="password_confirmation" name="password_confirmation" placeholder="{{ trans('auth.password_confirm') }}">
                        </div>

                        <div class="cs-height_20 cs-height_lg_20"></div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="notify">
                            <label class="form-check-label" for="notify">{{ trans('auth.approval') }}</label>
                        </div>
                        <div class="cs-height_20 cs-height_lg_20"></div>
                        <button type="submit" class="cs-btn cs-style1 cs-btn_lg w-100">
                            <span>{{ trans('auth.register_button') }}</span>
                        </button>
                        <div class="cs-height_30 cs-height_lg_30"></div>
                        <div class="cs-form_footer text-center">{{ trans('auth.login_text') }} <a href="{{ route('login') }}">{{ trans('auth.login_button') }}</a></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="cs-height_100 cs-height_lg_70"></div>
@endsection
