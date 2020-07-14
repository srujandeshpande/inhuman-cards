import Types from '../actionTypes';

var initState = {}

function socketReducer(state = initState,action){
    switch(action.type){
        case Types.ADD_SOCKET:
            return {
                ...state,
                socket: action.socket,
                game_id: action.game_id,
            }
        default:
            return state;
    }
}

export default socketReducer;