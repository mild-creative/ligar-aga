import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography
} from '@material-ui/core';

import GuestForm from './guest-form';
import useStyles from '../styles/comment';
import { getComments, postComments } from '../http-request';
// import { dummy } from '../constants';

function Comment() {
  const classes = useStyles();
  const [comments, setComments] = useState([]);
  const [loadingSubmit, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [name, setName] = useState('');
  const [whoAmI, setWhoAmI] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetchComments();
  }, [])

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const submitted = await postComments({
        name, whoAmI, msg
      });
      console.log(submitted, 'success')
    } finally {
      resetField();
      setLoading(false);
      setAlertOpen(true);
      fetchComments();
    }
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

  const resetField = () => {
    setName('');
    setWhoAmI('');
    setMsg('');
  }

  const fetchComments = async () => {
    setFetchLoading(true);
    try {
      const allComments = await getComments();
      setComments(allComments?.comment);
    } finally {
      setFetchLoading(false);
    }
  }

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography className={classes.guestBook}>Guest Book</Typography>
      <GuestForm
        handleSubmit={handleSubmit}
        loadingSubmit={loadingSubmit}
        setAlertOpen={setAlertOpen}
        msg={msg}
        alertOpen={alertOpen}
        handleChange={handleChange}
        name={name}
        whoAmI={whoAmI}
      />
      <hr />
      {fetchLoading && <h3>Loading ...</h3>}
      {!fetchLoading && comments.map((comment) => (
        <div key={comment.email}>
          <p>
            <span className={classes.name}>{comment.name} </span>
            <span className={classes.email}>{`(${comment.whoAmI})`}</span>
          </p>
          <Typography>{comment.msg}</Typography>
          <hr />
        </div>
      ))}
    </Container>
  );
}

export default Comment;