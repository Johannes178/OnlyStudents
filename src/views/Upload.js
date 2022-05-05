import {Button, CircularProgress, Grid, Typography} from '@mui/material';
import {useMedia, useTag} from '../hooks/ApiHooks';
import {useNavigate} from 'react-router-dom';
import useForm from '../hooks/FormHooks';
import {useState, useEffect} from 'react';
import {appID} from '../utils/variables';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import BackButton from '../components/BackButton';
import {Box} from '@mui/system';

const Upload = () => {
  const [preview, setPreview] = useState('logo192.png');
  const alkuarvot = {
    title: '',
    description: '',
    file: null,
  };

  const validators = {
    title: ['required', 'minStringLength: 3'],
    description: ['minStringLength: 5'],
  };

  const errorMessages = {
    username: ['required field', 'minimum 3 characters'],
    description: ['minimum 5 characters'],
  };

  const {postMedia, loading} = useMedia();
  const {postTag} = useTag();
  const navigate = useNavigate();

  const doUpload = async () => {
    try {
      console.log('doUpload');
      // lisätään filtterit descriptioniin
      const desc = {
        description: inputs.description,
      };
      const token = localStorage.getItem('token');
      const formdata = new FormData();
      formdata.append('title', inputs.title);
      formdata.append('description', JSON.stringify(desc));
      formdata.append('file', inputs.file);
      const mediaData = await postMedia(formdata, token);
      const tagData = await postTag(
        {
          file_id: mediaData.file_id,
          tag: appID,
        },
        token
      );
      confirm(tagData.message) && navigate('/huutiset');
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doUpload,
    alkuarvot
  );

  useEffect(() => {
    if (inputs.file) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setPreview(reader.result);
      });
      reader.readAsDataURL(inputs.file);
    }
  }, [inputs.file]);

  console.log(inputs);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <BackButton />
        </Grid>

        <Grid
          id="container"
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          backgroundColor="color5"
          style={{
            minHeight: '100vh',
            width: '80vw',

            margin: 'auto',
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            gutterBottom
            style={{
              marginTop: '100px',
              marginBottom: '40px',
              textAlign: 'center',
              fontSize: '2em',
            }}
          >
            Lisää julkaisu
          </Typography>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              type="file"
              name="file"
              accept="image/*, video/*, audio/*"
              onChange={handleInputChange}
              style={{marginBottom: '30px'}}
              className="inputfield2"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': {border: '4px solid black'},
                },
              }}
            />
            <Box style={{display: 'flex', justifyContent: 'center'}}>
              <img
                style={{
                  maxWidth: '40vw',
                }}
                src={preview}
                alt="preview"
              />
            </Box>

            <TextValidator
              fullWidth
              placeholder="Kuvateksti"
              name="description"
              label="kuvateksti"
              onChange={handleInputChange}
              value={inputs.description}
              validators={validators.description}
              errorMessages={errorMessages.description}
              style={{
                marginTop: '20px',
                marginBottom: '20px',
              }}
              className="inputfield2"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': {border: '4px solid black'},
                },
              }}
            />

            <Box id="buttonbox">
              <Button
                color="color5"
                type="submit"
                variant="contained"
                className="deleteButton"
                onClick={() => {
                  navigate('/huutiset');
                }}
                style={{
                  border: '4px solid black',
                  minHeight: '5vh',
                  minWidth: '5vh',
                  marginTop: '17px',
                }}
              >
                Peruuta
              </Button>
              {loading ? (
                <CircularProgress />
              ) : (
                <Button
                  color="color5"
                  type="submit"
                  variant="contained"
                  disabled={!inputs.file}
                  className="saveButton"
                  style={{
                    border: '4px solid black',
                    minHeight: '5vh',
                    minWidth: '5vh',
                    marginTop: '17px',
                  }}
                >
                  Julkaise
                </Button>
              )}
            </Box>
          </ValidatorForm>
        </Grid>
      </Grid>
    </>
  );
};

export default Upload;
