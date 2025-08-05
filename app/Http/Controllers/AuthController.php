<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function __construct(
        protected AuthService $authService
    ) {}

    public function showHome()
    {
        return Inertia::render('Home');
    }
    public function showRegisterForm()
    {
        return Inertia::render('Register');
    }

    public function showLoginForm()
    {
        return Inertia::render('Login');
    }

    public function showDashboard()
    {
        return Inertia::render('Books/AllBooks');
    }

    public function register(RegisterRequest $request)
    {
        try {
            // Validate input
            $data = $request->validated();

            // User is written to the database
            $this->authService->register($data);

    
            return redirect('/login')->with('message', 'Registration successful! Please log in.');
        } catch (\Throwable $th) {
            logger($th);
            // For custom errors not caught by validation
            return redirect()->back()->with('error', 'Something went wrong. Please try again.');
        }
    }

    public function login(LoginRequest $request)
    {
        try{
            // Validate input
            $data = $request->validated();

            // Login user in
            $this->authService->login($data);

            return redirect('/dashboard');
        } catch (\Throwable $th){
            logger($th);
            return redirect()->back()->with('error', 'invalid credentials supplied');
        }
    }

    public function logout()
    {
        $this->authService->logOut();
    }
}
