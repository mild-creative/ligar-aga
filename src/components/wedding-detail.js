import React from 'react';
import {
  Typography,
  Grid,
  Container
} from '@material-ui/core';
import useStyles from '../styles/detail';

import Groom from '../assets/groom.png';
import Bride from '../assets/ligar-bride.png';

function WeddingDetail() {
  const classes = useStyles();
  return (
    <div id="detail" className={classes.detailContainer}>
      <div className={classes.topContainer}>
        <Typography align="center" className={classes.bismillah}>Bismillah</Typography>
        <Typography align="center">❝Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.❞</Typography>
        <Typography align="center">(Ar-Rum: 21)</Typography>
      </div>
      <Typography justify="center" align="center" className={classes.spousesName}>Ligar</Typography>
      <Container maxWidth="lg">
        <Grid container alignItems="center" className={classes.profileGrid} spacing={2}>
          <Grid item xs={5} md={5} className={classes.leftImage}>
            <img src={Bride} alt="Bride" />
          </Grid>
          <Grid item xs={7} md={7}>
            <Typography className={classes.profileName}>Ligar Eka Prasta</Typography>
            <Typography className={classes.profileKeterangan}>Putri Pertama dari</Typography>
            <Typography>Bapak Sutari</Typography>
            <Typography>{`& Ibu Aas Hayati`}</Typography>
          </Grid>
        </Grid>
      </Container>
      <Typography align="center" className={classes.spousesName}>Aga</Typography>
      <Container maxWidth="lg">
        <Grid container alignItems="center" className={classes.profileGrid} spacing={2}>
          <Grid item xs={7} md={7} className={classes.leftProfile}>
            <div>
              <Typography className={classes.profileName}>Agasetyo Manuhoro</Typography>
              <Typography className={classes.profileKeterangan}>Putra Bungsu dari</Typography>
              <Typography>{`Bapak Irawan Soedjono (Alm.)`}</Typography>
              <Typography>{`& Ibu Endang Suryandari`}</Typography>
            </div>
          </Grid>
          <Grid item xs={5} md={5}>
            <img src={Groom} alt="Groom" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default WeddingDetail;