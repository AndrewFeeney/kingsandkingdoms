import Row from './Row.js';

class Board {
    constructor(rows) {
        this.rows = rows.map(function (row) {
            return new Row(row);
        });
    }

    findTile(x, y) {
        var tile;

        this.rows.forEach(function (row) {
            if (row.containsTile(x, y)) {
                tile = row.findTile(x, y);
            }
        });

        return tile;
    }

    terrainClasses(tile) {
        return this.findTile(tile.x, tile.y).terrain;
    }

}
export default Board;