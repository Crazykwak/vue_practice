import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';
axios.interceptors.request.use(
  // eslint-disable-next-line no-shadow
  (config) => {
    const token = `Bearer ${localStorage.getItem('AccessToken')}`;
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error),
);

axios.interceptors.response.use(
  response => response,
  async (error) => {
    const responseData = error.response.data;
    if (responseData.body === '토큰 시간 만료' && responseData.statusCodeValue === 401 && responseData.statusCode === 'UNAUTHORIZED') {
      const originRequest = error.config;
      const token = `Bearer ${localStorage.getItem('RefreshToken')}`;

      const res = await axios.post(
        '/refresh_authorization',
        { refreshToken: token },
      );
      const accessToken = res.headers.getAuthorization().replace('Bearer ', '');
      localStorage.setItem('AccessToken', accessToken);
      originRequest.headers.Authorization = `Bearer ${accessToken}`;
      return axios(originRequest);
    }
    return Promise.reject(error);
  },
);

export default axios;
