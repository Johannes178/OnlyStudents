// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import {useMedia, useTag, useUser} from '../hooks/ApiHooks';
import useForm from '../hooks/FormHooks';
import {Grid} from '@mui/material';
import {Button} from '@mui/material';
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Typography} from '@mui/material';
import {Box} from '@mui/material';
import {CircularProgress} from '@mui/material';
import {motion} from 'framer-motion';
import BackButton from '../components/BackButton';

const ProfileForm = ({user}) => {
  /* const alkuarvot = {
    username: '',
    password: '',
    confirm: '',
    email: '',
    full_name: '',
  }; */
  // 'isPasswordMatch'

  const validators = {
    // confirm: ['isPasswordMatch'],
    email: ['required', 'isEmail'],
    full_name: ['minStringLength: 2'],
  };
  const errorMessages = {
    // confirm: ['passwords do not match'],
    email: ['required field', 'must be email'],
    full_name: ['min 2 characters'],
  };

  const {putUser} = useUser();
  const navigate = useNavigate();
  const {postMedia, loading} = useMedia();
  const {postTag} = useTag();

  const doRegister = async () => {
    console.log('doRegister');
    console.log(user);
    try {
      const token = localStorage.getItem('token');
      delete inputs.confirm;
      console.log(inputs);
      if (inputs.file) {
        const formdata = new FormData();
        formdata.append('title', 'avatar');
        formdata.append('file', inputs.file);
        const mediaData = await postMedia(formdata, token);
        const tagData = await postTag(
          {
            file_id: mediaData.file_id,
            tag: 'avatar_' + user.user_id,
          },
          token
        );
        console.log(tagData);
      }
      if (inputs.length == 4) {
        inputs[4].remove();
        const userData = await putUser(inputs, localStorage.getItem('token'));
        console.log(userData);
      } else {
        const userData = await putUser(inputs, localStorage.getItem('token'));
        console.log(userData);
      }
      // userData && setToggle(true);
      /* if (userData && tagData && mediaData) {
        console.log(userData.message);
        console.log(mediaData.message);
        console.log(tagData.message);
        navigate(-1);
      }*/
      confirm('profiili p??ivitetty') && navigate(-1);
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doRegister, user);

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      // if (value !== inputs.password) {
      //   return false;
      // }
      // return true;
      return value === inputs.password ? true : false;
    });

    return () => {
      // ValidatorForm.addValidationRule('isAvailable');
    };
  }, [inputs.file]);

  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      ></motion.div>

      <BackButton />

      <Grid
        id="container"
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor="color5"
        /* style={{
          minHeight: '100vh',
          width: '80vw',
          backgroundColor: 'white',
          margin: 'auto',
        }}*/
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
          Muokkaa profiilia
        </Typography>
        <Grid item xs={12} style={{maxWidth: '75vh'}}>
          <ValidatorForm id="update" onSubmit={handleSubmit}>
            <TextValidator
              fullWidth
              type="file"
              name="file"
              className="inputfield"
              style={{marginBottom: '30px'}}
              accept="image/*, video/*, audio/*"
              onChange={handleInputChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': {border: '4px solid black'},
                },
              }}
            />
            <TextValidator
              fullWidth
              label="salasana"
              placeholder="salasana"
              name="password"
              type="password"
              onChange={handleInputChange}
              validators={validators.password}
              errorMessages={errorMessages.password}
              style={{marginBottom: '30px'}}
              className="inputfield"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': {border: '4px solid black'},
                },
              }}
            />
            <TextValidator
              fullWidth
              label="anna salasana uudestaan"
              placeholder="anna salasana uudestaan"
              name="confirm"
              type="password"
              onChange={handleInputChange}
              validators={validators.confirm}
              errorMessages={errorMessages.confirm}
              style={{marginBottom: '30px'}}
              className="inputfield"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': {border: '4px solid black'},
                },
              }}
            />
            <TextValidator
              fullWidth
              label="email"
              placeholder="email"
              name="email"
              type="email"
              onChange={handleInputChange}
              value={inputs?.email}
              validators={validators.email}
              errorMessages={errorMessages.email}
              style={{marginBottom: '30px'}}
              className="inputfield"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': {border: '4px solid black'},
                },
              }}
            />
            <TextValidator
              fullWidth
              label="koko nimi"
              placeholder="koko nimi"
              name="full_name"
              onChange={handleInputChange}
              value={inputs?.full_name}
              validators={validators.full_name}
              errorMessages={errorMessages.full_name}
              style={{marginBottom: '30px'}}
              className="inputfield"
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
                  navigate('/profile');
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
                  form="update"
                  className="saveButton"
                  style={{
                    border: '4px solid black',
                    minHeight: '5vh',
                    minWidth: '5vh',
                    marginTop: '17px',
                  }}
                >
                  Tallenna
                </Button>
              )}
            </Box>
          </ValidatorForm>
        </Grid>
      </Grid>
    </>
  );
};

ProfileForm.propTypes = {
  user: PropTypes.object,
};

export default ProfileForm;
