<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'token', 'network', 'image', 'description', 'website'];

    // Bir projenin birden fazla listelemesi olabilir
    public function listings(): HasMany
    {
        return $this->hasMany(Listing::class);
    }

    // Bir projenin birden fazla launchpad ile ilişkisi olabilir
    public function launchpads(): BelongsToMany
    {
        return $this->belongsToMany(Launchpad::class, 'listings');
    }
}
