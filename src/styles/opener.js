import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  brand: {
    letterSpacing: '2px',
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

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: '#FFFFFF'
    }
  },
  appbar: {
    backgroundColor: '#FFFFFF',
    height: '60px',

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
  }
}))

export default useStyles;