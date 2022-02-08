<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'phone_number',
        'date_of_birth',
        'gender',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
