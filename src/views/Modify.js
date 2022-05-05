import {Button, CircularProgress, Grid, Typography} from '@mui/material';
import {useMedia} from '../hooks/ApiHooks';
import {useNavigate, useLocation} from 'react-router-dom';
import useForm from '../hooks/FormHooks';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {safeParseJson} from '../utils/functions';
import {mediaUrl} from '../utils/variables';
import BackButton from '../components/BackButton';
import {motion} from 'framer-motion';
import React from 'react';

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
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <BackButton />

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          backgroundColor="color5"
          style={{minHeight: '20vh'}}
        >
          <Grid item xs={12}>
            <Typography
              marginLeft={2.4}
              component="h1"
              variant="h2"
              sx={{marginBottom: '5vh', marginTop: '10vh', fontSize: '2.3rem'}}
            >
              Muokkaa
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
                className="inputfield"
                style={{marginBottom: '30px'}}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& > fieldset': {border: '4px solid black'},
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
                className="inputfield"
                style={{marginBottom: '30px'}}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& > fieldset': {border: '4px solid black'},
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
                  color="color5"
                  type="submit"
                  variant="contained"
                  className="button"
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
                  maxWidth: '80%',
                  maxHeight: '60vh',
                }}
                src={mediaUrl + file.filename}
                alt="preview"
              />
            </Grid>
          </Grid>
        )}
      </motion.div>
    </>
  );
};

export default Modify;
