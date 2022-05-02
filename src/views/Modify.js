import {Button, CircularProgress, Grid, Typography} from '@mui/material';
import {useMedia} from '../hooks/ApiHooks';
import {useNavigate, useLocation} from 'react-router-dom';
import useForm from '../hooks/FormHooks';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {safeParseJson} from '../utils/functions';
import {mediaUrl} from '../utils/variables';
import BackButton from '../components/BackButton';

const Modify = () => {
  const location = useLocation();
  const file = location.state.file;
  const {description} = safeParseJson(file.description) || {
    description: file.description,
  };

  console.log(file);

  const alkuarvot = {
    title: file.title,
    description: description,
  };

  const validators = {
    title: ['required', 'minStringLength: 3'],
    description: ['minStringLength: 5'],
  };

  const errorMessages = {
    username: ['required field', 'minimum 3 characters'],
    description: ['minimum 5 characters'],
  };

  const {putMedia, loading} = useMedia();
  const navigate = useNavigate();

  const doModify = async () => {
    try {
      console.log('doModify');
      // lisätään filtterit descriptioniin
      const desc = {
        description: inputs.description,
      };
      // tee sopiva objekti lähetettäväksi
      const data = {
        title: inputs.title,
        description: JSON.stringify(desc),
      };

      const token = localStorage.getItem('token');
      const mediaData = await putMedia(file.file_id, data, token);
      confirm(mediaData.message) && navigate(-1);
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doModify,
    alkuarvot
  );

  console.log(inputs);

  return (
    <>
      <BackButton />

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{minHeight: '20vh'}}
      >
        <Grid item xs={12}>
          <Typography
            marginLeft={2.4}
            component="h1"
            variant="h2"
            sx={{marginTop: '8vh', fontSize: '2.3rem'}}
          >
            Modify
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              fullWidth
              placeholder="title"
              name="title"
              onChange={handleInputChange}
              value={inputs.title}
              validators={validators.title}
              errorMessages={errorMessages.title}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': {border: 'none'},
                },
                '& label.Mui-focused': {
                  display: 'none',
                },
              }}
            />
            <TextValidator
              fullWidth
              placeholder="description"
              name="description"
              onChange={handleInputChange}
              value={inputs.description}
              validators={validators.description}
              errorMessages={errorMessages.description}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': {border: 'none'},
                },
                '& label.Mui-focused': {
                  display: 'none',
                },
              }}
            />

            {loading ? (
              <CircularProgress />
            ) : (
              <Button
                fullWidth
                color="primary"
                type="submit"
                variant="contained"
                style={{
                  border: '4px solid black',
                  minHeight: '5vh',
                  minWidth: '5vh',
                  marginTop: '17px',
                }}
              >
                Save
              </Button>
            )}
          </ValidatorForm>
        </Grid>
      </Grid>
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
          >
            <img
              style={{
                marginTop: '7vh',
                maxWidth: '70%',
                maxHeight: '55vh',
              }}
              src={mediaUrl + file.filename}
              alt="preview"
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Modify;
