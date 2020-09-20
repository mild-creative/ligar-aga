import { makeStyles } from '@material-ui/core/styles';
import Ytb from '../assets/thumbnail-ytb.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    borderRadius: '5px',
    height: '550px',
    backgroundImage: `url('${Ytb}')`,
    backgroundSize:'100%',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      height: '450px'
    },
    [theme.breakpoints.down('sm')]: {
      height: '400px'
    },
    [theme.breakpoints.down('xs')]: {
      height: '350px'
    }
  },
  playButton: {
    width: '80px'
  }
}));

export default useStyles;