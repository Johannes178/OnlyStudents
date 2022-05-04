import {Button, Grid, TextField, Typography} from '@mui/material';
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
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor="color5"
      style={{minHeight: '75vh'}}
    >
      <BackButton />
      <Typography
        marginLeft={2.4}
        component="h1"
        variant="h2"
        sx={{marginBottom: '4vh', fontSize: '2.3rem'}}
      >
        Kirjaudu
      </Typography>

      <Grid item xs={'auto'} style={{maxWidth: '20vh'}}>
        <form id="login" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            placeholder="käyttäjänimi"
            label="käyttäjänimi"
            name="username"
            onChange={handleInputChange}
            value={inputs.username}
            style={{marginBottom: '30px'}}
            className="inputfield"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& > fieldset': {border: '4px solid black'},
              },
            }}
          />
          <TextField
            fullWidth
            placeholder="salasana"
            label="salasana"
            name="password"
            type="password"
            onChange={handleInputChange}
            value={inputs.password}
            style={{marginBottom: '30px'}}
            className="inputfield"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& > fieldset': {border: '4px solid black'},
              },
            }}
          />
        </form>
      </Grid>
      <Grid item xs={'auto'} style={{maxWidth: '20vh'}}></Grid>
      <Button
        form="login"
        color="color5"
        type="submit"
        variant="contained"
        className="button"
        style={{
          border: '4px solid black',
          minHeight: '5vh',
          minWidth: '5vh',
          marginTop: '17px',
        }}
      >
        <ArrowForwardIosIcon />
      </Button>
    </Grid>
  );
};

export default LoginForm;
