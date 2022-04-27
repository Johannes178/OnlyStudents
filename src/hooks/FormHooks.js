import {useState} from 'react';

const useForm = (callback, initState) => {
  const [inputs, setInputs] = useState(initState);
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = (event) => {
    event.persist && event.persist();

    setInputs((inputs) => {
      return {
        ...inputs,
        [event.target.name]: event.target.files
          ? event.target.files[0]
          : event.target.value,
      };
    });
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useForm;
