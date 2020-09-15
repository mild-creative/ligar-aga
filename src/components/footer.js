import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    color: '#FFFFFF',
    backgroundColor: '#000000',
    fontSize: 12,
    // [theme.breakpoints.down('xs')]: {
    //   marginBottom: '4rem'
    // }
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p>Copyright © 2020. Powered by Mild Creative</p>
    </div>
  );
}

export default Footer;