import axios from 'axios';

const token = 'IaUqWMozCH2E1kJssZ5GkjYw5FIWsBTCMunG6Isp3x7sROSTwJfflM458mQuOEYWfydEI3UrRWRYJRpDBoz5uATmmKuzGSgebAvd';

const api = axios.create({
  baseURL: 'https://dev2-api.kuppi.com.br'
});

api.interceptors.request.use(async config => {
  config.headers['auth-token'] = token;
  return config;
});

export default api;
