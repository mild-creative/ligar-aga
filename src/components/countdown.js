import React, { useEffect, useState } from "react";
import Container from '@material-ui/core/Container';
// import useStyles from '../App.style';

const Countdown = () => {
  // const classes = useStyles();
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-10-04") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span
        key={index}
      >
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <Container maxWidth="lg">
      <div>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </Container>
  );
}

export default Countdown;
