import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeId,
  changeName,
  selectId,
  selectName,
  selectSocket,
  joinRoom,
  joinLobby,
} from '../redux/gameSlice';

import initializeSockets from './sockets'
//import store from '../redux/store'
//import Types from '../redux/actionTypes'

// game class

class Game {
    constructor(game_id, named) {
        const dispatch = useDispatch();
        //var socket = initializeSockets(game_id);
        //game-variables
        //this.turn = "x";
        this.game_id = game_id;
        this.socket = "Nope";
        this.socket = initializeSockets(game_id, named);
        dispatch(joinLobby(this.socket));
    }
}

export default Game;

/*
export default function Game(){
  const dispatch = useDispatch();
  const game_id = useSelector(selectId);
  const named = useSelector(selectName);
  const soct = useSelector(selectSocket);
  //var socket = "jo";
  //console.log("up");
  if(soct==""){
    var socket = initializeSockets(game_id);
    console.log("cow");
    dispatch(joinLobby(socket));
  }
  return(
    <div>
    {game_id},{named},{soct}
    </div>
  )
}
*/
