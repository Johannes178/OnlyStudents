import {ArrowBack} from '@mui/icons-material';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      color="color2"
      variant="contained"
      startIcon={<ArrowBack />}
      onClick={() => {
        navigate(-1);
      }}
    >
      Takaisin
    </Button>
  );
};

export default BackButton;
