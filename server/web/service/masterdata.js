import { axios } from '../util';
import { MASTER_DATE } from '../endpoint';

export const getMasterData = async (query) => {
    const url = `${MASTER_DATE}`;
    try {
      const result = await axios.get(url);
      return result.data;
    } catch (error) {
      return {};
    }
  };