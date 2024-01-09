<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('launchpad_product', function (Blueprint $table) {
            $table->id();
            $table->foreignId('launchpad_id')->constrained()->onDelete('cascade');
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            $table->string('price');
            $table->bigInteger('raise');
            $table->string('offering_type');
            $table->string('start_date')->nullable();
            $table->string('end_date')->nullable();
            $table->float('status')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('launchpad_product');
    }
};
