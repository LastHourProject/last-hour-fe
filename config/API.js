/* eslint-disable no-undef */
import axios from 'axios';

import { API_URL, LOCALSTORAGE_AUTH_KEY } from '.';

const API = () => {
  const defaultOptions = {
    baseURL: API_URL,
  };

  let instance = axios.create(defaultOptions);
  // API Request Interceptores
  instance.interceptors.request.use(
    (apiConfig) => {
      const authToken = localStorage?.getItem(LOCALSTORAGE_AUTH_KEY);

      if (authToken) {
        apiConfig.headers['Authorization'] = `Bearer ${authToken}`;
      }

      return apiConfig;
    },
    (error) => Promise.reject(error),
  );

  return instance;
};

export default API();
