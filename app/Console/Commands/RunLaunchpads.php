<?php

namespace App\Console\Commands;

use App\Models\Project;
use App\Services\ProductService;
use Illuminate\Console\Command;
use App\Models\Launchpad;
use App\Services\LaunchpadService;
use Illuminate\Support\Str;

class RunLaunchpads extends Command
{
    protected $signature = 'run:launchpads';
    protected $description = 'Execute launchpads with status true';

    public function handle()
    {

        $launchpads = Launchpad::where('status', true)->get();

        $launchpadService = new LaunchpadService();

        foreach ($launchpads as $launchpad) {
            $classPath = $this->getLaunchpadClassPath($launchpad->pad);

            if (class_exists($classPath)) {
                $launchpadService->addLaunchpad(new $classPath(new ProductService(new Project())));
            } else {
                $this->error("Class not found for {$launchpad->pad}");
            }
        }

        $launchpadService->processLaunchpads();
    }

    protected function getLaunchpadClassPath($className): string
    {
        $namespace = 'App\\Launchpads\\';

        return $namespace . Str::studly($className);
    }
}
