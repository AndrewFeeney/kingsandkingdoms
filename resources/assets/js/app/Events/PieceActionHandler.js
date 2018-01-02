export default {
    registerAll() {
        var _this = this;

        events.$on('piece.selected', function(piece) {
            _this.pieceSelected(piece);
        });

    },

    pieceSelected(piece) {
    }
}