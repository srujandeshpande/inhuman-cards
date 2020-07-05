import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import store from '../../redux/store'
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
}));

export default function Navbar() {
  const classes = useStyles();
  var state = store.getState();
  console.log(state)
  var game_id = state.socketReducer.game_id;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#000' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Inhuman Cards.
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Room number: { game_id } 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
