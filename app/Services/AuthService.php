<?php

    namespace App\Services;

    use App\Models\User;
    use App\Exceptions\CustomException;
    use Illuminate\Http\RedirectResponse;
    use Illuminate\Support\Facades\Auth;
    use Illuminate\Support\Facades\Hash;

    class AuthService
    {

        public function register(array $data): User
        {
            try{
                $user = new User();
                $user->first_name = $data['first_name'];
                $user->last_name = $data['last_name'];
                $user->matric_no = $data['matric_no'];
                $user->phone = $data['phone'];
                $user->dob = $data['dob'];
                $user->level = $data['level'];
                $user->department = $data['department'];
                $user->email = $data['email'];
                $user->password = Hash::make($data['password']);
                $user->save();
                return $user;
            }
            catch(\Throwable $th)
            {
                logger($th);
                throw new CustomException("Unable to create user");
            }
        }

        public function login(array $data): User
        {
            if(!Auth::attempt(['email' => $data['email'], 'password' => $data['password']]))
            {
                throw new CustomException('Invalid Credentials');
            }

            $user = Auth::user();
            return $user;
        }

        public function logOut(): RedirectResponse
        {
            
            Auth::logout();
            return redirect('/');
        }
    }