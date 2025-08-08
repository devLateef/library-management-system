<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'bail|required',
            'last_name' => 'bail|required',
            'matric_no' => 'bail|required',
            'dob' => 'bail|required',
            'phone' => 'bail|required',
            'level' => 'bail|required',
            'department' => 'bail|required',
            'email' => 'bail|required|email|unique:users,email',
            'password' => 'required|confirmed|min:8'
        ];
    }
}
