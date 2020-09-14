import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    marginBottom: '3rem',
    '& div': {
      marginTop: '-3px',
      // transition: 'transform .5s, filter 0.5s ease-in-out',
      // filter: 'grayscale(100%)',
      transition: 'all 0.5s',
      overflow: 'hidden'
    },
    // '& img': {
    //   transition: 'all 0.5s',
    //   overflow: 'hidden'
    // },
    '& div:hover': {
      transform: 'scale(1.05)',
      // filter: 'grayscale(0)'
    }
  }
}));

export default useStyles;