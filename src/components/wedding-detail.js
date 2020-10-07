import React from 'react';
import {
  Typography,
  Grid,
  Container
} from '@material-ui/core';
import useStyles from '../styles/detail';

import Groom from '../assets/cowo.png';
import Bride from '../assets/cewe.png';

function WeddingDetail() {
  const classes = useStyles();
  return (
    <div id="detail" className={classes.detailContainer}>
      <div className={classes.topContainer}>
        <Typography align="center" className={classes.bismillah}>Bismillah</Typography>
        <Typography align="center">❝Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.❞</Typography>
        <Typography align="center">(Ar-Rum: 21)</Typography>
      </div>
      <Typography justify="center" align="center" className={classes.spousesName}>Dian</Typography>
      <Container maxWidth="lg">
        <Grid container alignItems="center" className={classes.profileGrid} spacing={2}>
          <Grid item xs={5} md={5} className={classes.leftImage}>
            <img src={Bride} alt="Bride" />
          </Grid>
          <Grid item xs={7} md={7}>
            <Typography className={classes.profileName}>Anisa Diansisti</Typography>
            <Typography className={classes.profileKeterangan}>Putri Pertama dari</Typography>
            <Typography>Bapak Siswadi</Typography>
            <Typography>{`& Ibu Siti Rochatin`}</Typography>
          </Grid>
        </Grid>
      </Container>
      <Typography align="center" className={classes.spousesName}>Indra</Typography>
      <Container maxWidth="lg">
        <Grid container alignItems="center" className={classes.profileGrid} spacing={2}>
          <Grid item xs={7} md={7} className={classes.leftProfile}>
            <div>
              <Typography className={classes.profileName}>Indra Aditya Andika</Typography>
              <Typography className={classes.profileKeterangan}>Putra Pertama dari</Typography>
              <Typography>{`Bapak Dalino`}</Typography>
              <Typography>{`& Ibu Ida Maryuni`}</Typography>
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