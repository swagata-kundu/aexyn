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
