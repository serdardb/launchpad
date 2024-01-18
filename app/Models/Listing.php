<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Listing extends Model
{
    use HasFactory;

    protected $fillable = ['project_id', 'launchpad_id', 'price', 'raise', 'start_date', 'end_date'];

    // Listing modeli bir projeye ait
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    // Listing modeli bir launchpad'e ait
    public function launchpad(): BelongsTo
    {
        return $this->belongsTo(Launchpad::class);
    }

}
