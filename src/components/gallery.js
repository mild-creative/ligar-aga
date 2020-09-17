import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Grid
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

// import GuestForm from './input-form';
import GuestForm from './guest-form';
import { getGallery, postGallery } from '../http-request';
import useStyles from '../styles/gallery';

// import Groom from '../assets/groom.png';

function Gallery() {
  const classes = useStyles();
  const [gallery, setGallery] = useState([]);
  const [count, setCount] = useState(1);
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
      const galleryContents = await getGallery(showPage);
      console.log(galleryContents)
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
        upload={true}
      />
      <Grid container className={classes.galleryContainer}>
        {gallery.map(content => (
          <Grid item xs={6} md={4} lg={3}>
            {(content.type === 'image/jpeg' || content.type === 'image/png') && (
              <a href={content.url} target="_blank" rel="noopener noreferrer">
                <img src={content.url} alt={content.url} width="100%" />
              </a>
            )}
            {content.type === 'video/mp4' && (
              <video style={{ width: '100%', height: '100%' }} muted src={content.url} allowFullScreen controls />
            )}
          </Grid>
        ))}
      </Grid>
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