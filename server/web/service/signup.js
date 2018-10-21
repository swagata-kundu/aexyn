import { axios } from '../util';
import { USER } from '../endpoint';

const makeParams = ({
  account, company, office, signup,
}) => {
  const { company_id, office_id } = account;
  const {
    first_name, last_name, email, password,
  } = signup.values;

  let params = {
    user_info: {
      first_name, last_name, email, password,
    },
  };

  if (office_id && company_id) {
    params = {
      ...params, office_id, company_id,
    };
    return params;
  }
  if (!office_id && !company_id && company) {
    const { values } = company;
    params = { ...params, company: { ...values } };
    return params;
  }
  if (company_id && office) {
    const { values } = office;
    params = { ...params, office: { ...values }, company_id };
    return params;
  }
};


const signUp = (params) => {
  const url = `${USER}`;
  const postData = makeParams(params);
  return axios.post(url, postData);
};


export default signUp;
