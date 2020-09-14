import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  brand: {
    letterSpacing: '2px'
  },
  couplesName: {
    fontFamily: `'Satisfy', cursive`,
    fontSize: '50px'
  },
  openerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',

    "& p": {
      marginBottom: '3rem'
    }
  },
  containerOpener: {
    textAlign: 'center'
  },
  buttonOpen: {
    backgroundColor: '#010101',
    color: '#FFFFFF',
    transition: 'opacity 1.5s',
    width: '35%',
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
      height: '100%'
    }
  }
}))

export default useStyles;