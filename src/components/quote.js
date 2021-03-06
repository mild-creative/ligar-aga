import React from 'react';
import clsx from 'clsx';
// import Skeleton from '@material-ui/lab/Skeleton';
import { Grid, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player';
import useStyles from '../styles/content';
import { detect } from 'detect-browser';
import { browser } from '../helpers/browser';

// import Poster from '../assets/official-icon.jpeg';

function Quote({ preWord, highlightWord, reverse, quote, img, children, foto }) {
  const [quoteLoaded, setQuoteLoaded] = React.useState(false);
  const classes = useStyles({
    reverse,
    img,
    quoteLoaded
  });

  // const onLoaded = () => {
  //   setQuoteLoaded(true);
  // }

  return (
    <Grid container direction={reverse && 'row-reverse'} className={classes.quoteContainer}>
      <Grid item container sm={12} md={6} justify="center" alignItems="center">
        <Grid item className={classes.wordContainer}>
          <Typography>{preWord}</Typography>
          <Typography className={classes.highlightedWord}>{highlightWord}</Typography>
          <Typography>{quote}</Typography>
        </Grid>
      </Grid>
      <Grid item sm={12} md={6} className={clsx(classes.contentCenterer, reverse && classes.imageContainer)}>
        {/* <Skeleton variant="rect" animation="wave" className={classes.quoteLoader} />
        <video className={classes.quoteVideo} onLoadedData={onLoaded} id={`${preWord}`} width="100%" height="100%" loop autoPlay='autoplay' muted src={img} playsInline webkit-playsInline></video> */}
        {/* <video poster={Poster} id={`${preWord}`} width="100%" height="100%" loop autoPlay='autoplay' muted src={img} playsInline webkit-playsInline></video> */}
        {/* <ReactPlayer
          url={img}
          width="100%"
          height="100%"
          playing
          playsinline
          loop
        /> */}
        {
          browser()
            ? <video preload='auto' autoPlay playsInline loop muted height='100%' width='100%'>
              <source src={img} type='video/mp4'></source>
            </video>
            : <img height='100%' width='100%' src={foto} />
        }

      </Grid>
    </Grid>
  )
}

export default Quote;