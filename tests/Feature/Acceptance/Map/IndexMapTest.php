<?php

namespace Tests\Feature\Acceptance\Map;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class IndexMapTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function a_guest_may_query_a_map_by_the_center_tile()
    {
        $response = $this->json('get', 'map', [
            'x' => 0,
            'y' => 0,
            'width' => 3
        ]);

        $response->assertJson([
            'tiles' => [
                [
                    'x' => -1,
                    'y' => -1,
                ],
                [
                    'x' => -1,
                    'y' => 0,
                ]
            ]
        ]);
    }
}
