import MediaTable from '../components/MediaTable';
import {Typography} from '@mui/material';
import Nav from '../components/Nav';

const Huutiset = () => {
  return (
    <>
      <Nav />

      <Typography component="h1" variant="h2">
        Huutiset
      </Typography>
      <MediaTable />
    </>
  );
};

export default Huutiset;
