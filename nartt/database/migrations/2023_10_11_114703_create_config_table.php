<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('db_config', function (Blueprint $table) {
            $table->id();
            $table->string('author', 1000);
            $table->string('email', 1000);
            $table->string('phone', 1000);
            $table->string('zalo', 1000);
            $table->string('facebook', 1000);
            $table->string('address', 1000);
            $table->string('youtube', 1000);
            $table->string('metadesc', 1000);
            $table->string('metakey', 1000);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('db_config');
    }
};
