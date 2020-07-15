import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeId,
  changeName,
  selectId,
  selectName,
  selectSocket,
  joinRoom,
} from '../redux/gameSlice';

import Game from '../gamelogic/game';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign:'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  textField: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Lobby() {

  const game_id = useSelector(selectId);
  const named = useSelector(selectName);
  const sock = useSelector(selectSocket);
  const dispatch = useDispatch();

  const classes = useStyles();

  const game = new Game(game_id, named);
  const handleStart =() =>{
    game.socket.emit('ready',{
      game_id: game.game_id,
    });
    console.log("GAME STARTED")
  }


  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#000' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Inhuman Cards Lobby.
          </Typography>
        </Toolbar>
      </AppBar>
      <br/>
      Welcome imbecile. There are no instructions for this game. If you don't know, then you can kindly show yourself the door.
      <br/>
      {game_id}
      <br/>
      {named},{sock}

      <Button variant="contained">Start Game</Button>
      <br/>
      <br/>
    </div>
  );
}
