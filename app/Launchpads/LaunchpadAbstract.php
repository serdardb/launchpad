<?php

namespace App\Launchpads;
use App\Services\ProductService;

abstract class LaunchpadAbstract
{
    protected ProductService $product;

    public function __construct(ProductService $product)
    {
        $this->product = $product;
    }

    /**
     * Bu metod, launchpad için gerekli hazırlıkları yapar.
     * Bu metod opsiyoneldir ve eğer tanımlıysa önce bu metod çalıştırılmalıdır.
     *
     * @return array
     */
    public function prepare(): array
    {
        // Varsayılan olarak boş bir array döner, alt sınıflar bu metodu override edebilir.
        return [];
    }

    /**
     * Bu metod, launchpad için veri çekme işlemini başlatır.
     * Bu metod zorunludur ve her launchpad sınıfı bu metodu tanımlamalıdır.
     *
     * @return array
     */
    abstract public function send(): array;

    /**
     * Bu metod, çekilen verilerin işlenmesi için kullanılır.
     * Bu metod zorunludur ve her launchpad sınıfı bu metodu tanımlamalıdır.
     *
     * @param array $response Çekilen veriler
     * @param array $request  İstek verileri
     * @param float $time     İstek süresi
     */
    abstract public function process(array $response, array $request, float $time);

}
