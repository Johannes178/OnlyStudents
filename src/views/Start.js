import {Button, Stack} from '@mui/material';
import {useContext, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';
import {useUser} from '../hooks/ApiHooks';
import {motion} from 'framer-motion';
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
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {' '}
      <Stack
        container
        direction={{xs: 'column', sm: 'row'}}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        textAlign={'center'}
        spacing={10}
      >
        <Button
          xs={{mx: 20}}
          style={{
            border: '0.2vh solid black',
            minHeight: '5vh',
            minWidth: '15vh',
          }}
          component={Link}
          to={user ? '/login' : '/login'}
          color="color5"
          variant="contained"
          className="button"
        >
          KIRJAUDU
        </Button>
        <Button
          xs={{mx: 20}}
          style={{
            border: '0.2vh solid black',
            minHeight: '5vh',
            minWidth: '15vh',
          }}
          component={Link}
          to={user ? '/register' : '/register'}
          color="color5"
          variant="contained"
          className="button"
        >
          REKISTERÖIDY
        </Button>
        <Button
          xs={{mx: 20}}
          style={{
            border: '0.2vh solid black',
            minHeight: '5vh',
            minWidth: '15vh',
          }}
          component={Link}
          to={user ? '/about' : '/about'}
          color="color5"
          variant="contained"
          className="button"
        >
          TIETOA MEISTÄ
        </Button>
      </Stack>
    </motion.div>
  );
};

export default Start;
