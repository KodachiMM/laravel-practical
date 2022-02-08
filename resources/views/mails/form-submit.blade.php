@component('mail::message')
# Form Submitted

Your form been submitted!

@component('mail::panel')
Name: {{ $form->name }}<br/>
Phone Number: {{ $form->phone_number }}<br/>
Date of Birth: {{ Carbon\Carbon::parse($form->date_of_birth)->format('d M Y') }}<br/>
Gender: {{ ucwords($form->gender) }}
@endcomponent

Thanks,<br/>
{{ config('app.name') }}
@endcomponent