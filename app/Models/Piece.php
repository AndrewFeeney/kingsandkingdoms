<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Piece extends Model
{
    public function moveToCoordinates($x, $y)
    {
        return Tile::getCoordinates($x, $y)->placePiece($this);
    }
}
