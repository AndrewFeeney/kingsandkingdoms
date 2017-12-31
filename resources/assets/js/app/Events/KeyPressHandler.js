export default {

    registerAll() {
        var _this = this;

        document.addEventListener('keyup', function (event) {
            _this.handleKeyUp(event.key);
        });
    },

    handleKeyUp(key) {
        if (this[key] == null) {
            return;
        }

        return this[key]();
    },

    ArrowUp() {
        this.broadcastBoardMove('up');
    },

    ArrowDown() {
        this.broadcastBoardMove('down');
    },

    ArrowLeft() {
        this.broadcastBoardMove('left');
    },

    ArrowRight() {
        this.broadcastBoardMove('right');
    },

    broadcastBoardMove(direction, distanceUnit = 'tiles', distanceValue = 1) {
        events.$emit('board.move', {
            direction: direction,
            distanceUnit: distanceUnit,
            distanceValue: distanceValue,   
        });
    },
}