import React from 'react';
import {
  // Fade,
  Container,
  useMediaQuery,
  // Hidden
} from '@material-ui/core';
import ReactAudioPlayer from 'react-audio-player';
import useStyles from '../styles/content';

import Navbar from './navbar';
import Quote from './quote';
import Gallery from './gallery';
import Comment from './comment';
import DetailReception from './detail-reception';
import Footer from './footer';
import Streaming from './streaming';
// import Gallery from './guest-gallery';
import FloatingButton from './floating-menu';

import VideoRight from '../assets/right-video.mp4';
import VideoLeft from '../assets/video2.mp4';
import BannerVideo from '../assets/banner.mp4';
import Poster from '../assets/LA-icon.png';
import Backsound from '../assets/BACKSOUND_PREWED_AGA.mp3';

function Content({ open }) {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.up('md'));
  const [mute, setMute] = React.useState(false);

  return (
    <>
      <Navbar />
      <ReactAudioPlayer
        src={Backsound}
        autoPlay
        loop
        muted={mute}
      />
      <FloatingButton
        mute={mute}
        setMute={setMute}
      />
      {/* <Fade in={open} timeout={2000}> */}
      <video poster={Poster} id="banner" width="100%" height="100%" loop autoPlay='autoplay' muted src={BannerVideo} playsInline webkit-playsInline></video>
      <Container className={classes.outerQuoteContainer} maxWidth={matches ? 'lg' : false}>
        <Quote
          preWord="The"
          highlightWord="Highest"
          quote="Happiness On earth"
          img={VideoRight}
        />
        <Quote
          reverse={true}
          preWord="Is The"
          highlightWord="Happines"
          quote="Of Marriage"
          img={VideoLeft}
        />
      </Container>
      <DetailReception />
      <Streaming />
      <Comment />
      <Gallery />
      {/* <Hidden smUp>
        <BottomNav />
      </Hidden> */}
      <Footer />
      {/* </Fade> */}
    </>
  );
}

export default Content;