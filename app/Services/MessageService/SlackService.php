<?php

namespace App\Services\MessageService;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class SlackService implements MessageService
{
    public function sendMessage($name, $message)
    {
        try {
            $client = new Client();

            $response = $client->post(
                config('services.slack.webhook_url'),
                [
                    'json' => [
                        'text' => "Name: {$name}, message: {$message}",
                    ],
                ]
            );

            return $response;
        } catch (RequestException $e) {
            throw $e;
        }
    }
}
