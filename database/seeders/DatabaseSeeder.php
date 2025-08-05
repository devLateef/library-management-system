<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'first_name' => env('FIRSTNAME', 'Admin'),
            'last_name' => env('LASTNAME', 'User'),
            'phone' => env('PHONE', '08000000000'),
            'dob' => env('DOB') ?: '1990-01-01',
            'level' => env('LEVEL', 'N/A'),
            'matric_no' => env('MATRIC_NO', 'ADMIN001'),
            'department' => env('DEPARTMENT', 'IT'),
            'email' => env('EMAIL', 'admin@gmail.com'),
            'role' => env('ROLE', 'superAdmin'),
            'password' => bcrypt(env('PASSWORD', 'adminpass')),
        ]);
    }
}
