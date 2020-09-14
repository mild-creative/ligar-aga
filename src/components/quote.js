import React from 'react';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';
import useStyles from '../styles/content';

function Quote({ preWord, highlightWord, reverse, quote, img }) {
  const classes = useStyles({
    reverse,
    img
  });
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
        <video autoPlay loop id={`${preWord}`} style={{ width: '100%'}}>
          <source src={img} type="video/mp4" />
        </video>
      </Grid>
        {/* <Grid item sm={12} md={6} className={reverse && classes.imageContainer}>
        <img
          src={img}
          alt="quote-banner"
          className={classes.quoteImage}
        />
      </Grid> */}
      </Grid>
  )
}

export default Quote;