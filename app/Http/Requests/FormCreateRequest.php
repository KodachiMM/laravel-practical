<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Propaganistas\LaravelPhone\PhoneNumber;

class FormCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'min:6', 'max:255'],
            'phone_number' => ['required', 'phone:MM'],
            'date_of_birth' => ['required', 'date_format:Y-m-d'],
            'gender' => ['required', 'in:male,female,other'],
        ];
    }

    /**
     * Get the validated data from the request.
     *
     * @return array
     */
    public function validated()
    {
        $validated = parent::validated();
        $validated['user_id'] = auth()->user()->id;
        $validated['phone_number'] = PhoneNumber::make($validated['phone_number'], 'MM');
        return $validated;
    }
}
