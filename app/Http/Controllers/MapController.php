<?php

namespace App\Http\Controllers;

use App\Map\Map;
use Illuminate\Http\Request;

class MapController extends Controller
{
    public function __construct(Map $map)
    {
        $this->map = $map;
    }

    public function index(Request $request)
    {
        $this->validate($request, [
            'x' => 'required|integer',
            'y' => 'required|integer',
            'width' => 'integer'
        ]);

        $tiles = $this->map->getTileSet($request->y, $request->y, $request->width);

        return response()->json([
            'tiles' => $tiles->toArray()
        ]);
    }
}
