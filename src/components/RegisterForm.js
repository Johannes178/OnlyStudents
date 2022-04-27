// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import {useUser} from '../hooks/ApiHooks';
import useForm from '../hooks/FormHooks';
import {Grid} from '@mui/material';
import {Button} from '@mui/material';
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import {useEffect} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const RegisterForm = (setToggle) => {
  const alkuarvot = {
    username: '',
    password: '',
    confirm: '',
    email: '',
    full_name: '',
  };

  const validators = {
    username: ['required', 'minStringLength: 3', 'isAvailable'],
    password: ['required', 'minStringLength: 8'],
    confirm: ['required', 'isPasswordMatch'],
    email: ['required', 'isEmail'],
    full_name: ['minStringLength: 2'],
  };
  const errorMessages = {
    username: ['required field', 'min 3 characters', 'username not available'],
    password: ['required field', 'min 8 characters'],
    confirm: ['required field', 'passwords do not match'],
    email: ['required field', 'must be email'],
    full_name: ['min 2 characters'],
  };

  const {postUser, getUsername} = useUser();

  const doRegister = async () => {
    console.log('doRegister');
    try {
      // const checkUser = await getUsername(inputs.username);
      // if (checkUser) {}
      delete inputs.confirm;
      const userData = await postUser(inputs);

      // userData && setToggle(true);
      if (userData) {
        setToggle(true);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    alkuarvot
  );

  useEffect(() => {
    ValidatorForm.addValidationRule('isAvailable', async (value) => {
      try {
        return await getUsername(value);
      } catch (err) {
        return false;
      }
    });

    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      // if (value !== inputs.password) {
      //   return false;
      // }
      // return true;
      return value === inputs.password ? true : false;
    });

    return () => {
      ValidatorForm.addValidationRule('isAvailable');
    };
  }, [inputs]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{minHeight: '75vh'}}
    >
      <Grid item xs={12} style={{maxWidth: '75vh'}}>
        <ValidatorForm onSubmit={handleSubmit}>
          <TextValidator
            fullWidth
            placeholder="käyttäjänimi"
            label="käyttäjänimi"
            name="username"
            onChange={handleInputChange}
            value={inputs.username}
            validators={validators.username}
            errorMessages={errorMessages.username}
          />
          <TextValidator
            fullWidth
            label="salasana"
            placeholder="salasana"
            name="password"
            type="password"
            onChange={handleInputChange}
            value={inputs.password}
            validators={validators.password}
            errorMessages={errorMessages.password}
          />
          <TextValidator
            fullWidth
            label="anna salasana uudestaan"
            placeholder="anna salasana uudestaan"
            name="confirm"
            type="password"
            onChange={handleInputChange}
            value={inputs.confirm}
            validators={validators.confirm}
            errorMessages={errorMessages.confirm}
          />
          <TextValidator
            fullWidth
            label="email"
            placeholder="email"
            name="email"
            type="email"
            onChange={handleInputChange}
            value={inputs.email}
            validators={validators.email}
            errorMessages={errorMessages.email}
          />
          <TextValidator
            fullWidth
            label="koko nimi"
            placeholder="koko nimi"
            name="full_name"
            onChange={handleInputChange}
            value={inputs.full_name}
            validators={validators.full_name}
            errorMessages={errorMessages.full_name}
          />
        </ValidatorForm>
      </Grid>
      <Button
        color="color2"
        type="submit"
        variant="contained"
        style={{border: '0.2vh solid black', minHeight: '5vh', minWidth: '5vh'}}
      >
        <ArrowForwardIosIcon />
      </Button>
    </Grid>
  );
};

RegisterForm.propTypes = {
  setToggle: PropTypes.func,
};

export default RegisterForm;
