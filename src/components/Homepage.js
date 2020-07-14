import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeId,
  changeName,
  selectId,
  selectName,
  joinRoom,
} from '../redux/gameSlice';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
//import store from '../redux/store'
//import Types from '../redux/actionTypes'

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

export default function Homepage() {

  const game_id = useSelector(selectId);
  const named = useSelector(selectName);
  const dispatch = useDispatch();

  const [room_id, setRoom] = useState("");
  const [name, setName] = useState("");

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#000' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Inhuman Cards.
          </Typography>
        </Toolbar>
      </AppBar>
      <br/>
      Welcome imbecile. There are no instructions for this game. If you sssdon't know, then you can kindly show yourself the door.
      <br/>
      {room_id}
      <br/>
      <Button variant="contained">Create New Room</Button>
      <br/>
      {room_id}{name}
      <br/>
      <form className={classes.testField} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Room Code" variant="outlined" onChange={(e) => setRoom(e.target.value)}/>
        {/*<TextField id="outlined-basic" label="Your Nickname" variant="outlined" onChange={(e) => store.dispatch({ type:Types.UPDATE_RESOURCES, game_id: e.target.value })}/>*/}
        <TextField id="outlined-basic" label="Your Nickname" variant="outlined" onChange={(e) => setName(e.target.value)}/>
        <NavLink to={"/"+room_id}><Button variant="contained" onClick={() => dispatch(joinRoom([room_id,name]))}>Join Room</Button></NavLink>
      </form>
    </div>
  );
}
