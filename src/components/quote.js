import React from 'react';
import clsx from 'clsx';
// import Skeleton from '@material-ui/lab/Skeleton';
import { Grid, Typography } from '@material-ui/core';
import useStyles from '../styles/content';

import Poster from '../assets/official-icon.jpeg';

function Quote({ preWord, highlightWord, reverse, quote, img, children }) {
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
        <video poster={Poster} id={`${preWord}`} width="100%" height="100%" loop autoPlay='autoplay' muted src={img} playsInline webkit-playsInline></video>
      </Grid>
    </Grid>
  )
}

export default Quote;