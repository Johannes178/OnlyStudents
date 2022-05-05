import {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';
import {motion} from 'framer-motion';
import React from 'react';

const Logout = () => {
  const {user, setUser} = useContext(MediaContext);
  setUser(null);
  localStorage.clear();
  return (
    <motion.div
      initial={{opacity: 0, y: 200}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {' '}
      <>{user ? <Navigate to="/" /> : <div>Loading...</div>}</>{' '}
    </motion.div>
  );
};

export default Logout;
