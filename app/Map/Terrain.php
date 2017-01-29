<?php

namespace App\Map;

class Terrain
{
    public $name;
    public $type;

    public function __construct($properties = [])
    {
        foreach ($properties as $key => $value) {

            if ($key == 'weight') {
                continue;
            }

            $this->$key = $value;
        }
    }
}
