import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import About from '../views/About';
import Huutiset from '../views/Huutiset';
import Login from '../views/Login';
import Logout from '../views/Logout';
import Modify from '../views/Modify';
import MyFiles from '../views/MyFiles';
import Profile from '../views/Profile';
import Register from '../views/Register';
import Single from '../views/Single';
import Start from '../views/Start';
import Upload from '../views/Upload';
import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Start />} />
        <Route path="/huutiset" element={<Huutiset />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/single" element={<Single />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/myfiles" element={<MyFiles />} />
        <Route path="/modify" element={<Modify />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
