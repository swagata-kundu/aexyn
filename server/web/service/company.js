import { stringify } from 'querystring';
import { axios } from '../util';
import { COMPANY, GET_OFFICES } from '../endpoint';

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

export const get_company_info_service = company_id => axios.get(`${COMPANY}${company_id}`);

export const update_company_info_service = ({ company_id, data }) => axios.put(`${COMPANY}${company_id}`, data);


export const get_office_info_service = office_id => axios.get(`${GET_OFFICES}/${office_id}`);

export const update_office_info_service = ({ office_id, data }) => axios.put(`${GET_OFFICES}/${office_id}`, data);
