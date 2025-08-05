<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Throwable;

class Handler extends ExceptionHandler
{
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            // You can log or report here if needed
        });
    }

    public function render($request, Throwable $e)
    {
        // Handle Inertia validation errors
        if ($request->header('X-Inertia') && $e instanceof ValidationException) {
            return redirect()->back()
                ->withErrors($e->validator)
                ->withInput();
        }

        // Fallback to default Laravel behavior
        return parent::render($request, $e);
    }
}
