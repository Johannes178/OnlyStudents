/* eslint-disable no-undef */
// import {Typography} from '@mui/material';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';

const Start = () => {
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
