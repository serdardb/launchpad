<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Launchpad extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'pad', 'path', 'image', 'status'];
    protected $table = "launchpads";

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'launchpad_product')
            ->withPivot('price', 'raise', 'offering_type', 'start_date', 'end_date');
    }


    public function scopeActive($query)
    {
        return $query->where('status', true);
    }

    public function launchpadProducts(): HasMany
    {
        return $this->hasMany(LaunchpadProduct::class);
    }

    public function listings(): HasMany
    {
        return $this->hasMany(Listing::class);
    }
}
