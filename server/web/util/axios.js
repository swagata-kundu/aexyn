import Axios from 'axios';

const baseURL = '/';

export const axios = Axios.create({
  baseURL,
});

