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
    fontFamily: `'Satisfy', cursive`,
    fontSize: '100px'
  },
  bismillah: {
    fontFamily: `'Satisfy', cursive`,
    fontSize: '25px'
  },
  profileGrid: {
    marginTop: '2rem',
    marginBottom: '2rem',
    '& img': {
      borderRadius: '50%',
      border: '2px solid white',
      width: 240,
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
      justifyContent: 'flex-start',
      '& div': {
        width: '100%'
      }
    }
  },
  profileName: {
    fontSize: '30px',
    fontWeight: 800
  },
  profileKeterangan: {
    fontSize: '12px',
    fontWeight: 800,
    lineHeight: 3
  }
}));

export default useStyles;