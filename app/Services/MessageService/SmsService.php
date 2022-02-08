<?php

namespace App\Services\MessageService;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class SmsService implements MessageService
{
    public function sendMessage($phoneNumber, $message)
    {
        // Depends on the SMS API.
        try {
            $client = new Client();

            $response = $client->post(
                config('services.sms.url'),
                [
                    'headers' => [
                        'Accept' => 'application/json',
                    ],
                    'json' => [
                        'phone_number' => $phoneNumber,
                        'message' => $message,
                    ],
                ]
            );

            return $response;
        } catch (RequestException $e) {
            throw $e;
        }
    }
}
