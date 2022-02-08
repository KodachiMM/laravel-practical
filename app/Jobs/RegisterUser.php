<?php

namespace App\Jobs;

use Exception;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class RegisterUser implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(protected $user, protected $messageService)
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            $this->messageService->sendMessage($this->user->name, 'A user just registered.');
        } catch (Exception $e) {
            logger()->info('please add SLACK_WEBHOOK_URL in .env to get notifications.');
        } catch (RequestException $e) {
            logger()->info($e->getMessage());
        }
    }
}
