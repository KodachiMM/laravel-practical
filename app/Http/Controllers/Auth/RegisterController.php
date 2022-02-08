<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Jobs\RegisterUser;
use App\Models\User;
use App\Services\MessageService\MessageService;

class RegisterController extends Controller
{
    // Dependency Injection
    public function __construct(private MessageService $messageService)
    {

    }

    public function __invoke(RegisterRequest $request)
    {
        $user = User::create($request->validated());

        RegisterUser::dispatch($user, $this->messageService);

        return response()->json([
            'user' => $user,
            'token' => $user->createToken('User-Token')->plainTextToken,
        ]);
    }
}
