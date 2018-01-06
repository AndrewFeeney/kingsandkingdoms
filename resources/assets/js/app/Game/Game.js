import Board from './../Board/Board.js';
import Row from './../Board/Row.js';
import Tile from './../Board/Tile.js';
import Piece from './../Board/Piece.js';

class Game {
    constructor() {
        this.board = this.initialState();

        var _this = this;

        this.registerEventHandlers();
    }

    registerEventHandlers() {
        var eventHandlers = {
            'piece.select': (piece) => this.selectPiece(piece),
            'tile.make-move': (tile) => this.makeMove(tile),
        };

        Object.keys(eventHandlers).forEach(function(key) {
            events.$on(key, function(...args) {
                return eventHandlers[key](...args)
            });
        });
    }

    selectPiece(piece) {
        this.selectedPiece = piece;

        piece.availableMoves()
            .forEach(function (tile) {
                tile.markAsAvailableMove();
            });

        events.$emit('piece.selected', this.selectedPiece);
    }

    makeMove(tile) {
        this.board.movePieceToTile(this.selectedPiece, tile);
        events.$emit('move-made', this.selectedPiece, tile);
    }

    initialState() {
        var grid = [];

        var width = 10;
        var height = 10;

        for (var x = 0; x < width; x++) {
            grid[x] = [];
            for (var y = 0; y < height; y ++) {
                grid[x][y] = {
                    x: x,
                    y: y,
                    terrain: 'grassland',
                };
            }
        }

        var board = new Board(grid);

        var king = new Piece({
            type: 'king'
        });

        king.placeOnTile(board.findTile(5, 5));

        return board;
    }
}

export default Game;