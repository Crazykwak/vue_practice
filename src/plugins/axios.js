import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_URI;
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
    if (responseData.body === '토큰 시간 만료') {
      const originRequest = error.config;
      const token = `Bearer ${localStorage.getItem('RefreshToken')}`;
      let flag = false;

      const res = await axios.post(
        '/refresh_authorization',
        { refreshToken: token },
      ).catch((refreshError) => {
        if (refreshError.response.data === '토큰 시간 만료') {
          flag = true;
        }
      });
      if (flag) {
        localStorage.removeItem('AccessToken');
        localStorage.removeItem('RefreshToken');
        location.reload();
        return Promise.reject(error);
      }
      const accessToken = res.headers.getAuthorization().replace('Bearer ', '');
      localStorage.setItem('AccessToken', accessToken);
      originRequest.headers.Authorization = `Bearer ${accessToken}`;
      return axios(originRequest);
    }
    return Promise.reject(error);
  },
);

export default axios;
