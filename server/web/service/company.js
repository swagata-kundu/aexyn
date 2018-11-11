import { stringify } from 'querystring';
import { axios } from '../util';
import { COMPANY } from '../endpoint';

export const search_company_service = async (query) => {
  const url = `${COMPANY}/search?${stringify(query)}`;
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
    return [];
  }
};

export const get_all_company_service = () => axios.get(`${COMPANY}`);
