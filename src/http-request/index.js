import api from './base-url';

export const getComments = (page = 1) => {
  return api().get('/comment', { params: { page }})
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return err;
    })
}

export const postComments = (data) => {
  console.log(data, 'data')
  return api().post('/comment', data)
    .then(({ data }) => {
      console.log(data, 'posted')
      return data;
    })
    .catch((err) => {
      console.log(err, 'err')
      return err;
    })
}