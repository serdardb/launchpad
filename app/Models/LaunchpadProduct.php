<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LaunchpadProduct extends Model
{
    use HasFactory;
    protected $table = 'launchpad_product';
    protected $fillable = ['launchpad_id', 'product_id', 'price', 'raise', 'offering_type', 'start_date', 'end_date'];


    public function scopeDateRange($query, $startDate, $endDate)
    {
        return $query->whereBetween('start_date', [$startDate, $endDate])
            ->orWhereBetween('end_date', [$startDate, $endDate]);
    }

    public function scopeRaiseGreaterThan($query, $minRaise)
    {
        return $query->where('raise', '>', $minRaise);
    }

    public function getTotalPriceAttribute(): float|int
    {
        return $this->raise * $this->price;
    }
}
