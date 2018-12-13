import { stringify } from 'querystring';
import { axios } from '../util';
import { USER } from '../endpoint';

export const checkEmail = async (email) => {
  const url = `${USER}/check-email/${email}`;
  try {
    const { data } = await axios.get(url);
    return data.exists;
  } catch (error) {
    return { exists: true };
  }
};

export const login = (params) => {
  const url = `${USER}/login`;
  return axios.post(url, params);
};

export const resetPasswordLink = (params) => {
  const url = `${USER}/reset-password-link`;
  return axios.post(url, params);
};

export const resetPassword = (params) => {
  const url = `${USER}/reset-password`;
  return axios.post(url, params);
};
