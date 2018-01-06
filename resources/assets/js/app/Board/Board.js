import Row from './Row.js';
import Tile from './Tile.js';
import TileCollection from './TileCollection.js';

class Board {
    constructor(rows) {
        var _this = this;

        this.rows = rows.map(function (row) {
            return new Row(row, _this);
        });
    }

    findTile(x, y) {
        var tile;

        this.rows.forEach(function (row) {
            if (row.containsTile(x, y)) {
                tile = row.findTile(x, y);
            }
        });

        return tile || new Tile({}, this);
    }

    movePieceToTile(piece, tile) {
        piece.placeOnTile(tile);
        this.availableMoves().forEach(function(tile) {
            tile.unmarkAsAvailableMove();
        });
    }

    availableMoves() {
        return new TileCollection(
            this.tiles().filter(function (tile) {
                return tile.isAvailableMove;
            })
        );
    }

    tiles() {
        return this.rows.reduce(function (rows, row) {
            return rows.concat(row.tiles);
        }, []);
    }
}

export default Board;