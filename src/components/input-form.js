import React, { useRef, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from '../styles/comment';
// import { postComments } from '../http-request';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function GuestForm({ handleSubmit, loadingSubmit, setAlertOpen, msg, alertOpen, handleChange, name, whoAmI }) {
  const classes = useStyles();
  const inputRef = useRef(null);

  useEffect(() => {
    ValidatorForm.addValidationRule('msgChars', (value) => {
      if (value.length > 160) {
        return false;
      }
      return true;
    });
  }, [msg]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <ValidatorForm
      ref={inputRef}
      onSubmit={handleSubmit}
      onError={errors => console.log(errors)}
      className={classes.formWrapper}
    >
      <div>
        <TextValidator
          id="name"
          size="small"
          type="file"
          variant="outlined"
          value={name}
          onChange={(e) => {handleChange(e)}}
          validators={['required']}
          errorMessages={['File field is required']}
        />
      </div>
      <Button disabled={loadingSubmit} type="submit" variant="outlined" className={classes.button}>
        {loadingSubmit ? 'Submitting Form ...' : 'Submit'}
      </Button>
      <Snackbar open={alertOpen} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Success submit comment
        </Alert>
      </Snackbar>
    </ValidatorForm>
  );
}

export default GuestForm;