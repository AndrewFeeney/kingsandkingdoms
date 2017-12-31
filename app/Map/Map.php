<?php

namespace App\Map;

use App\Models\Tile;

class Map
{
    public function getTileSet($topLeftX, $topLeftY, $width = 25)
    {
        $tiles = collect();
        for ($y = $topLeftY; $y < $topLeftY + $width; $y++) {
            $row = collect();
            for ($x = $topLeftX; $x < $topLeftX + $width; $x++) {
                $row->push(Tile::getCoordinates($x, $y));
            }

            $tiles->push($row);
        }

        return collect($tiles);
    }
}
