import axios from 'axios';

const api = axios.create({
  //baseURL: process.env.REACT_APP_URL_API,
  baseURL: `http://localhost:8000`
  //baseURL: `http://192.168.0.186:3004`
});

export default api;