import React from 'react';
import {
  Typography
} from '@material-ui/core';
import useStyles from '../styles/reception';

function CounterBox({ counter = 0, item}) {
  const classes = useStyles();
  return (
    <div className={classes.countDownEach}>
      <Typography className={classes.numberCounter} align="center">{counter}</Typography>
      <Typography align="center">{item}</Typography>
    </div>
  );
}

export default CounterBox;