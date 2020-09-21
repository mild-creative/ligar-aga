import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Snackbar
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import MuiAlert from '@material-ui/lab/Alert';

// import GuestForm from './input-form';
import GuestForm from './guest-form';
import { getGallery, postGallery } from '../http-request';
import useStyles from '../styles/gallery';
import VideoThumb from '../assets/video-icon.png';
import { detect } from 'detect-browser';

// import Groom from '../assets/groom.png';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Gallery() {
  const classes = useStyles();
  const [gallery, setGallery] = useState([]);
  const [count, setCount] = useState(1);
  const [formData, setFormData] = useState('');
  const [file_, setFile] = useState('');
  const [loadingSubmit, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [alertErrOpen, setErrOpen] = useState(false);
  const [msgAfterSubmit, setMsg] = useState('');
  const [commentPage, setPage] = useState(1);
  const [guestFile, setGuestFile] = useState('');
  const [nameUpload, setNameUpload] = useState('');

  useEffect(() => {
    fetchGallery();
  }, [])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrOpen(false);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      formData.append('name', nameUpload)
      const fileSize = file_ && parseInt(file_.size, 10);
      if (fileSize > 300000) {
        throw new Error();
        // return;
      }
      console.log('lolos')
      await postGallery(formData);
    } catch (err) {
      setErrOpen(true);
      setMsg('File is too large, please try another file');
      setLoading(false);
    } finally {
      resetField();
      setAlertOpen(true);
      fetchGallery();
    }
  }

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'name':
        setNameUpload(e.target.value)
        break;
      default:
        let formData = new FormData()
        formData.append('image', e.target.files[0])
        setFile(e.target.files[0]);
        setFormData(formData);
        setGuestFile(e.target.value)
        break;
    }
  }

  const resetField = () => {
    setGuestFile('');
    setFormData('')
    setNameUpload('')
  }

  const fetchGallery = async (showPage) => {
    setFetchLoading(true);
    try {
      const galleryContents = await getGallery(showPage);
      setGallery(galleryContents?.data?.gallery);
      setCount(Math.ceil(galleryContents?.data?.length / 10))
    } finally {
      setFetchLoading(false);
    }
  }

  const onChangePage = (_, page) => {
    setPage(page);
    fetchGallery(page);
  }

  return (
    <Container className={classes.container}>
      <Typography className={classes.guestBook}>Guest Gallery</Typography>
      <GuestForm
        handleSubmit={handleSubmit}
        loadingSubmit={loadingSubmit}
        setAlertOpen={setAlertOpen}
        alertOpen={alertOpen}
        handleChange={handleChange}
        name={guestFile}
        nameUpload={nameUpload}
        upload={true}
      />
      <Grid container className={classes.galleryContainer} spacing={2}>
        {gallery.map(content => (
          <Grid item xs={6} md={4} lg={3}
            className={classes.eachGallery}
          >
            {(content.type === 'image/jpeg' || content.type === 'image/png') && (
              <a href={content.url} target="_blank" rel="noopener noreferrer">
                <img src={content.url} alt={content.url} className={classes.galleryImg} />
              </a>
            )}
            {content.type === 'video/mp4' && detect().os == 'Android OS'
              ? <video poster={VideoThumb} style={{ width: '100%' }} muted src={content.url} playsInline controls className={classes.galleryImg} />
              : content.type === 'video/mp4'
                ? <video preload='metadata' style={{ width: '100%' }} muted src={content.url + '#t=0.1'} playsInline controls className={classes.galleryImg} />
                : null
            }
            <Typography align="center">{`@${content?.name ?? '-'}`}</Typography>
          </Grid>
        ))}
      </Grid>
      <Snackbar open={alertErrOpen} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {!!msgAfterSubmit ? msgAfterSubmit : 'Something went wrong'}
        </Alert>
      </Snackbar>
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

export default Gallery;