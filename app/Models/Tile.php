<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Map\Terrains;

class Tile extends Model
{
    protected $guarded = [];

    public static function getCoordinates($x, $y)
    {
        $tile = self::where('x', $x)->where('y', $y)->first();

        if (is_null($tile)) {
            return self::generateTile($x, $y);
        }

        return $tile;
    }

    public static function generateTile($x, $y)
    {
        return self::create([
            'x' => $x,
            'y' => $y,
            'terrain' => app(Terrains::class)->random()->slug,
        ]);
    }
}
