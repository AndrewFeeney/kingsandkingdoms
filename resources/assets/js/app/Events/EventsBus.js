import KeyPressHandler from './KeyPressHandler.js';
import BoardMoveHandler from './BoardMoveHandler.js';
import PieceActionHandler from './PieceActionHandler.js';

export default {

    keyPressHandler: KeyPressHandler,
    boardMoveHandler: BoardMoveHandler,
    pieceActionHandler: PieceActionHandler,


    registerAll() {

        this.keyPressHandler.registerAll();

        this.boardMoveHandler.registerAll();

        this.pieceActionHandler.registerAll();
    }
}