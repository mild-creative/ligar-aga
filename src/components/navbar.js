import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import useStyles from '../styles/opener';
import { navbarMenu } from '../constants';

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Hidden smUp>
        <p className={classes.brandName}>{`Ligar & Aga`}</p>
      </Hidden>
      <Hidden xsDown>
        <Toolbar variant="dense">
          {navbarMenu.map(menu => (
            <Typography key={menu.name} variant="h6" color="inherit">
              {menu.name}
            </Typography>
          ))}
        </Toolbar>
      </Hidden>
    </AppBar>
  );
}

export default Navbar;