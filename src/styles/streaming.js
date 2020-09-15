import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '3.5rem',
    '& iframe': {
      height: '450px !important',
      [theme.breakpoints.down('sm')]: {
        height: '350px !important'
      },
      [theme.breakpoints.down('xs')]: {
        height: '250px !important'
      }
    }
  },
  instaAccount: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '.7rem',
    '& a': {
      marginLeft: '.5rem',
      textDecoration: 'none',
      color: '#000000',
      fontSize: '25px'
    },
    '& a:hover': {
      color: '#F0F0F0'
    }
  },
  profileName: {
    fontFamily: `'Satisfy', cursive`,
    fontSize: '35px',
    marginBottom: '1rem',
    marginTop: '2.5rem'
  },
}))

export default useStyles;