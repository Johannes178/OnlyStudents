import useForm from '../hooks/FormHooks';
import {useComments} from '../hooks/ApiHooks';
import PropTypes from 'prop-types';
import {Button, TextField, Typography, Grid, Stack} from '@mui/material';

const CommentRow = (fileId, comment, deleteComments) => {
  // const {comment} = useContext(MediaContext);
  const {postComment} = useComments();
  const doComment = async () => {
    try {
      const fd = {
        file_id: fileId.fileId,
        comment: inputs.comment,
      };

      const commentData = await postComment(fd, localStorage.getItem('token'));
      console.log('commentData:', commentData);
    } catch (e) {
      console.log('doComment', e.message);
    }
  };

  /*  const doDeleteComments = () => {
    const ok = confirm('Do juu delte coment?');
    if (ok) {
      try {
        const deleteComments = deleteComments(
          comment.fileId,
          localStorage.getItem('token')
        );
        if (deleteComments) {
          console.log('Comment deleted');
        }
      } catch (err) {
        // console.log(err);
      }
    }
  };
*/
  const {inputs, handleInputChange, handleSubmit} = useForm(doComment, {
    comment: '',
  });

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        style={{
          maxWidth: '100%',
          minHeight: '8vh',
        }}
      >
        {' '}
        <Stack marginTop="4vh" item xs={12}>
          <form
            id="login"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Stack spacing={1} direction={'row'} item xs={12}>
              <TextField
                id="login"
                name="comment"
                className="inputfield2"
                label="Mitä mielessä?"
                rows={1}
                onChange={(e) => handleInputChange(e)}
                value={inputs.comment}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& > fieldset': {
                      border: '4px solid black',
                    },
                    '& label.Mui-focused': {
                      display: 'none',
                    },
                  },
                }}
              />

              <Button
                color="color5"
                type="submit"
                variant="contained"
                className="saveButton"
                sx={{
                  border: '4px solid black',
                  minWidth: '2vw',
                }}
              >
                <Typography sx={{fontSize: '0.8rem'}}>Lisää</Typography>
              </Button>
            </Stack>

            {/*
            <Grid item xs={12}>
              <Button
                onClick={doDeleteComments}
                color="color5"
                variant="contained"
                className="deleteButton"
                style={{
                  border: '4px solid black',
                  minHeight: '5vh',
                  minWidth: '5vw',
                  marginBottom: '2vh',
                }}
              >
                {' '}
                <Typography sx={{fontSize: '1rem'}}>
                  Poista kommentti
                </Typography>
              </Button>

              </Grid> */}
          </form>
        </Stack>
      </Grid>
    </>
  );
};

CommentRow.propTypes = {
  comment: PropTypes.object,
  deleteComments: PropTypes.func,
};

export default CommentRow;
