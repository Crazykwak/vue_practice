import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';
axios.interceptors.request.use(
  // eslint-disable-next-line no-shadow
  (config) => {
    const token = `Bearer ${localStorage.getItem('AccessToken')}`;
    console.log(token);
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error),
);

export default axios;
