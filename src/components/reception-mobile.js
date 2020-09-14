import React from 'react';
import {
  Container,
  Typography,
  Grid
} from '@material-ui/core';
import useStyles from '../styles/reception';

import Akad from './akad-nikah-info';
import CounterBox from './counter-box';

function ReceptionMobile({ counter }) {
  const classes = useStyles();
  return (
    <>
    <Typography align="center" className={classes.saveTheDate}>Save The Date</Typography>
    <Container maxWidth="lg">
      <div className={classes.infoWithIcons}s>
        <Akad />
      </div>
      <Grid container justify="space-around" alignItems="center">
        <Grid item xs={3}>
          <CounterBox item="Hari" counter={counter.days} />
        </Grid>
        <Grid item xs={3}>
          <CounterBox item="Jam" counter={counter.hours} />
        </Grid>
        <Grid item xs={3}>
          <CounterBox item="Menit" counter={counter.mins} />
        </Grid>
        <Grid item xs={3}>
          <CounterBox item="Detik" counter={counter.sec} />
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default ReceptionMobile;