<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;

class LoginController extends Controller
{
    public function store(LoginRequest $request)
    {
        $token = $request->authenticate($request->validated());

        return response()->json([
            'status' => 'success',
            'data' => new UserResource(auth()->user()),
            'token' => $token,
        ]);
    }

    public function destroy()
    {
        request()->user()->tokens()->delete();
        auth('web')->logout();

        return response()->json([
            'status' => 'success',
            'message' => 'Logout success.',
        ]);
    }
}
