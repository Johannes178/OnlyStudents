import MediaTable from '../components/MediaTable';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import {motion} from 'framer-motion';
import React from 'react';

const Huutiset = () => {
  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      ></motion.div>
      <Button
        component={Link}
        to={'/upload'}
        color="color5"
        variant="contained"
        className="uploadbutton"
        startIcon={<AddIcon />}
        style={{
          border: '4px solid black',
          minHeight: '5vh',
          minWidth: '5vh',
          top: '8vh',
          left: '1vh',
          position: 'fixed',
        }}
      ></Button>

      <MediaTable />
    </>
  );
};

export default Huutiset;
