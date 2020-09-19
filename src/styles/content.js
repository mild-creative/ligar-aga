import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  banner: {
    display: ({ loaded }) => !loaded && 'none'
  },
  bannerLoader: {
    width: '100vw',
    height: '800px',
    display: ({ loaded }) => loaded && 'none',
    [theme.breakpoints.down('md')]: {
      height: '600px'
    },
    [theme.breakpoints.down('sm')]: {
      height: '425px'
    },
    [theme.breakpoints.down('xs')]: {
      height: '250px'
    }
  },
  quoteLoader: {
    width: '100%',
    height: '300px',
    display: ({ quoteLoaded }) => quoteLoaded && 'none',
    [theme.breakpoints.down('sm')]: {
      height: '400px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      height: '250px'
    }
  },
  quoteVideo: {
    display: ({ quoteLoaded }) => !quoteLoaded && 'none'
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
  },
  videoIFContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%'
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0
  }
}));

export default useStyles;