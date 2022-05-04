import MediaTable from '../components/MediaTable';
import {Typography} from '@mui/material';
import BackButton from '../components/BackButton';
import {motion} from 'framer-motion';

const MyFiles = () => {
  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      ></motion.div>
      <BackButton />
      <Typography component="h1" variant="h2">
        MyFiles
      </Typography>
      <MediaTable allFiles={false} />
    </>
  );
};

export default MyFiles;
