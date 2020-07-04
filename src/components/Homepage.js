import React from 'react';
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

export default function ButtonAppBar() {
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
      Welcome imbecile. There are no instructions for this game. If you don't know, then you can kindly show yourself the door.
      <br/>
      <br/>
      <Button variant="contained">Create New Room</Button>
      <br/>
      <br/>
      <form className={classes.testField} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Room Code" variant="outlined" />
        <Button variant="contained">Join Room</Button>
      </form>
    </div>
  );
}
