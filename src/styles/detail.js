import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  detailContainer: {
    marginBottom: '3.5rem'
  },
  topContainer: {
    width: '50%',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '70%'
    },
    marginBottom: '2rem'
  },
  spousesName: {
    fontFamily: `'Halimun', cursive`,
    fontSize: '60px'
  },
  bismillah: {
    fontFamily: `'Halimun', cursive`,
    fontSize: '25px'
  },
  profileGrid: {
    marginTop: '2rem',
    marginBottom: '2rem',
    '& img': {
      borderRadius: '50%',
      border: '2px solid white',
      width: 240,
      height: 'intrinsic',
      [theme.breakpoints.down('sm')]: {
        width: '200px'
      },
      [theme.breakpoints.down('xs')]: {
        width: '105px'
      }
    }
  },
  leftProfile: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      '& div': {
        width: '100%'
      },
      // '& img': {
      //   width: '100%'
      // }
    }
  },
  leftImage: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  profileName: {
    fontSize: '30px',
    fontWeight: 800,
    [theme.breakpoints.down('xs')]: {
      fontSize: '22px',
    }
  },
  profileKeterangan: {
    fontSize: '12px',
    fontWeight: 800,
    lineHeight: 3
  }
}));

export default useStyles;