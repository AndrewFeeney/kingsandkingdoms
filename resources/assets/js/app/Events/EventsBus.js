import KeyPressHandler from './KeyPressHandler.js';
import BoardMoveHandler from './BoardMoveHandler.js';
import PieceActionHandler from './PieceActionHandler.js';

class EventsBus {
    constructor() {
        this.keyPressHandler = KeyPressHandler;
        this.boardMoveHandler = BoardMoveHandler;
        this.pieceActionHandler = PieceActionHandler;
    }

    registerAll() {

        this.keyPressHandler.registerAll();

        this.boardMoveHandler.registerAll();

        this.pieceActionHandler.registerAll();
    }
}

export default EventsBus;