// eslint-disable-next-line no-unused-vars
import RegisterForm from '../components/RegisterForm';
import {motion} from 'framer-motion';
import React from 'react';

const Register = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {' '}
      <RegisterForm />
    </motion.div>
  );
};

export default Register;
