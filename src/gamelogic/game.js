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

export default function Game() {
  const dispatch = useDispatch();
  const game_id = useSelector(selectId);
  const named = useSelector(selectName);
  console.log(game_id, named)
  var socket = "Nope";
  var socket = initializeSockets(game_id, named);
  dispatch(joinLobby(socket));
}