import {Button, Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import React from 'react';

const Start = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {' '}
      <Stack
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
          to={'/login'}
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
          to={'/register'}
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
          to={'/about'}
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
