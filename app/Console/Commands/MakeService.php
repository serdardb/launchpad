<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Illuminate\Filesystem\Filesystem;

class MakeService extends Command
{
    protected $signature = 'make:service {serviceName}';
    protected $description = 'Create a new service class';

    public function handle(Filesystem $filesystem)
    {
        $serviceName = $this->argument('serviceName');
        $className = Str::studly($serviceName);
        $serviceClass = "App\\Services\\{$className}Service";
        $path = $this->getPath($serviceClass);

        if ($filesystem->exists($path)) {
            $this->error("{$className}Service already exists!");
            return;
        }

        $filesystem->ensureDirectoryExists(dirname($path));
        $filesystem->put($path, $this->buildClass("{$className}Service"));

        $this->info("{$className}Service created successfully.");
    }

    protected function getPath($name)
    {
        $name = Str::replaceFirst('App\\', '', $name);
        return app_path(str_replace('\\', '/', $name).'.php');
    }

    protected function buildClass($name)
    {
        $stub = $this->serviceStub();
        return str_replace('{{className}}', $name, $stub);
    }

    protected function serviceStub()
    {
        return <<<EOT
        <?php

        namespace App\Services;

        class {{className}}
        {
            //
        }
        EOT;
    }
}
