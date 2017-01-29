<?php

namespace App\Map;

class Terrains
{
    const TYPES = [
        [
            'name' => 'Grassland',
            'slug' => 'grassland',
            'weight' => 100
        ],
        [
            'name' => 'Hills',
            'slug' => 'hills',
            'weight' => 20,
        ],
        [
            'name' => 'Mountain',
            'slug' => 'mountain',
            'weight' => 10,
        ],
        [
            'name' => 'Forest',
            'slug' => 'forest',
            'weight' => 25,
        ],
        [
            'name' => 'Lake',
            'slug' => 'lake',
            'weight' => 10
        ],
    ];

    /**
     * Return a random terrain
     **/
    public function random()
    {
        $types = collect(self::TYPES);

        $totalWeight = $types->sum(function ($type) {
            return $type['weight'];
        });

        $randomNumber = mt_rand(1, $totalWeight);

        return new Terrain($types->first(function ($type, $key) use ($randomNumber, $types) {
            return ($types->take($key + 1)->sum('weight') >= $randomNumber);
        }));
    }
}
