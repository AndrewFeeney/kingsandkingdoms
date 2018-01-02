<?php

namespace Tests\Feature\Acceptance\Map;

use App\Models\Piece;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class IndexMapTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function a_guest_may_query_a_map_of_width_1()
    {
        $response = $this->json('get', 'map', [
            'x' => 0,
            'y' => 0,
            'width' => 1
        ]);

        $response->assertJsonFragment([
            'x' => 0,
            'y' => 0,
        ]);
    }

    /** @test */
    public function a_guest_may_query_a_map_of_width_1_by_the_top_left_tile()
    {
        $response = $this->json('get', 'map', [
            'x' => 1,
            'y' => 0,
            'width' => 1
        ]);

        $response->assertJsonFragment([
            'x' => 1,
            'y' => 0,
        ]);
    }

    /** @test */
    public function a_guest_may_query_a_map_of_width_2()
    {
        $response = $this->json('get', 'map', [
            'x' => 0,
            'y' => 0,
            'width' => 2
        ]);

        $response->assertJsonFragment([
            'x' => 0,
            'y' => 0,
        ]);
        $response->assertJsonFragment([
            'x' => 0,
            'y' => 1,
        ]);
        $response->assertJsonFragment([
            'x' => 1,
            'y' => 0,
        ]);
        $response->assertJsonFragment([
            'x' => 1,
            'y' => 1,
        ]);
    }

    /** @test */
    public function a_guest_may_query_a_map_of_width_2_by_the_top_left_tile()
    {
        $response = $this->json('get', 'map', [
            'x' => 1,
            'y' => 1,
            'width' => 2
        ]);

        $response->assertJsonFragment([
            'x' => 1,
            'y' => 1,
        ]);
        $response->assertJsonFragment([
            'x' => 1,
            'y' => 2,
        ]);
        $response->assertJsonFragment([
            'x' => 2,
            'y' => 1,
        ]);
        $response->assertJsonFragment([
            'x' => 2,
            'y' => 2,
        ]);
    }

    /** @test */
    public function a_guest_may_query_a_map_of_width_1_with_a_piece()
    {
        factory(Piece::class)->states('king')->create()->moveToCoordinates(0, 0);

        $response = $this->json('get', 'map', [
            'x' => 0,
            'y' => 0,
            'width' => 1
        ]);

        $response->assertJsonFragment([
            'type' => 'king'
        ]);
    }
}
