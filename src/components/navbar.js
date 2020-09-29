import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '../styles/opener';

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar color="default" position="static" className={classes.appbar}>
      <Toolbar variant="dense">
        <Typography align="center" className={classes.brandName}>{`Dian & Indra`}</Typography>
      </Toolbar>
      <Typography align="center" className={classes.theWedding}>{`The Wedding`}</Typography>
    </AppBar>
  );
}

export default Navbar;