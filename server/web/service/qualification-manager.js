import _ from 'lodash';
import { axios } from '../util';
import {
  QUESTION, SEARCH_COMPANIES, GET_COMPANIES, FILTER_COMPANIES,
} from '../endpoint';

export const getQuestions = async () => {
  const url = `${QUESTION}`;
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return {};
  }
};


export const saveQuestions = (data) => {
  const url = `${QUESTION}`;
  const filteredData = _.mapValues(data, (value) => {
    if (!_.isArray(value)) {
      return value;
    }
    return value.filter(v => !_.isEmpty(v)).map((v) => {
      const {
        question_type, text, isDefault = false, isRequired = false, isIncluded = false, isDisabled = false,
      } = v;
      return ({
        text, isDefault, isRequired, isIncluded, isDisabled, question_type: parseInt(question_type, 10),
      });
    });
  });
  const { questionSet, opening_statement = '' } = filteredData;
  delete filteredData.questionSet;
  delete filteredData.opening_statement;
  const params = {
    questions: filteredData,
    questionSet,
    opening_statement,
  };
  return axios.post(url, params);
};

export const searchCompanyList = async (data) => {
  const url = `${SEARCH_COMPANIES}`;
  const body = {
    searchText: data,
  };
  try {
    const result = await axios.post(url, body);
    return result.data;
  } catch (error) {
    return {};
  }
};

export const getCompany = async () => {
  const url = `${GET_COMPANIES}`;

  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return {};
  }
};

export const filterCompany = async () => {
  const url = `${FILTER_COMPANIES}`;

  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return {};
  }
};
