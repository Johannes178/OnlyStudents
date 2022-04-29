import {useContext, useEffect, useState} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {useTag} from '../hooks/ApiHooks';
import {mediaUrl} from '../utils/variables';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {AccountCircle, Badge, ContactMail} from '@mui/icons-material';
import BackButton from '../components/BackButton';
import {Link} from 'react-router-dom';

const Profile = () => {
  const {user} = useContext(MediaContext);
  const [avatar, setAvatar] = useState({
    filename: 'https://placekitten.com/320',
  });
  const {getTag} = useTag();

  const fetchAvatar = async () => {
    if (user) {
      const avatars = await getTag('avatar_' + user.user_id);
      const ava = avatars.pop();
      ava.filename = mediaUrl + ava.filename;
      setAvatar(ava);
    }
  };

  useEffect(() => {
    fetchAvatar();
  }, [user]);

  return (
    <>
      {' '}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{minHeight: '75vh'}}
      >
        <BackButton />
        <Typography component="h1" variant="h2">
          Profile
        </Typography>
        {user && (
          <Card>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemAvatar sx={{width: '100%'}}>
                    <Avatar
                      variant="square"
                      src={avatar.filename}
                      imgProps={{
                        alt: `${user.username}'s profile image`,
                      }}
                      sx={{width: '100%', height: '30vh'}}
                    />
                  </ListItemAvatar>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText primary={user.username} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ContactMail />
                  </ListItemIcon>
                  <ListItemText primary={user.email} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Badge />
                  </ListItemIcon>
                  <ListItemText primary={user.full_name} />
                </ListItem>
              </List>
            </CardContent>
            <Button component={Link} to={user ? '/logout' : ''} color="inherit">
              {user ? 'Logout' : ''}
            </Button>
          </Card>
        )}
      </Grid>
    </>
  );
};

export default Profile;
