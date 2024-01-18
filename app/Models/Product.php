<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'token', 'network', 'icon', 'website'];

   /* public function launchpadProducts(): HasMany
    {
        return $this->hasMany(LaunchpadProduct::class, 'product_id', 'id');
    }

    public function launchpads(): BelongsToMany
    {
        return $this->belongsToMany(Launchpad::class, 'launchpad_product')
            ->withPivot('price', 'raise', 'offering_type', 'start_date', 'end_date', 'status')
            ->wherePivot('status', 1)
            ->where('launchpads.status', 1); // Launchpad modelindeki status değeri 1 olanları filtrele
    }*/

    public function launchpadProducts(): HasMany
    {
        return $this->hasMany(LaunchpadProduct::class, 'product_id');
    }

    public function launchpads(): BelongsToMany
    {
        return $this->belongsToMany(Launchpad::class, 'launchpad_product', 'product_id', 'launchpad_id')
            ->where('launchpads.status', 1) // 'launchpad' tablosundaki 'status' sütunu için şart
            ->distinct();
    }


    public function getMinRaiseAttribute()
    {
        return $this->launchpads()->min('launchpad_product.raise');
    }

    public function getMaxRaiseAttribute()
    {
        return $this->launchpads()->max('launchpad_product.raise');
    }


    public function getMinPriceAttribute()
    {
        return $this->launchpads()->min('launchpad_product.price');
    }

    public function getMaxPriceAttribute()
    {
        return $this->launchpads()->max('launchpad_product.price');
    }
}
