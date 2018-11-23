import { axios } from '../util';
import { MASTER_DATE, COMPANY } from '../endpoint';

export const masterdata_service = async (query) => {
  const url = `${MASTER_DATE}`;
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return {};
  }
};

export const load_all_employees_service = async (company_id) => {
  const url = `${COMPANY}${company_id}/employees`;
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return [];
  }
};
