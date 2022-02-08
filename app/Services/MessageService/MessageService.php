<?php

namespace App\Services\MessageService;

interface MessageService
{
    public function sendMessage($to, $message);
}
