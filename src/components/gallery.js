import React from 'react';
import {
  Grid
} from '@material-ui/core';
import useStyles from '../styles/gallery';

import Groom from '../assets/groom.png';

function Gallery() {
  const classes = useStyles();
  return (
    <Grid container className={classes.galleryContainer}>
      <Grid item xs={6} md={4} lg={3}>
        <img src={Groom} alt="Groom" width="100%" />
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <img src={Groom} alt="Groom" width="100%" />
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <img src={Groom} alt="Groom" width="100%" />
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <img src={Groom} alt="Groom" width="100%" />
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <img src={Groom} alt="Groom" width="100%" />
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <img src={Groom} alt="Groom" width="100%" />
      </Grid>
    </Grid>
  );
}

export default Gallery;