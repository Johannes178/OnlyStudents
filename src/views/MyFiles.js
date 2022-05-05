import MediaTable from '../components/MediaTable';
import {Typography} from '@mui/material';
import BackButton from '../components/BackButton';
import {motion} from 'framer-motion';
import React from 'react';

const MyFiles = () => {
  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <BackButton />
        <Typography component="h1" variant="h2">
          MyFiles
        </Typography>
        <MediaTable allFiles={false} />
      </motion.div>
    </>
  );
};

export default MyFiles;
