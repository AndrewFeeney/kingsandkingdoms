import KeyPressHandler from './KeyPressHandler.js';
import BoardMoveHandler from './BoardMoveHandler.js';

export default {

    keyPressHandler: KeyPressHandler,

    boardMoveHandler: BoardMoveHandler,

    registerAll() {
        this.keyPressHandler.registerAll();

        this.boardMoveHandler.registerAll();
    }
}