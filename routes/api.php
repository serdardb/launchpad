<?php

use App\Http\Controllers\JsRenderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(JsRenderController::class)->group(function () {
    Route::get('/aipad', 'aipad')->name('api.aipad');
    Route::post('/aipad_callback', 'aipad_callback')->name('api.aipad_callback');
});
