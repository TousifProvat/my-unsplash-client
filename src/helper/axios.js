import axios from 'axios';

const api = 'http://localhost:5000/api/v1';

const axiosIntance = axios.create({
  baseURL: api,
  // headers: {
  //   Authorization: token ? `Bearer ${token}` : '',
  // },
});

export default axiosIntance;
