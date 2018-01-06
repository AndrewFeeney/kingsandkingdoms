import TileCollection from './TileCollection.js';
import Piece from './Piece.js';

class Tile {
    constructor(tile, board) {

        this.x = tile.x;
        this.y = tile.y;

        this.terrain = tile.terrain;

        this.piece = null;

        if (tile.piece != null) {
            this.piece = new Piece(tile.piece, board);
        }

        this.isAvailableMove = false;

        this.board = board;
    }

    adjacentTiles() {
        var _this = this;

        var tiles = [
            {x: this.x - 1, y: this.y},
            {x: this.x - 1, y: this.y - 1},
            {x: this.x - 1, y: this.y + 1},
            {x: this.x, y: this.y - 1},
            {x: this.x, y: this.y + 1},
            {x: this.x + 1, y: this.y - 1},
            {x: this.x + 1, y: this.y},
            {x: this.x + 1, y: this.y + 1},
        ].map(function (coords) {
            return _this.board.findTile(coords.x, coords.y);
        });

        return new TileCollection(tiles);
    }

    placePiece(piece) {
        this.piece = piece;
    }

    markAsAvailableMove() {
        this.isAvailableMove = true;
    }

    unmarkAsAvailableMove() {
        this.isAvailableMove = false;
    }

    removePiece() {
        this.piece = null;
    }
}

export default Tile;