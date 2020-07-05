import socketio from 'socket.io-client';

const SERVER_URL = 'http://localhost:5000'

function initialize_sockets(room_id){
    var socket = io(SERVER_URL);

    socket.on('connect',handleConnect);
    socket.on('disconnect',handleDisconnect);

}

function handleConnect(){
    console.log("Connected to host");
}

function handleDisconnect(){
    console.log("You disconnected from host")
}

export default initialize_sockets;