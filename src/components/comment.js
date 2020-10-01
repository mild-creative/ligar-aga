import React, { useEffect, useState, useRef } from 'react';
import {
  Container,
  Typography
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import GuestForm from './guest-form';
import useStyles from '../styles/comment';
import { getComments, postComments } from '../http-request';

function Comment() {
  const classes = useStyles();
  const myRef = useRef(null)
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState([])
  const [count, setCount] = useState(1);
  const [loadingSubmit, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [commentPage, setPage] = useState(1);
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

  const fetchComments = async (showPage) => {
    setFetchLoading(true);
    try {
      const allComments = await getComments(showPage, 20);
      setCount(Math.ceil(allComments?.length / 20));
      setComments(allComments?.comment);
      setShowComments(allComments?.comment.slice(0, 20));
    } finally {
      setFetchLoading(false);
    }
  }

  const onChangePage = (_, page) => {
    window.scroll({
      top: myRef.current.offsetTop,
      behavior: 'smooth'
    })
    setPage(page);
    if (page != 1) {
      const ceil = page * 20;
      const floor = ceil - 20
      setShowComments(comments.slice(floor, ceil))
    } else {
      setShowComments(comments.slice(0, 20))
    }
  }

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography innerRef={myRef} className={classes.guestBook}>Buku Tamu</Typography>
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
      {!fetchLoading && showComments.map((comment) => (
        <div key={comment.email}>
          <p>
            <span className={classes.name}>{comment.name} </span>
            <span className={classes.email}>{`(${comment.whoAmI})`}</span>
          </p>
          <Typography>{comment.msg}</Typography>
          <hr />
        </div>
      ))}

      <Pagination
        count={count}
        variant="outlined"
        defaultPage={1}
        page={commentPage}
        onChange={onChangePage}
      />
    </Container>
  );
}

export default Comment;