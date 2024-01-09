<?php

namespace App\Jobs;

use App\Models\Launchpad;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessLaunchpad implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    protected Launchpad $launchpad;
    public function __construct(Launchpad $launchpad)
    {
        $this->launchpad = $launchpad;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $className = '\\App\\Launchpads\\' . $this->launchpad->class_name;
        if (class_exists($className)) {
            $provider = new $className();
            // Burada $provider üzerinden gerekli işlemleri yapın
        }
    }
}
