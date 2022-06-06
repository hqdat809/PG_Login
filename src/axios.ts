import axios from 'axios';
// import _ from 'lodash';

const instance = axios.create({
  baseURL: 'http://api.training.div3.pgtest.co',
  // withCredentials: true
});

instance.interceptors.response.use(
  (response) => {
    // Thrown error for request with OK status code
    const { data } = response;
    return response.data;
  },
  (error) => {
    return error.response.data;
  }
);

export default instance;
