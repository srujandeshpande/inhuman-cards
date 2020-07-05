import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Navbar from './gameboard/Navbar';
import WhiteCard from './gameboard/WhiteCard';
import BlackCard from './gameboard/BlackCard';

import Gameboard from './gameboard/Gameboard';
import Deck from './gameboard/Deck';
import store from '../redux/store';
import Game from '../gamelogic/game'

function GameRoom(props) {
  var game_id = props.match.params.id;
  const game = new Game(game_id);
  
  return (
    <div style={{width:'100%'}}>
      <Navbar/>
      GameRoom
      <Gameboard/>
      <div style={{width:'100%'}}>
      <Deck/>
      </div>
    </div>
  );
}

export default GameRoom;