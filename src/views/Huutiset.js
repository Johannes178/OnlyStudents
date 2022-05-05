import MediaTable from '../components/MediaTable';
import {Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import IosShareIcon from '@mui/icons-material/IosShare';
import {motion} from 'framer-motion';

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
        startIcon={<IosShareIcon />}
        style={{
          border: '4px solid black',
          minHeight: '5vh',
          minWidth: '5vh',
          top: '8vh',
          left: '1vh',
          position: 'fixed',
        }}
      ></Button>

      <Typography component="h1" variant="h2">
        Huutiset
      </Typography>
      <MediaTable />
    </>
  );
};

export default Huutiset;
