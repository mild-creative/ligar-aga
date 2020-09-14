import React from 'react';
import {
  Typography
} from '@material-ui/core';
import useStyles from '../styles/reception';
//icons
import Pin from '../assets/map-location-white.svg';
import Clock from '../assets/clock-white.svg';
import Calendar from '../assets/calendar-white.svg';

function AkadNikah() {
  const classes = useStyles();
  return (
    <div className={classes.infoIconsTextWrapper}>
      <Typography className={classes.akadNikah}>Akad Nikah</Typography>
      <Typography><img src={Calendar} alt="map" width="40px" /> Minggu, 4 Oktober 2020</Typography>
      <Typography><img src={Clock} alt="clock" width="40px" /> 08.00 WIB - Selesai</Typography>
      <Typography><img src={Pin} alt="calendar" width="40px" /> Bogor</Typography>
    </div>
  );
}

export default AkadNikah;