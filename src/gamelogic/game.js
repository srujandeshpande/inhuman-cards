import initializeSockets from './sockets'
import store from '../redux/store'
import Types from '../redux/actionTypes'
// game class
class Game {
    constructor(game_id) {
        var socket = initializeSockets(game_id);
        //game-variables
        this.turn = "x";
        this.game_id = game_id;
        this.socket = socket;
        store.dispatch({ type:Types.ADD_SOCKET, socket:this.socket ,game_id: this.game_id })
    }
}

export default Game;