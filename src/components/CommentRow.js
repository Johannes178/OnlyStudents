import useForm from '../hooks/FormHooks';
import {useComments} from '../hooks/ApiHooks';
import PropTypes from 'prop-types';
import {Button, TextField, Typography} from '@mui/material';

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

  const doDeleteComments = () => {
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

  const {inputs, handleInputChange, handleSubmit} = useForm(doComment, {
    comment: '',
  });

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          name="comment"
          className="inputfield"
          label="My text:"
          multiline
          rows={10}
          fullWidth
          variant="filled"
          onChange={(e) => handleInputChange(e)}
          value={inputs.comment}
        />
        <Button variant="contained" type="submit" fullWidth>
          Lisää
        </Button>
      </form>
      <Button
        onClick={doDeleteComments}
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
    </>
  );
};

CommentRow.propTypes = {
  comment: PropTypes.object,
  deleteComments: PropTypes.func,
};

export default CommentRow;
