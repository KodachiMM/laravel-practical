<?php

namespace App\Http\Controllers;

use App\Events\FormSubmitted;
use App\Helpers\PaginationHelper;
use App\Http\Requests\FormCreateRequest;
use App\Http\Requests\FormUpdateRequest;
use App\Http\Resources\FormResource;
use App\Models\Form;
use App\Models\User;

class FormController extends Controller
{
    // For other services that might want to request all rest APIs
    public function index()
    {
        $forms = Form::paginate(10);
        $data = PaginationHelper::removePaginateLinks($forms);
        $data['status'] = 'success';
        $data['data'] = collect($data['data'])->map(fn($item) => new FormResource($item));
        return response()->json($data);
    }

    public function store(FormCreateRequest $request)
    {
        $form = Form::create($request->validated());

        FormSubmitted::dispatch(auth()->user(), $form);

        return [
            'status' => 'success',
            'data' => new FormResource($form),
        ];
    }

    // For other services that might want to request all rest APIs
    public function show(Form $form)
    {
        return [
            'status' => 'success',
            'data' => new FormResource($form),
        ];
    }

    // For other services that might want to request all rest APIs
    public function update(FormUpdateRequest $request, Form $form)
    {
        $form->update($request->validated());

        return [
            'status' => 'success',
            'data' => new FormResource($form),
        ];
    }

    // For other services that might want to request all rest APIs
    public function destroy(Form $form)
    {
        $form->delete();

        return [
            'status' => 'success',
            'message' => 'Form deleted successfully.',
        ];
    }

    // For other services that might want to request all rest APIs
    public function getAllByCurrentUser()
    {
        $forms = Form::where('user_id', auth()->id())->paginate(10);
        $data = PaginationHelper::removePaginateLinks($forms);
        $data['status'] = 'success';
        $data['data'] = collect($data['data'])->map(fn($item) => new FormResource($item));
        return response()->json($data);

        // // OR
        // With Eager Loading
        return auth()->user()
            ->load(['forms' => fn($query) => $query->limit(10)]);

        // OR
        return User::with(['forms' => fn($query) => $query->limit(10)])
            ->where('id', auth()->id())
            ->firstOrFail();
    }
}
