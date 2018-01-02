export default {
    registerAll() {
        var _this = this;

        events.$on('piece.selected', function(piece) {
            _this.pieceSelected(piece);
        });

    },

    pieceSelected(piece) {
        window.app.game.selectPiece(piece);
    }
}