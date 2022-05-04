import {useLocation} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';
import {Typography, Grid, List, ListItem} from '@mui/material';
import {safeParseJson} from '../utils/functions';
import BackButton from '../components/BackButton';
import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import CommentForm from '../components/CommentRow';
import {useComments, useTag, useUser} from '../hooks/ApiHooks';

const Single = () => {
  const [avatar, setAvatar] = useState({});
  const [setOwner] = useState(null);
  const {getUserById} = useUser();

  const location = useLocation();
  console.log(location);
  const file = location.state.file;
  const {getComments} = useComments();
  const [comments, setCommentsData] = useState(null);
  const {description} = safeParseJson(file.description) || {
    description: file.description,
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

  const getCommentsit = async () => {
    try {
      const comments = await getComments(file.file_id);
      setCommentsData(comments);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAvatar();
      getCommentsit();
    }, 10000);
    (async () => {
      if (!open) {
        try {
          setOwner(
            await getUserById(localStorage.getItem('token'), file.user_id)
          );
          const result = await getTag('avatar_' + file.user_id);

          if (result.length > 0) {
            const image = result.pop().filename;
            setAvatar(mediaUrl + image);
          }
        } catch (e) {
          console.log(e.message);
        }

        getCommentsit();
      }
    })();

    return () => clearInterval(interval);
  }, [open]);

  console.log(avatar);

  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <BackButton />
        {file && (
          <Grid container>
            <Grid
              item
              xs={12}
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{maxWidth: '100%', maxHeight: '100%', minHeight: '90vh'}}
            >
              <Typography variant="subtitle2">{file.user_id}</Typography>
              <Typography component="h3" variant="h4">
                {file.title}
              </Typography>
              <Grid
                item
                component={
                  file.media_type === 'image' ? 'img' : file.media_type
                }
                controls={true}
                poster={mediaUrl + file.screenshot}
                src={mediaUrl + file.filename}
                alt={file.title}
                sx={{
                  maxWidth: '20%',
                  maxHeight: '30vh',
                }}
              />{' '}
              <Typography>{description}</Typography>
              <List>
                {comments?.map((singlecomment) => {
                  return (
                    <ListItem key={singlecomment.comment_id}>
                      <Typography>{singlecomment.comment}</Typography>
                    </ListItem>
                  );
                })}
                <CommentForm fileId={file.file_id} />
              </List>
            </Grid>
          </Grid>
        )}
      </motion.div>
    </>
  );
};
// TODO in the next task: add propType for location

export default Single;
