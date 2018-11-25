import React from 'react';
import { Field } from 'redux-form';

const normalizeBoolean = (value) => {
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  return value;
};

const YesNo = ({ name, questionInfo }) => (
  <div className="form-field">
    <div className="radio-label">
      <label>{questionInfo.text}</label>
      <div className="radio-check">
        <Field component="input" type="radio" name={`${name}.yn`} normalize={normalizeBoolean} value={false} />
    No
      </div>
      <div className="radio-check">
        <Field component="input" type="radio" name={`${name}.yn`} normalize={normalizeBoolean} value />
Yes
      </div>
    </div>
  </div>
);

export default YesNo;
