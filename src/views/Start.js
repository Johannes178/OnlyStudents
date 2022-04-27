import {Button, Grid} from '@mui/material';
import {useContext, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';
import {useUser} from '../hooks/ApiHooks';

const Start = () => {
  const {user, setUser} = useContext(MediaContext);
  const {getUser} = useUser();
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const userData = await getUser(localStorage.getItem('token'));
      console.log(userData);
      setUser(userData);
    } catch (err) {
      setUser(null);
      navigate('/');
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(user, open);

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{minHeight: '75vh'}}
      >
        <Button
          style={{
            border: '0.2vh solid black',
            minHeight: '5vh',
            minWidth: '5vh',
          }}
          component={Link}
          to={user ? '/login' : '/login'}
          color="color2"
          variant="contained"
        >
          KIRJAUDU
        </Button>
        <Button
          style={{
            border: '0.2vh solid black',
            minHeight: '5vh',
            minWidth: '5vh',
          }}
          component={Link}
          to={user ? '/register' : '/register'}
          color="color2"
          variant="contained"
        >
          REKISTERÖIDY
        </Button>
        <Button
          style={{
            border: '0.2vh solid black',
            minHeight: '5vh',
            minWidth: '5vh',
          }}
          component={Link}
          to={user ? '/about' : '/about'}
          color="color2"
          variant="contained"
        >
          TIETOA MEISTÄ
        </Button>
      </Grid>
    </>
  );
};

export default Start;
