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
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{minHeight: '75vh'}}
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
            }}
          >
            <CardContent>
              <List>
                <ListItem>
                  <ListItemAvatar
                    sx={{
                      width: '100%',
                      border: '4px solid black',
                      borderRadius: '50%',
                    }}
                  >
                    <Avatar
                      variant="square"
                      src={avatar.filename}
                      imgProps={{
                        alt: `${user.username}'s profile image`,
                      }}
                      sx={{width: '100%', height: '30vh', borderRadius: '50%'}}
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
            <Stack alignItems="center" justifyContent="center">
              <Button
                component={Link}
                to={user ? '/logout' : ''}
                className="button"
                color="color5"
                type="submit"
                variant="contained"
                style={{
                  border: '4px solid black',
                  minHeight: '5vh',
                  minWidth: '5vh',
                  maxHeight: '25vh',
                  maxWidth: '25vh',
                  marginTop: '17px',
                  marginBottom: '17px',
                }}
              >
                {user ? 'Muokkaa profiilia' : ''}
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
                  minHeight: '5vh',
                  minWidth: '5vh',
                  maxHeight: '20vh',
                  maxWidth: '20vh',
                  marginTop: '17px',
                  marginBottom: '17px',
                  marginRight: '15px',
                }}
              >
                {user ? 'Kirjaudu ulos' : ''}
              </Button>
            </Stack>
          </Card>
        )}
      </Grid>
    </>
  );
};

export default Profile;
