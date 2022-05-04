import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';
import {useUser} from '../hooks/ApiHooks';

const Nav = () => {
  const {user, setUser} = useContext(MediaContext);
  const [open] = useState(false);
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
    <Box>
      <AppBar className="appbar" color="color4">
        <Toolbar>
          <Typography
            id="logolink"
            variant="h6"
            component={Link}
            to={user ? '/huutiset' : '/'}
            color="#FFFFFF"
            sx={{flexGrow: 1}}
            style={{textDecoration: 'none'}}
          >
            OnlyStudents
          </Typography>
          <Button
            id="appbar"
            component={Link}
            to={user ? '/huutiset' : ''}
            color="color3"
          >
            {user ? 'Huutiset' : ''}
          </Button>
          <Button
            id="appbar"
            component={Link}
            to={user ? '/keksustelu' : ''}
            color="color3"
          >
            {user ? 'Keksustelu' : ''}
          </Button>
          <Button
            id="appbar"
            component={Link}
            to={user ? '/profile' : ''}
            color="color3"
          >
            {user ? 'Profiili' : ''}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
