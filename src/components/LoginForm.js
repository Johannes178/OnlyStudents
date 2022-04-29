import {Button, Grid, TextField} from '@mui/material';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';
import {useLogin} from '../hooks/ApiHooks';
import useForm from '../hooks/FormHooks';
import BackButton from '../components/BackButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LoginForm = () => {
  // eslint-disable-next-line no-unused-vars
  const {user, setUser} = useContext(MediaContext);
  const alkuarvot = {
    username: '',
    password: '',
  };

  const {postLogin} = useLogin();
  const navigate = useNavigate();

  const doLogin = async () => {
    console.log('doLogin');
    try {
      const userData = await postLogin(inputs);
      localStorage.setItem('token', userData.token);
      setUser(userData.user);
      navigate('/huutiset');
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doLogin, alkuarvot);
  console.log(inputs);
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={7}
      columnSpacing="0vh"
      direction="column"
      style={{minHeight: '75vh'}}
    >
      <BackButton />
      <Grid item xs={'auto'} style={{maxWidth: '20vh'}}>
        <form id="login" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="käyttäjänimi"
            placeholder="käyttäjänimi"
            name="username"
            onChange={handleInputChange}
            value={inputs.username}
          />
          <TextField
            fullWidth
            label="salasana"
            placeholder="salasana"
            name="password"
            type="password"
            onChange={handleInputChange}
            value={inputs.password}
          />
        </form>
      </Grid>
      <Grid item xs={'auto'} style={{maxWidth: '20vh'}}></Grid>
      <Button
        form="login"
        color="color2"
        type="submit"
        variant="contained"
        style={{border: '0.2vh solid black', minHeight: '5vh', minWidth: '5vh'}}
      >
        <ArrowForwardIosIcon />
      </Button>
    </Grid>
  );
};

export default LoginForm;
