<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Map\Terrains;

class Tile extends Model
{
    protected $guarded = [];

    public static function getCoordinates($x, $y)
    {
        $tile = self::where('x', $x)->where('y', $y)
            ->with('piece')
            ->first();

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

    public function isOccupied()
    {
        return !is_null($this->piece);
    }

    public function piece()
    {
        return $this->belongsTo(Piece::class);
    }

    public function placePiece(Piece $piece)
    {
        if ($this->isOccupied()) {
            throw new \Exception('There is already a piece at '.$x.', '.$y);
        }

        return $this->update([
            'piece_id' => $piece->id
        ]);
    }
}
