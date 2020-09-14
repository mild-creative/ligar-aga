import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  guestBook: {
    fontFamily: `'Satisfy', cursive`,
    fontSize: '25px',
    marginBottom: '1rem'
  },
  button: {
    boxShadow: '2px 2px grey'
  },
  formWrapper: {
    marginBottom: '2rem',
    '& input, textarea': {
      width: 300
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