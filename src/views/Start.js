import {Button} from '@mui/material';
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
      <Button
        component={Link}
        to={user ? '/login' : '/login'}
        color="primary"
        variant="contained"
      >
        KIRJAUDU
      </Button>
      <Button
        component={Link}
        to={user ? '/login' : '/login'}
        color="primary"
        variant="contained"
      >
        REKISTERÖIDY
      </Button>
      <Button
        component={Link}
        to={user ? '/about' : '/about'}
        color="primary"
        variant="contained"
      >
        TIETOA MEISTÄ
      </Button>
    </>
  );
};

export default Start;
