import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      color="color5"
      type="submit"
      variant="contained"
      className="button"
      startIcon={<ArrowBackIosNewIcon />}
      onClick={() => {
        navigate(-1);
      }}
      style={{
        border: '4px solid black',
        minHeight: '5vh',
        minWidth: '5vh',
        top: '8vh',
        left: '1vh',
        position: 'fixed',
      }}
    >
      {' '}
    </Button>
  );
};

export default BackButton;
