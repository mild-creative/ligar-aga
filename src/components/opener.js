import React from 'react';
import {
  Container,
  Typography,
  Button
} from '@material-ui/core';
import useStyles from '../styles/opener';
import BannerVideo from '../assets/vid.mp4';
import BannerFoto from '../assets/foto1.jpeg'
import { opener } from '../constants';
import { browser } from '../helpers/browser';

function Opener({ handleClick }) {
  const classes = useStyles();
  return (
    <div className={classes.openerWrapper}>
      {
        browser()
          ? <video id="banner" loop autoPlay='autoplay' muted src={BannerVideo} playsInline webkit-playsInline className={classes.videoBackground}></video>
          : null
      }
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
          Dengan segala kerendahan hati izinkan kami berbagi momen bahagia dalam pernikahan kami.
        </Typography>
        <Typography>
          Tanpa mengurangi rasa hormat dalam rangka mengikuti himbauan dari pemerintah terkait pandemi Covid-19, kami hanya melangsungkan acara Akad Nikah yang dihadiri keluarga.
        </Typography>
        <Typography>
          Semoga Bapak/Ibu, Saudara/i dan Kerabat sekalian dapat memakluminya.
        </Typography>
        <Typography>
          Terima kasih atas doanya.
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
