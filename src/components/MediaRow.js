import {Button, ImageListItem, Typography, Stack} from '@mui/material';
import PropTypes from 'prop-types';
import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {Link} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';
import {safeParseJson} from '../utils/functions';

const MediaRow = ({file, userId, deleteMedia}) => {
  const {update, setUpdate} = useContext(MediaContext);
  const doDelete = () => {
    const ok = confirm('Do juu delte?');
    if (ok) {
      try {
        const deleteInfo = deleteMedia(
          file.file_id,
          localStorage.getItem('token')
        );
        if (deleteInfo) {
          setUpdate(!update);
        }
      } catch (err) {
        // console.log(err);
      }
    }
  };

  const {description} = safeParseJson(file.description) || {
    description: file.description,
  };

  return (
    <>
      <Stack
        style={{
          spacing: '3vh',
          marginBottom: '-2vh',
          maxWidth: '100%',
          minHeight: '8vh',
          direction: 'row',
        }}
      >
        {' '}
      </Stack>
      <ImageListItem
        component={Link}
        to={'/single'}
        state={{file}}
        variant="contained"
        key={file.file_id}
      >
        <img
          src={
            file.thumbnails ? mediaUrl + file.thumbnails.w320 : 'logo512.png'
          }
          alt={file.title}
          loading="lazy"
          color="color5"
          variant="contained"
          style={{
            border: '10px solid black',
            borderRadius: '20px',
          }}
        />
      </ImageListItem>

      {
        <>
          {userId === file.user_id && (
            <>
              <Stack
                marginTop="1.5vh"
                spacing={2}
                container
                direction="row"
                marginLeft="-1vh"
              >
                <Button
                  title={file.title}
                  subtitle={description}
                  component={Link}
                  to={'/modify'}
                  state={{file}}
                  color="color5"
                  variant="contained"
                  className="button"
                  style={{
                    border: '4px solid black',
                    minHeight: '5vh',
                    minWidth: '10vh',
                  }}
                >
                  <Typography sx={{fontSize: '1rem'}}>Muokkaa</Typography>
                </Button>
                <Button
                  onClick={doDelete}
                  color="color5"
                  variant="contained"
                  className="button"
                  style={{
                    border: '4px solid black',
                    minHeight: '5vh',
                    minWidth: '10vh',
                  }}
                >
                  <Typography sx={{fontSize: '1rem'}}>Poista</Typography>
                </Button>
              </Stack>
            </>
          )}
        </>
      }
    </>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object,
  userId: PropTypes.number,
  deleteMedia: PropTypes.func,
};

export default MediaRow;
