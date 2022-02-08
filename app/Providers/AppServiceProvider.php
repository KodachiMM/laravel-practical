<?php

namespace App\Providers;

use App\Services\MessageService\MessageService;
use App\Services\MessageService\SlackService;
use App\Services\MessageService\SmsService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->environment('production')) {
            $this->app->bind(MessageService::class, SmsService::class);
        } else {
            $this->app->bind(MessageService::class, SlackService::class);
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
