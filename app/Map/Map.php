<?php

namespace App\Map;

use App\Models\Tile;

class Map
{
    public function getTileSet($x, $y, $width = 15)
    {
        $topLeftX = $x - floor($width / 2);
        $topLeftY = $y - floor($width / 2);

        $tiles = collect();

        for ($x = $topLeftX; $x < $topLeftX + $width; $x++) {
            $column = collect();
            for ($y = $topLeftY; $y < $topLeftY + $width; $y++) {
                $column->push(Tile::getCoordinates($x, $y));
            }
            $tiles->push($column);
        }

        return collect($tiles);
    }
}
