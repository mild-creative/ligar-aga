import React from 'react';
import {
  Container,
  useMediaQuery
} from '@material-ui/core';
// import ReactAudioPlayer from 'react-audio-player';
// import ReactPlayer from 'react-player';
// import ReactVideo from 'react-background-video-player';
// import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from '../styles/content';

import Navbar from './navbar';
// import Quote from './quote';
// import Gallery from './gallery';
import Comment from './comment';
import DetailReception from './detail-reception';
import Footer from './footer';
import Streaming from './streaming';
// import FloatingButton from './floating-menu';

// import VideoRight from '../assets/right-video.mp4';
// import VideoLeft from '../assets/video-left.mp4';
// import BannerVideo from '../assets/banner.mp4';
// import BannerFoto from '../assets/foto1.jpeg';
// import FotoRight from '../assets/foto2.jpeg';
// import FotoLeft from '../assets/foto3.jpeg';
// import Backsound from '../assets/BACKSOUND_PREWED_AGA.mp3';
// import { browser } from '../helpers/browser';
// import Poster from '../assets/official-icon.jpeg';

function Content({ open }) {
  const matches = useMediaQuery(theme => theme.breakpoints.up('md'));
  const [mute, setMute] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const classes = useStyles({
    loaded
  });

  const onLoaded = () => {
    setLoaded(true);
  }

  return (
    <>
      <Navbar />
      {/* <ReactAudioPlayer
        src={Backsound}
        autoPlay
        loop
        muted={mute}
      />
      <FloatingButton
        mute={mute}
        setMute={setMute} */}
      {/* /> */}
      {/* <Skeleton variant="rect" animation="wave" className={classes.bannerLoader} />
      <video ref={videoRef} className={classes.banner} onLoadedData={onLoaded} id="banner" width="100%" height="100%" loop autoPlay='autoplay' muted src={BannerVideo} playsInline webkit-playsInline></video> */}
      {/* <video poster={Poster} id="banner" width="100%" height="100%" loop autoPlay='autoplay' muted src={BannerVideo} playsInline webkit-playsInline></video> */}
      {/* <ReactPlayer
        url={BannerVideo}
        width="100%"
        height="100%"
        playing
        playsinline
        loop
      /> */}
      {/* <ReactVideo
        playsInline
        src={BannerVideo}
        loop
        autoPlay
        muted
        poster={Poster}
        containerWidth="100%"
        containerHeight="100%"
      /> */}
      {/* {
        browser()
          ? <video preload='auto' autoPlay playsInline loop muted height='100%' width='100%'>
            <source src={BannerVideo} type='video/mp4'></source>
          </video>
          : <img height='100%' width='100%' src={BannerFoto} alt="Banner" />
      } */}
      {/* <div className={classes.videoIFContainer}>
        <iframe
          // src={BannerVideo}
          // src="https://storage.googleapis.com/asset-aga/banner.mp4?autoplay=0&controls=0"
          src="https://www.youtube.com/embed/RIGivoRDSyM?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0"
          title="Banner Video"
          // width="100%"
          // height="100%"
          // allowFullScreen="false"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          className={classes.video}
        />
      </div> */}
      {/* <Container className={classes.outerQuoteContainer} maxWidth={matches ? 'lg' : false}>
        <Quote
          preWord="Good intention "
          highlightWord="Grateful"
          quote="heart"
          img={VideoRight}
          foto={FotoRight}
        />
        <Quote
          reverse={true}
          preWord="Everything comes to you"
          preHighlight = "At"
          highlightWord="The Best"
          quote="time"
          img={VideoLeft}
          foto={FotoLeft}
        />
      </Container> */}
      <DetailReception />
      <Streaming />
      <Comment />
      {/* <Gallery /> */}
      <Footer />
    </>
  );
}

export default Content;