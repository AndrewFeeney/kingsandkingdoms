class Piece {
    constructor(piece) {
        this.type = piece.type;
        this.tile = null;
    }

    availableMoves() {
        return this.tile.adjacentTiles();
    }

    placeOnTile(tile) {
        if (this.isPlaced()) {
            this.tile.removePiece();
        }

        this.tile = tile;

        this.tile.placePiece(this);
    }

    isPlaced() {
        return this.tile != null;
    }
}

export default Piece;