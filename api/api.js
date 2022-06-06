import axios from "axios";

const api = axios.create({
  baseURL: location.hostname === 'localhost' ? process.env.VUE_APP_API_END_POINT : '/',
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(
  config => {
    const _token = localStorage.getItem('_token')
    if (_token !== undefined) {
      config.headers['Authorization'] = `${_token}`;
    }
    return config
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(response => {
  if (response && response.data) {
    return response.data;
  }
  return response;
}, error => {
  throw error;
});

export default api;
