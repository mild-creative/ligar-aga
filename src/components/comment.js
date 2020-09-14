import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography
} from '@material-ui/core';

import GuestForm from './guest-form';
import useStyles from '../styles/comment';
import { getComments } from '../http-request';
import { dummy } from '../constants';

function Comment() {
  const classes = useStyles();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, [])

  const fetchComments = async () => {
    const allComments = await getComments();
    setComments(allComments?.comment);
  }

  return (
    <Container maxWidth="md">
      <Typography className={classes.guestBook}>Guest Book</Typography>
      <GuestForm />
      <hr />
      {dummy.map((comment) => (
        <div key={comment.email}>
          <p>
            <span className={classes.name}>{comment.name} </span>
            <span className={classes.email}>{`(${comment.email})`}</span>
          </p>
          <Typography>{comment.msg}</Typography>
          <hr />
        </div>
      ))}
    </Container>
  );
}

export default Comment;