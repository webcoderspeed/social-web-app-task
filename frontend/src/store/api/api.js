import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.REACT_APP_BASE_URL ??
    'https://social-web-app-backend-demo.herokuapp.com/api/v1/',
});

export default api;
