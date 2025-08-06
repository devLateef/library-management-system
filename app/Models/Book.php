<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transaction;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'author',
        'isbn',
        'publisher',
        'accession_no',
        'call_no',
        'category',
        'status'
    ];

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
    
    public function latestTransaction()
    {
        return $this->hasOne(Transaction::class)->latestOfMany();
    }

    protected function dueDate(): Attribute
    {
        return Attribute::make(
            get: fn () => optional($this->latestTransaction)->due_date,
        );
    }
}
