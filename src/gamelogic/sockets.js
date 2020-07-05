import io from 'socket.io-client';

//use wherever you run your server.
//const SERVER_URL = 'http://localhost:5000'
const SERVER_URL = 'http://192.168.1.9:5000'

function initialize_sockets(room_id){
    var socket = io(SERVER_URL);

    socket.on('connect',handleConnect);
    socket.on('disconnect',handleDisconnect);
    
    return socket;
}

function handleConnect(){
    console.log("Connected to host");
}

function handleDisconnect(){
    console.log("You disconnected from host")
}

export default initialize_sockets;