import React from 'react';
import {
  // Fade,
  Container,
  useMediaQuery,
  // Hidden
} from '@material-ui/core';
import ReactAudioPlayer from 'react-audio-player';
import Skeleton from '@material-ui/lab/Skeleton';
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
import VideoLeft from '../assets/video-left.mp4';
import BannerVideo from '../assets/banner.mp4';
import Backsound from '../assets/BACKSOUND_PREWED_AGA.mp3';
import Poster from '../assets/official-icon.jpeg';

function Content({ open }) {
  const videoRef = React.useRef(null);
  const matches = useMediaQuery(theme => theme.breakpoints.up('md'));
  const [mute, setMute] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const classes = useStyles({
    loaded
  });

  React.useEffect(() => {
    console.log(videoRef, '123')
  }, []);

  const onLoaded = () => {
    setLoaded(true);
  }

  // function closeFullscreen() {
  //   if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   } else if (document.mozCancelFullScreen) { /* Firefox */
  //     document.mozCancelFullScreen();
  //   } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
  //     document.webkitExitFullscreen();
  //   } else if (document.msExitFullscreen) { /* IE/Edge */
  //     document.msExitFullscreen();
  //   }
  // }

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
      {/* <Skeleton variant="rect" animation="wave" className={classes.bannerLoader} />
      <video ref={videoRef} className={classes.banner} onLoadedData={onLoaded} id="banner" width="100%" height="100%" loop autoPlay='autoplay' muted src={BannerVideo} playsInline webkit-playsInline></video> */}
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