<?php

use App\Http\Controllers\Auth\LoginRegisterController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LangController;
use App\Http\Controllers\LaunchpadController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/',  [HomeController::class, 'home'])->name('home');
Route::get('/listings',  [HomeController::class, 'listings'])->name('listings');
Route::get('/launchpads',  [HomeController::class, 'soon'])->name('launchpads');
Route::get('/contact',  [HomeController::class, 'soon'])->name('contact');
Route::get('/project/{project}/{slug}',  [HomeController::class, 'project'])->name('project');

Route::get('lang/change', [LangController::class, 'change'])->name('changeLang');

Route::controller(LoginRegisterController::class)->group(function() {
    Route::get('/profile', 'profile')->name('profile');
    Route::get('/register', 'register')->name('register');
    Route::post('/store', 'store')->name('store');
    Route::get('/login', 'login')->name('login');
    Route::post('/authenticate', 'authenticate')->name('authenticate');
    Route::get('/dashboard', 'dashboard')->name('dashboard');
    Route::post('/logout', 'logout')->name('logout');
});


/*Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');*/
