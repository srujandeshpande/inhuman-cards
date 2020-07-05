import initializeSockets from './sockets'

// game class
class Game {
    constructor(game_id) {
        initializeSockets(game_id);
        //game-variables
        this.turn = "",
        this.game_id = game_id;
    }
}

export default Game;