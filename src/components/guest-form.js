import React, { useRef, useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from '@material-ui/core';

import useStyles from '../styles/comment';
import { postComments } from '../http-request';

function GuestForm() {
  const classes = useStyles();
  const inputRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async () => {
    console.log('submitted');
    const submitted = await postComments({
      name, email, msg
    });
    console.log(submitted, 'success')
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'msg':
        setMsg(value);
        break;
      default:
        break;
    }
  }

  return (
    <ValidatorForm
      ref={inputRef}
      onSubmit={handleSubmit}
      onError={errors => console.log(errors)}
      className={classes.formWrapper}
    >
      <div>
        <TextValidator
          label="Guest Name"
          id="name"
          size="small"
          type="text"
          variant="outlined"
          value={name}
          onChange={handleChange}
          validators={['required']}
          errorMessages={['Name field is required']}
        />
      </div>
      <div>
        <TextValidator
          label="Guest Email"
          id="email"
          size="small"
          type="email"
          variant="outlined"
          value={email}
          onChange={handleChange}
          validators={['required', 'isEmail']}
          errorMessages={['Email field is required', 'Email is not valid']}
        />
      </div>
      <div>
        <TextValidator
          label="Message"
          id="msg"
          size="small"
          type="text"
          multiline={true}
          variant="outlined"
          value={msg}
          onChange={handleChange}
          validators={['required']}
          errorMessages={['Message field is required']}
        />
      </div>
      <Button type="submit" variant="outlined" className={classes.button}>
        Submit
      </Button>
    </ValidatorForm>
  );
}

export default GuestForm;