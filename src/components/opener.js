import React from 'react';
import {
  Container,
  Typography,
  Button
} from '@material-ui/core';
import useStyles from '../styles/opener';
import { opener } from '../constants';

function Opener({ handleClick }) {
  const classes = useStyles();

  return (
    <div className={classes.openerWrapper}>
      <Container maxWidth="md" className={classes.containerOpener}>
        <Typography className={classes.brand}>
          {opener.brand}
        </Typography>
        <Typography className={classes.couplesName}>
          {`${opener.bride} & ${opener.groom}`}
        </Typography>
        <Typography>
          {opener.description}
        </Typography>
        <Button onClick={handleClick} className={classes.buttonOpen}>
          Buka
        </Button>
      </Container>
    </div>
  )
}

export default Opener;
