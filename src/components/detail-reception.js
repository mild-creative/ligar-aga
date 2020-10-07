import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Detail from './wedding-detail';
import Reception from './reception';
import bg from '../assets/bg2.jpg';

function DetailReception() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Detail />
      <Reception />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem',
    // backgroundImage: 'linear-gradient(to bottom, rgba(209, 179, 101, 1), rgba(93, 72, 16, 1))',
    backgroundImage: `url(${bg})`,
    // backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
    // backgroundImage: 'rgb(234, 230, 225)',
    // color: '#FFFFFF'
  }
}));

export default DetailReception;