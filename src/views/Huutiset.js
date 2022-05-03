import MediaTable from '../components/MediaTable';
import {Typography, Button} from '@mui/material';
import Nav from '../components/Nav';
import {Link} from 'react-router-dom';
import IosShareIcon from '@mui/icons-material/IosShare';

const Huutiset = () => {
  return (
    <>
      <Nav />

      <Button
        component={Link}
        to={'/upload'}
        color="color5"
        variant="contained"
        className="button"
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
