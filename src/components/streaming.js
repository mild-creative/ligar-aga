import React from 'react';
import {
  Container, Typography
} from '@material-ui/core';
import InstagramIcon from '../assets/instagram.svg';
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
        <img src={InstagramIcon} alt="Insta Icon" width="30px" />
        <a href="https://www.instagram.com/ligarekaprasta/" target="_blank" rel="noopener noreferrer">@ligarekaprasta</a>
      </Typography>
      <Typography className={classes.instaAccount}>
        <img src={InstagramIcon} alt="Insta Icon" width="30px" />
        <a href="https://www.instagram.com/agasetyo/" target="_blank" rel="noopener noreferrer">@agasetyo</a>
      </Typography>
    </Container>
  );
}
export default Streaming;