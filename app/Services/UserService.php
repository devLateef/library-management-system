<?php

    namespace App\Services;

    use App\Exceptions\CustomException;
    use App\Models\User;
use Illuminate\Support\Facades\Hash;

    class UserService
    {
        public function registerUser(array $data): User
        {
            try{
                $user = new User();
                $user->first_name = $data['first_name'];
                $user->last_name = $data['last_name'];
                $user->phone = $data['phone'];
                $user->dob = $data['dob'];
                $user->email = $data['email'];
                $user->role = $data['role'];
                $user->password = Hash::make(strtolower($data['last_name']));
                $user->save();
                return $user;
            } catch(\Throwable $th){
                logger($th);
                throw new CustomException('Unable to create book');
            }
        }
    }