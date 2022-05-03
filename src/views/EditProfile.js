import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import ProfileForm from './../components/ProfileForm';

const EditProfile = () => {
  const {user} = useContext(MediaContext);
  return <ProfileForm user={user} />;
};

export default EditProfile;
