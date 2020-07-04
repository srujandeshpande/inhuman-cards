import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 200,
    minHeight: 200,
    background: '#000',
  },
  title: {
    fontSize: 12,
    color: '#fff',
  },
  content: {
    color: '#fff',
  },
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Inhuman Cards
        </Typography>
        <Typography className={classes.content} variant="h5" component="h2">
          INSERT CARD CONTEnT HERE
        </Typography>
      </CardContent>
    </Card>
  );
}
