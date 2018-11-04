import _ from 'lodash';
import { axios } from '../util';
import {
  QUESTION, SEARCH_COMPANIES, GET_COMPANIES, FILTER_COMPANIES,
} from '../endpoint';

import {
  SEARCH_COMPANY,
} from '../qualification-manager/state/type';
import store from '../qualification-manager/state/store';

let tagsArray = [];
let locationsArray = [];
const statusArray = [];
let workPerformedArray = [];
const laboursArray = [];
let search;

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

export const getCompany = async (companyId) => {
  const id = String(companyId);
  const url = `${GET_COMPANIES + id}`;

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

export const selectedFilter = async (data, field) => {
  let findLabour;
  let findStatus;

  if (field === 'location') {
    if (data.length === 0) {
      locationsArray = [];
    } else {
      data.map((value) => {
        locationsArray.push(value.label);
      });
    }
  }
  if (field === 'workPerformance') {
    if (data.length === 0) {
      workPerformedArray = [];
    } else {
      data.map((value) => {
        workPerformedArray.push(value.label);
      });
    }
  }
  if (field === 'tags') {
    if (data.length === 0) {
      tagsArray = [];
    } else {
      data.map((value) => {
        tagsArray.push(value.label);
      });
    }
  }
  if (field === 'status') {
    const dataValue = data + 1;
    if (statusArray.length > 0) {
      findStatus = statusArray.indexOf(String(dataValue));
      if (findStatus !== -1) {
        statusArray.splice(findStatus, 1);
      } else {
        statusArray.push(String(dataValue));
      }
    } else {
      statusArray.push(String(dataValue));
    }
  }
  if (field === 'labour') {
    const dataValue = data + 1;
    if (laboursArray.length > 0) {
      findLabour = laboursArray.indexOf(String(dataValue));
      if (findLabour !== -1) {
        laboursArray.splice(findLabour, 1);
      } else {
        laboursArray.push(String(dataValue));
      }
    } else {
      laboursArray.push(String(dataValue));
    }
  }
  if (field === 'string') {
    if (data.length === 0) {
      search = undefined;
    } else {
      search = data;
    }
  }
  const body = {
    tags: tagsArray,
    locations: locationsArray,
    status: statusArray,
    workPerformed: workPerformedArray,
    labours: laboursArray,
    searchText: search,
  };

  const url = `${SEARCH_COMPANIES}`;

  try {
    const result = await axios.post(url, body);
    store.dispatch({
      type: SEARCH_COMPANY,
      payload: result.data,
    });
  } catch (error) {
    return {};
  }
};
