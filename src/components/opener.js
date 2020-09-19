import React from 'react';
import {
  Container,
  Typography,
  Button
} from '@material-ui/core';
import useStyles from '../styles/opener';
import BannerVideo from '../assets/banner.mp4';
import { opener } from '../constants';

function Opener({ handleClick }) {
  const classes = useStyles();
  return (
    <div className={classes.openerWrapper}>
      <video id="banner" loop autoPlay='autoplay' muted src={BannerVideo} playsInline playsinline webkit-playsInline webkit-playsinline="true" className={classes.videoBackground}></video>
      <Container maxWidth="md" className={classes.containerOpener}>
        <Typography className={classes.top}>
          {opener.top}
        </Typography>
        <Typography className={classes.couplesName}>
          {`${opener.bride}`}
        </Typography>
        <Typography className={classes.and}>
          {`and`}
        </Typography>
        <Typography className={classes.couplesName}>
          {`${opener.groom}`}
        </Typography>
        <Typography>
          {opener.description}
        </Typography>
        <Button onClick={handleClick} className={classes.buttonOpen}>
          Buka
        </Button>
        <Typography className={classes.brand}>
          {opener.brand}
        </Typography>
      </Container>
    </div>
  )
}

export default Opener;
