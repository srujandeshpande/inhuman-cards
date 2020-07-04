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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign:'center',
  },
}));

export default function GameRoom() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar/>
      Hello
    </div>
  );
}
