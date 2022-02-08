<?php

namespace App\Listeners;

use App\Events\FormSubmitted;
use App\Mail\FormSubmitted as MailFormSubmitted;
use Illuminate\Support\Facades\Mail;
use Exception;

class SendFormSubmitNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\FormSubmitted  $event
     * @return void
     */
    public function handle(FormSubmitted $event)
    {
        try {
            Mail::to($event->user)->send(new MailFormSubmitted($event->form));
        } catch (Exception $e) {
            logger()->critical($e);
        }
    }
}
