import axios from 'axios';

const api = axios.create({
  baseURL: `https://insta-clone-hermano.herokuapp.com/api`
});

export default api;