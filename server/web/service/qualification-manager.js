import _ from 'lodash';
import { stringify } from 'querystring';
import { axios } from '../util';
import {
  QUESTION, SEARCH_COMPANIES, GET_COMPANIES, FILTER_COMPANIES, GET_INVITE_LINK, SEND_INVITATION_LINK
} from '../endpoint';

import {
  SEARCH_COMPANY,
} from '../qualification-manager/state/type';
import store from '../qualification-manager/state/store';

const statusArray = [];
const laboursArray = [];
let locationsArray = [];
let tagsArray = [];
let workPerformedArray = [];

let search;

export const getQuestions = async (query = {}) => {
  const url = `${QUESTION}?${stringify(query)}`;
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
    } else if (locationsArray.length > 0) {
      data.map((value) => {
        findStatus = statusArray.indexOf(value.label);
      });
      if (findStatus !== -1) {
        statusArray.splice(findStatus, 1);
      } else {
        locationsArray = [];
        data.map((value) => {
          locationsArray.push(value.label);
        });
      }
    } else {
      data.map((value) => {
        locationsArray.push(value.label);
      });
    }
  }
  if (field === 'workPerformance') {
    if (data.length === 0) {
      workPerformedArray = [];
    } else if (workPerformedArray.length > 0) {
      data.map((value) => {
        findStatus = statusArray.indexOf(value.value);
      });
      if (findStatus !== -1) {
        statusArray.splice(findStatus, 1);
      } else {
        workPerformedArray = [];
        data.map((value) => {
          workPerformedArray.push(value.value);
        });
      }
    } else {
      data.map((value) => {
        workPerformedArray.push(value.value);
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
    if (statusArray.length > 0) {
      findStatus = statusArray.indexOf(data);
      if (findStatus !== -1) {
        statusArray.splice(findStatus, 1);
      } else {
        statusArray.push(data);
      }
    } else {
      statusArray.push(data);
    }
  }
  if (field === 'labour') {
    if (laboursArray.length > 0) {
      findLabour = laboursArray.indexOf(data);
      if (findLabour !== -1) {
        laboursArray.splice(findLabour, 1);
      } else {
        laboursArray.push(data);
      }
    } else {
      laboursArray.push(data);
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

export const getLink = async () => {
  const url = `${GET_INVITE_LINK}`;

  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return {};
  }
};

export const invitationEmail = async (data) => {
  const url = `${SEND_INVITATION_LINK}`;
  const body = {
    emails: data,
  };
  try {
    const result = await axios.post(url, body);
    return result.data;
  } catch (error) {
    return {};
  }
};
