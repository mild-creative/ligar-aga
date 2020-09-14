import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  banner: {
    width: '100vw'
  },
  outerQuoteContainer: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0
    },
    marginBottom: '3.5rem'
  },
  quoteContainer: {
    marginTop: ({reverse}) => !reverse && '-3px',
    [theme.breakpoints.up('md')]: {
      height: '600px'
    },
    '& div': {
      height: '100%'
    }
  },
  quoteImage: {
    height: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  wordContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: ({reverse}) => reverse ? 'right' : 'left',
    height: '50% !important',
    '& p': {
      fontSize: '40px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '25px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      height: '500px !important'
    },
    [theme.breakpoints.down('xs')]: {
      height: '350px !important'
    }
  },
  highlightedWord: {
    fontSize: '80px !important',
    fontWeight: 800,
    [theme.breakpoints.down('sm')]: {
      fontSize: '50px !important'
    }
  },
  contentCenterer: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default useStyles;