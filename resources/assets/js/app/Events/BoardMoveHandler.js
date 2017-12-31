export default {

    registerAll() {
        var _this = this;


        events.$on('board.move', function (params) {
            return _this[params.direction](_this.getMoveDistanceInTiles(params));
        });
    },

    up(params) {
        events.$emit('y.shift', -this.getMoveDistanceInTiles(params));
    },

    down(params) {
        events.$emit('y.shift', this.getMoveDistanceInTiles(params));
    },

    left(params) {
        events.$emit('x.shift', -this.getMoveDistanceInTiles(params));
    },

    right(params) {
        events.$emit('x.shift', this.getMoveDistanceInTiles(params));
    },

    getMoveDistanceInTiles(params) {
        return 1;
    }


}