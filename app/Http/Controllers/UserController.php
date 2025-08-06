<?php

namespace App\Http\Controllers;

use App\Exceptions\CustomException;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Pagination\Cursor;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\CustomCssFile;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function profile()
    {
        return Inertia::render('Users/Profile', [
            'auth' => [
                'user' => auth()->user()
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Users/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request, UserService $userService)
    {
        try{
            $data = $request->validated();
            $userService->registerUser($data);
            return redirect('dashboard')->with('message', 'User Created Successfully');
        }catch(\Throwable $th){
            logger($th);
            return redirect()->back()->with('error', 'Something went wrong. Please try again.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return Inertia::render('Users/EditProfile', [
            'auth' => [
                'user' => auth()->user()
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, UserService $userService)
    {
        try {
            $data = $request->validated();
            $user = auth()->user();
            $userService->updateUser($data, $user);
            return redirect('dashboard')->with('message', 'User Updated Successfully');
        } catch (\Throwable $th) {
            logger()->error($th);
            return redirect()->back()->with('error', 'Something went wrong. Please try again.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
