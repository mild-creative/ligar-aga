import React, { useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Popper,
  Fab,
  IconButton,
  Toolbar,
  AppBar,
  Typography
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from '../styles/navigation';
import { navbarMenu } from '../constants';

function BottomNav() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(() => !open)
  }

  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Fab color="secondary" aria-label="love" className={classes.fabButton} onClick={handleClick}>
            <FavoriteIcon />
          </Fab>
          {/* <IconButton color="secondary" aria-label="open drawer" onClick={handleClick} className={classes.loveContainer}>
            <FavoriteIcon />
          </IconButton> */}
        </Toolbar>
        <Popper open={open} id="popper-click" anchorEl={anchorEl} placement="top" className={classes.popper}>
          {navbarMenu.map(menu => (
            <Typography key={menu.name}>{menu.name}</Typography>
          ))}
        </Popper>
      </AppBar>
    </>
  );
}

export default BottomNav;
