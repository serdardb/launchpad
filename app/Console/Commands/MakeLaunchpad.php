<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Str;

class MakeLaunchpad extends Command
{
    protected $signature = 'make:launchpad {launchpad}';
    protected $description = 'Create a new launchpad class';

    public function handle(Filesystem $filesystem)
    {
        $serviceName = $this->argument('launchpad');
        $className = Str::studly($serviceName);
        $serviceClass = "App\\Launchpads\\{$className}";
        $path = $this->getPath($serviceClass);

        if ($filesystem->exists($path)) {
            $this->error("{$className} already exists!");
            return;
        }

        $filesystem->ensureDirectoryExists(dirname($path));
        $filesystem->put($path, $this->buildClass("{$className}"));

        $this->info("{$className} created successfully.");
    }

    protected function getPath($name): string
    {
        $name = Str::replaceFirst('App\\', '', $name);
        return app_path(str_replace('\\', '/', $name).'.php');
    }

    protected function buildClass($name): array|string
    {
        $stub = $this->serviceStub();
        return str_replace('{{launchpad}}', $name, $stub);
    }

    protected function serviceStub(): string
    {
        return <<<EOT
        <?php

        namespace App\Launchpads;

        class {{launchpad}} extends LaunchpadAbstract
        {
            // Settings required for data retrieval process
            public function send(): array
            {
                return [
                    'url' => '',
                    //'headers' => [],
                    //'post' => "" or [],
                    //'options' => []
                ];
            }

            // Processing of retrieved data
            public function process(\$response, \$request, \$time): void
            {

            }
        }
        EOT;
    }
}
