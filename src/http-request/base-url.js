import axios from 'axios';

const api = () => {
  return axios.create({
    // baseURL: `https://linggar-aga-dot-graceful-envoy-279714.et.r.appspot.com`
    baseURL:'http://localhost:8080'
  });
};

export default api;