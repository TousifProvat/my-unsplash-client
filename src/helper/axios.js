import axios from 'axios';

// const api = 'https://my-unsplash-tap.herokuapp.com/api/v1';
const api = 'http://localhost:5000/api/v1';

const axiosIntance = axios.create({
  baseURL: api,
});

export default axiosIntance;
