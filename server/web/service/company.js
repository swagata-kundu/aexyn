import { stringify } from 'querystring';
import { axios } from '../util';
import { COMPANY } from '../endpoint';

export const getCompany = async (query) => {
  const url = `${COMPANY}/search?${stringify(query)}`;
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
    return [];
  }
};
