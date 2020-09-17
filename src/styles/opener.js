import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  top: {
    letterSpacing: '2px',
    color: 'rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.down('sm')]: {
      marginTop: '3.5rem'
    }
  },
  couplesName: {
    fontFamily: `'Halimun', cursive`,
    fontSize: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px'
    }
  },
  openerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    "& p": {
      marginBottom: '2rem'
    }
  },
  containerOpener: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '3.5rem'
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '25rem',
      paddingBottom: '3.5rem'
    }
  },
  buttonOpen: {
    backgroundColor: '#010101',
    color: '#FFFFFF',
    transition: 'opacity 1.5s',
    width: '55%',
    textTransform: 'none',
    height: '40px',
    fontSize: '16px',
    marginBottom: '4rem',

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: '#FFFFFF'
    }
  },
  brand: {
    letterSpacing: '1.5px',
    color: 'rgba(0, 0, 0, 0.5)'
  },
  appbar: {
    backgroundColor: '#FFFFFF',
    height: '80px',

    '& h6': {
      color: 'rgba(1,1,1,0.8)',
      fontSize: '14px',
      transition: '0.5s',
      marginRight: '5%',
      cursor: 'pointer'
    },
    '& h6:hover': {
      opacity: '0.5'
    },
    '& .MuiToolbar-dense': {
      height: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  },
  brandName: {
    color: '#000000',
    fontFamily: `'Halimun', cursive`,
    fontSize: '20px'
  },
  theWedding: {
    letterSpacing: '15px',
    fontSize: '15px',
    marginTop: '-20px'
  },
  videoBackground: {
    objectFit: 'cover',
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.4
  }
}))

export default useStyles;