<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
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
            'name' => 'bail|required|string|max:255|min:3|unique:books,name',
            'author' => 'bail|required|unique:books,isbn',
            'publisher' => 'bail|required',
            'isbn' => 'bail|required',
            'accession_no' => 'bail|required',
            'call_no' => 'bail|required',
            'category' => 'bail|required'
        ];
    }
}
