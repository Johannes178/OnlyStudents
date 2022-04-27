import {useLocation} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import {safeParseJson} from '../utils/functions';
import BackButton from '../components/BackButton';
import {useEffect, useState} from 'react';
import {useTag} from '../hooks/ApiHooks';

const Single = () => {
  const [avatar, setAvatar] = useState({});
  const location = useLocation();
  console.log(location);
  const file = location.state.file;
  const {description, filters} = safeParseJson(file.description) || {
    description: file.description,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      sepia: 0,
    },
  };

  const {getTag} = useTag();

  const fetchAvatar = async () => {
    try {
      if (file) {
        const avatars = await getTag('avatar_' + file.user_id);
        const ava = avatars.pop();
        ava.filename = mediaUrl + ava.filename;
        setAvatar(ava);
      }
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    fetchAvatar();
  }, []);

  console.log(avatar);

  return (
    <>
      <BackButton />
      <Typography component="h1" variant="h2">
        {file.title}
      </Typography>
      <Card>
        <CardMedia
          component={file.media_type === 'image' ? 'img' : file.media_type}
          controls={true}
          poster={mediaUrl + file.screenshot}
          src={mediaUrl + file.filename}
          alt={file.title}
          sx={{
            height: '60vh',
            filter: `
          brightness(${filters.brightness}%)
          contrast(${filters.contrast}%)
          saturate(${filters.saturation}%)
          sepia(${filters.sepia}%)
          `,
          }}
        />
        <CardContent>
          <Typography>{description}</Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar variant={'circle'} src={avatar.filename} />
              </ListItemAvatar>
              <Typography variant="subtitle2">{file.user_id}</Typography>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  );
};

// TODO in the next task: add propType for location

export default Single;
