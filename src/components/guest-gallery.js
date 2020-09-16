import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Grid
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import GuestForm from './input-form';
import useStyles from '../styles/comment';
import { getGallery, postGallery } from '../http-request';

function Comment() {
  const classes = useStyles();
  const [gallery, setGallery] = useState([]);
  const [formData, setFormData] = useState('');
  const [loadingSubmit, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [commentPage, setPage] = useState(1);
  const [guestFile, setGuestFile] = useState('');

  useEffect(() => {
    fetchGallery();
  }, [])

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await postGallery(formData);
    } finally {
      resetField();
      setLoading(false);
      setAlertOpen(true);
      fetchGallery();
    }
  }

  const handleChange = (e) => {
    let formData = new FormData()
    formData.append('image', e.target.files[0])
    setFormData(formData);
    setGuestFile(e.target.value)
  }

  const resetField = () => {
    setGuestFile('');
    setFormData('')
  }

  const fetchGallery = async (showPage) => {
    setFetchLoading(true);
    try {
      const allComments = await getGallery(showPage);
      console.log(allComments)
      setGallery(allComments.data.gallery);
    } finally {
      setFetchLoading(false);
    }
  }

  const onChangePage = (_, page) => {
    setPage(page);
    fetchGallery(page);
  }

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography className={classes.guestBook}>Guest Gallery</Typography>
      <GuestForm
        handleSubmit={handleSubmit}
        loadingSubmit={loadingSubmit}
        setAlertOpen={setAlertOpen}
        alertOpen={alertOpen}
        handleChange={handleChange}
        name={guestFile}
      />
      <hr />
      {fetchLoading && <h3>Loading ...</h3>}
      <video style={{ width: '100%', height: '100%' }} loop autoPlay playsInline src='https://storage.googleapis.com/asset-aga/521211162893' />
      <Grid container>
        <Grid style={{ background: 'red', height: 200, width: 200 }} item xs={3}>
          <video style={{ width: '100%', height: '100%' }} loop autoPlay playsInline src='https://storage.googleapis.com/asset-aga/521211162893' />

        </Grid>
        <Grid style={{ background: 'black', height: 200, width: 200 }} item xs={3}>
          <video style={{ width: '100%', height: '100%' }} loop autoPlay playsInline src='https://storage.googleapis.com/asset-aga/521211162893' />

        </Grid>
        <Grid style={{ background: 'black', height: 200, width: 200 }} item xs={3}>
          <video style={{ width: '100%', height: '100%' }} loop autoPlay playsInline src='https://storage.googleapis.com/asset-aga/521211162893' />

        </Grid>
        <Grid style={{ background: 'black', height: 200, width: 200 }} item xs={3}>
          <video style={{ width: '100%', height: '100%' }} loop autoPlay playsInline src='https://storage.googleapis.com/asset-aga/521211162893' />

        </Grid>
        <Grid style={{ background: 'black', height: 200, width: 200 }} item xs={3}>
          <video style={{ width: '100%', height: '100%' }} loop autoPlay playsInline src='https://storage.googleapis.com/asset-aga/521211162893' />

        </Grid>
        <Grid style={{ background: 'black', height: 200, width: 200 }} item xs={3}>
          <video style={{ width: '100%', height: '100%' }} loop autoPlay playsInline src='https://storage.googleapis.com/asset-aga/521211162893' />

        </Grid>
        <Grid style={{ background: 'black', height: 200, width: 200 }} item xs={3}>
          <video style={{ width: '100%', height: '100%' }} loop autoPlay playsInline src='https://storage.googleapis.com/asset-aga/521211162893' />

        </Grid>
        <Grid style={{ background: 'black', height: 200, width: 200 }} item xs={3}>
        <img style={{height:'100%',width:'100%'}} src='https://storage.googleapis.com/asset-aga/621218693420'/>
        </Grid>
      </Grid>
      {/* <iframe allowfullscreen src='https://storage.googleapis.com/asset-aga/521211162893?autoplay=1'/> */}
      {/* {!fetchLoading && comments.map((comment) => (
        <div key={comment.email}>
          <p>
            <span className={classes.name}>{comment.name} </span>
            <span className={classes.email}>{`(${comment.whoAmI})`}</span>
          </p>
          <Typography>{comment.msg}</Typography>
          <hr />
        </div>
      ))} */}
      <Pagination
        count={5}
        variant="outlined"
        defaultPage={1}
        page={commentPage}
        onChange={onChangePage}
      />
    </Container>
  );
}

export default Comment;