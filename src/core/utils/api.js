import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(
  config => {
    config.baseURL = 'http://localhost:3000';
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      config.headers.Authorization = '';
    }
    return config;
  },
  error => Promise.reject(error)
);