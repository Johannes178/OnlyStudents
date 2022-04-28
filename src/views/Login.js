import LoginForm from '../components/LoginForm';
import {motion} from 'framer-motion';

const Login = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {' '}
      <LoginForm />
    </motion.div>
  );
};

export default Login;
