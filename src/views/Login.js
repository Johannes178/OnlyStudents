import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {Button} from '@mui/material';

const Login = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      {toggle ? <LoginForm /> : <RegisterForm setToggle={setToggle} />}
      OR
      <Button
        fullWidth
        color="primary"
        variant="contained"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? 'Register' : 'Login'}
      </Button>
    </>
  );
};

export default Login;
