import React from 'react';
import {
  Fade,
  Container,
  useMediaQuery
} from '@material-ui/core';
import useStyles from '../styles/content';

import Navbar from './navbar';
import Quote from './quote';
// import WeddingDetail from './wedding-detail';
// import Reception from './reception';
// import Gallery from './gallery';
// import Comment from './comment';
// import Countdown from './countdown';
import DetailReception from './detail-reception';

import VideoRight from '../assets/video1.mp4';
import VideoLeft from '../assets/video2.mp4';

function Content({ open }) {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <>
      <Navbar />
      {/* <Fade in={open} timeout={2000}> */}
        <img
          src="https://images.pexels.com/photos/4307920/pexels-photo-4307920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="banner"
          className={classes.banner}
        />
        <Container className={classes.outerQuoteContainer} maxWidth={matches ? 'lg' : false}>
          <Quote
            preWord="The"
            highlightWord="Highest"
            quote="Happiness On earth"
            // img="https://images.pexels.com/photos/916344/pexels-photo-916344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            img={VideoRight}
          />
          <Quote
            reverse={true}
            preWord="Is The"
            highlightWord="Happines"
            quote="Of Marriage"
            // img="https://images.pexels.com/photos/1161372/pexels-photo-1161372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            img={VideoLeft}
          />
        </Container>
        <DetailReception />
        {/* <WeddingDetail /> */}
        {/* <Reception /> */}
        {/* <Gallery /> */}
        {/* <Comment /> */}
      {/* </Fade> */}
    </>
  );
}

export default Content;