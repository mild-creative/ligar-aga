import React, { useRef, useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from '@material-ui/core';

import useStyles from '../styles/comment';
import { postComments } from '../http-request';

function GuestForm() {
  const classes = useStyles();
  const inputRef = useRef(null);
  const [name, setName] = useState('');
  const [whoAmI, setWhoAmI] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async () => {
    console.log('submitted');
    const submitted = await postComments({
      name, whoAmI, msg
    });
    setName('');
    setWhoAmI('');
    setMsg('');
    console.log(submitted, 'success')
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'whoAmI':
        setWhoAmI(value);
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
          label="Who Am I"
          id="whoAmI"
          size="small"
          type="text"
          variant="outlined"
          value={whoAmI}
          onChange={handleChange}
          validators={['required']}
          errorMessages={['Who Am I field is required']}
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