import io from 'socket.io-client';

//use wherever you run your server.
const SERVER_URL = 'http://localhost:5000'
//const SERVER_URL = 'http://192.168.1.9:5000'

function initialize_sockets(game_id, named){
    var socket = io(SERVER_URL);

    socket.on('connect',()=>{
        socket.emit('lobby',{game_id:game_id, name:named});
        //handleConnect(socket,game_id)
    });
    socket.on('disconnect',handleDisconnect);

    //return socket;

    socket.on('player-status',(data)=>{
        handlePlayerStatus(data)
    })
    socket.on('start-game',()=>{
        console.log('start the damn game')
    })
    socket.on('black-card',(data)=>{
        console.log("black card played:",data.card)
    })
    socket.on('white-card',(data)=>{
        console.log("white card played:",data.card)
    })
    socket.on('player-status',(data)=>{
        console.log(
            'time for next round bichess',data
        )
    })
    socket.on('winner',(data)=>{
        console.log("WINNER OF THE ROUND IS",data)
    })


}

function handleConnect(socket,game_id){
    console.log("Connected to host");

}

function handlePlayerStatus(data){
    console.log('Player status',data);
}

function handleDisconnect(){
    console.log("You disconnected from host")
}

export default initialize_sockets;
