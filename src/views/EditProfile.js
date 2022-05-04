import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import ProfileForm from './../components/ProfileForm';
import {motion} from 'framer-motion';

const EditProfile = () => {
  const {user} = useContext(MediaContext);
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {' '}
      <ProfileForm user={user} />{' '}
    </motion.div>
  );
};

export default EditProfile;
