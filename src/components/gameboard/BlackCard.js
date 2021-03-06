import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
  root: {
    float: 'left',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  },
  title: {
    fontSize: 12,
    color: '#fff',
  },
  content: {
    color: '#fff',
  },
  sheet: {
    background: '#000',
  }
}));

export default function PaperCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.sheet}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Inhuman Cards
        </Typography>
        <Typography className={classes.content} variant="h5" component="h2">
          INSERT CARD CONTEnT HERE
        </Typography>
      </CardContent>
      </Paper>
    </div>
  );
}
