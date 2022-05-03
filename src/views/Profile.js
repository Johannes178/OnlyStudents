import {useContext, useEffect, useState} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {useTag} from '../hooks/ApiHooks';
import {mediaUrl} from '../utils/variables';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

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
      <Stack
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{minHeight: '79vh'}}
      >
        <BackButton />
        <Typography component="h1" variant="h2" style={{marginTop: '70px'}}>
          Profiili
        </Typography>
        {user && (
          <Card
            sx={{
              backgroundColor: '#FFC120',
              boxShadow: 'none',
              margin: '0',
            }}
          >
            <CardContent style={{margin: '0'}}>
              <List>
                <ListItem disablePadding>
                  <ListItemAvatar>
                    <Avatar
                      disablePadding
                      variant="circle"
                      src={avatar.filename}
                      imgProps={{
                        alt: `${user.username}'s profile image`,
                      }}
                      sx={{
                        border: '10px solid black',
                        variant: 'contained',
                        height: '100%',
                        width: '100%',
                      }}
                    />
                  </ListItemAvatar>
                </ListItem>
                <ListItem style={{textAlign: 'center', paddingBottom: '0'}}>
                  <ListItemText
                    sx={{
                      '& .MuiTypography-root': {
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        paddingBottom: '0',
                      },
                    }}
                    primary={user.username}
                  />
                </ListItem>
                <ListItem style={{textAlign: 'center', paddingTop: '0'}}>
                  <ListItemText primary={user.email} />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        )}
        <Stack spacing={3} direction="column" marginRight="2vh">
          <Button
            component={Link}
            to={user ? '/logout' : ''}
            className="button"
            color="color5"
            type="submit"
            variant="contained"
            style={{
              border: '4px solid black',
              maxHeight: '5vh',
              maxWidth: '50vh',
              minHeight: '7vh',
              minWidth: '15vh',
            }}
          >
            {user ? (
              <Typography textAlign="center" sx={{fontSize: '1rem'}}>
                Muokkaa
              </Typography>
            ) : (
              ''
            )}
          </Button>
          <Button
            component={Link}
            to={user ? '/logout' : ''}
            className="buttonReject"
            color="color5"
            type="submit"
            variant="contained"
            style={{
              border: '4px solid black',
              maxHeight: '5vh',
              maxWidth: '15vh',
              minHeight: '7vh',
              minWidth: '10vh',
            }}
          >
            {user ? (
              <Typography textAlign="center" sx={{fontSize: '1rem'}}>
                Kirjaudu ulos
              </Typography>
            ) : (
              ''
            )}
          </Button>
        </Stack>{' '}
      </Stack>
    </>
  );
};

export default Profile;
