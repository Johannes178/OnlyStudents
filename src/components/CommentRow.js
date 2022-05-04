import useForm from '../hooks/FormHooks';
import {useComments} from '../hooks/ApiHooks';
import PropTypes from 'prop-types';
import {Button, TextField, Typography, Grid} from '@mui/material';

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
        alignItems="center"
        style={{
          spacing: '3vh',
          maxWidth: '100%',
          minHeight: '8vh',
        }}
      >
        {' '}
        <Grid marginTop="4vh" item xs={12}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid item xs={12}>
              <TextField
                name="comment"
                className="inputfield"
                label="Mitä mielessä?"
                rows={1}
                onChange={(e) => handleInputChange(e)}
                value={inputs.comment}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& > fieldset': {
                      minHeight: '5vh',
                      minWidth: '5vw',
                      border: '4px solid black',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="color5"
                type="submit"
                variant="contained"
                className="button"
                style={{
                  border: '4px solid black',
                  minHeight: '5vh',
                  minWidth: '5vw',
                  marginTop: '2vh',
                }}
              >
                <Typography sx={{fontSize: '1rem'}}>Lisää kommentti</Typography>
              </Button>
            </Grid>
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
        </Grid>
      </Grid>
    </>
  );
};

CommentRow.propTypes = {
  comment: PropTypes.object,
  deleteComments: PropTypes.func,
};

export default CommentRow;
