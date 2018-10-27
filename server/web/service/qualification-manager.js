import { axios } from '../util';
import { QUESTION } from '../endpoint';

export const getQuestions= async ()=>{
    const url = `${QUESTION}`;
    try {
      const result = await axios.get(url);
      return result.data;
    } catch (error) {
      return {};
    }
}