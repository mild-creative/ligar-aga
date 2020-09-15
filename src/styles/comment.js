import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '3.5rem'
  },
  guestBook: {
    fontFamily: `'Satisfy', cursive`,
    fontSize: '35px',
    marginBottom: '1rem',
    marginTop: '2.5rem'
  },
  button: {
    boxShadow: '2px 2px grey',
    width: '200px'
  },
  formWrapper: {
    marginBottom: '2rem',
    '& input, textarea': {
      width: 300,
      [theme.breakpoints.down('xs')]: {
        width: '75vw'
      }
    },
    '& div': {
      marginBottom: '.4rem'
    }
  },
  email: {
    color: 'grey'
  },
  name: {
    fontSize: '20px',
    fontWeight: 'bold'
  }
}));

export default useStyles;