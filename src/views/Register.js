import {useState} from 'react';
import RegisterForm from '../components/RegisterForm';
const Login = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>{toggle ? <RegisterForm /> : <RegisterForm setToggle={setToggle} />}</>
  );
};

export default Login;
