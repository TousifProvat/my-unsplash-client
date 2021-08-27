import axios from 'axios';

const api = 'https://my-unsplash-tap.herokuapp.com/api/v1';

const axiosIntance = axios.create({
  baseURL: api,
});

export default axiosIntance;
