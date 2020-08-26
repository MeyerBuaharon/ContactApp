import axios from 'axios';

const api = axios.create({
  baseURL: 'https://randomuser.me/api',
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export const getRandomUsers = () =>
  api
    .get('/')
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
