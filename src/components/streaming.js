import React from 'react';
import {
  Container, Typography
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import useStyles from '../styles/streaming';
import Thumbnail from './youtube-thumbnail';

function Streaming() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.container}>
      <div style={{textAlign:'center'}}>
      <Typography className={classes.profileName}>Live Streaming</Typography>
      </div>
      <br></br>
      {/* <iframe title="Live Streaming" width="100%" src="https://www.youtube.com/embed/YPsttPQKoVU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /> */}
      <Thumbnail />
      <Typography className={classes.instaAccount}>
        <InstagramIcon />
        <a href="https://www.instagram.com/hamishdw/" target="_blank" rel="noopener noreferrer">Aga</a>
      </Typography>
      <Typography className={classes.instaAccount}>
        <InstagramIcon />
        <a href="https://www.instagram.com/raisa6690/" target="_blank" rel="noopener noreferrer">Ligar</a>
      </Typography>
    </Container>
  );
}
export default Streaming;