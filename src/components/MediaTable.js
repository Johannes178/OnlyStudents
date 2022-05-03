import PropTypes from 'prop-types';
import {CircularProgress, ImageList, Stack} from '@mui/material';
import {useMedia} from '../hooks/ApiHooks';
import {useWindowSize} from '../hooks/WindowHooks';
import MediaRow from './MediaRow';
import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';

const MediaTable = ({allFiles = true}) => {
  const {user} = useContext(MediaContext);
  const {mediaArray, loading, deleteMedia} = useMedia(allFiles, user?.user_id);
  const windowSize = useWindowSize();
  console.log(mediaArray);
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <ImageList variant="masonry" cols={windowSize.width > 1920 ? 1 : 1}>
          {mediaArray.map((item, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Stack
                item
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                marginTop={'6vh'}
                sx={{flexGrow: 1}}
              >
                <MediaRow
                  key={index}
                  file={item}
                  userId={user.user_id}
                  deleteMedia={deleteMedia}
                />
              </Stack>
            );
          })}
        </ImageList>
      )}
    </>
  );
};

MediaTable.propTypes = {
  allFiles: PropTypes.bool,
};

export default MediaTable;
