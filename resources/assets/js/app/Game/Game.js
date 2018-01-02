import EventsBus from './../Events/EventsBus.js';

class Game {
    constructor() {
        this.eventsBus = new EventsBus(this);

        this.eventsBus.registerAll();
    }
}

export default Game;