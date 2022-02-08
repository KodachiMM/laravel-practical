<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1'], function () {
    Route::middleware('guest')->group(function () {
        Route::post('login', [LoginController::class, 'store']);
        Route::post('register', RegisterController::class);
    });

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('user', UserController::class);
        Route::get('user/forms', [FormController::class, 'getAllByCurrentUser']);

        Route::resource('forms', FormController::class);

        Route::post('logout', [LoginController::class, 'destroy']);
    });
});
