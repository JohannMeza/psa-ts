/* eslint-disable @typescript-eslint/no-throw-literal */
import axios, { AxiosError } from 'axios';
import { TOKEN_AUTH, URL_BASE } from '../constant';

export const axiosConfig = axios.create({
  baseURL: URL_BASE,
  headers: { 'Content-Type': 'application/json' },
});

axiosConfig.interceptors.request.use((config) => {
  // const timestamp = Date.now();
  // const parse : AxiosRequest = { body: config.data, timestamp };
  // const stringify = JSON.stringify(parse);
  const bearer = sessionStorage.getItem(TOKEN_AUTH) || '';
  config.headers.Authorization = bearer;
  config.data = { ...config.data };
  return config;
});

axiosConfig.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error?.response?.data) throw error.response.data;

    if (error.response) {
      throw {
        data: error.response.data,
        message: error.response.data,
        status: error.response.status,
        statusText: error.response.statusText,
        headers: error.response.headers,
      };
    } else if (error.request) {
      throw {
        request: error.request,
      };
    } else {
      throw error;
    }
  },
);

export const axiosService = axiosConfig;
