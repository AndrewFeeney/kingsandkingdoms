import Row from './Row.js';

class Board {
    constructor(rows) {
        this.rows = rows.map(function (row) {
            return new Row(row);
        });
    }

    findTile(x, y) {
        var tile = {
            terrain: 'grassland'
        };

        this.rows.forEach(function (row) {
            if (row.containsTile(x, y)) {
                tile = row.findTile(x, y);
            }
        });

        return tile;
    }

    terrainClasses(tile) {
        return tile.terrain
            + ' east-' + this.findTile(tile.x + 1, tile.y).terrain
            + ' west-' + this.findTile(tile.x - 1, tile.y).terrain
            + ' north-' + this.findTile(tile.x, tile.y - 1).terrain
            + ' south-' + this.findTile(tile.x, tile.y + 1).terrain;
    }

}
export default Board;