import axios from 'axios';
import { memoizedRefreshToken } from './memRefreshToken';

axios.interceptors.request.use(
  async (config) => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth?.token) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer1 ${auth?.token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;
      console.log('memoized')
      const result = await memoizedRefreshToken();
      console.log('memoized over',result)
      localStorage.setItem('auth',result)

      return axios(config);
    }
    return Promise.reject(error);
  }
);

export const axiosPrivate = axios;
