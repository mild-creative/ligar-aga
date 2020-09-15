import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    width: '100vw'
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -15,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  paper: {
    // border: '1px solid',
    padding: theme.spacing(1),
    // width: '100vw',
    height: '2rem',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loveContainer: {
    width: '100%'
  },
  popper: {
    width: '100%',
    zIndex: 1,
    '& p': {
      padding: theme.spacing(1),
      height: '2rem',
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgb(74, 74, 74)',
      cursor: 'pointer'
    }
  }
}));

export default useStyles;