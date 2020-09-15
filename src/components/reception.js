import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import {
  useMediaQuery
} from '@material-ui/core';

import Desktop from './reception-desktop';
import Mobile from './reception-mobile';

const calculateTimeLeft = () => {
  // const difference = +new Date("2020-10-04") - +new Date();
  const difference = +moment('2020-10-04 08:00').tz('Asia/Jakarta') - +moment().tz('Asia/Jakarta')
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      mins: Math.floor((difference / 1000 / 60) % 60),
      sec: Math.floor((difference / 1000) % 60)
    };
  }
  // setCounter(timeLeft);
  return timeLeft;
};

function Reception() {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  // const [counter, setCounter] = useState({});
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // calculateTimeLeft();
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  })

  return (
    <div style={{marginBottom: '3.5rem'}}>
      {isMobile ?
        <Mobile counter={timeLeft} />
        :
        <Desktop counter={timeLeft} />}
    </div>
  );
}

export default Reception;