import Types from './actionTypes'

export function addSocket(socket){
    return({
        type:Types.ADD_SOCKET,
        socket
    });
}