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
const IfNoExplain = ({ name, questionInfo }) => (
  <div className="form-field clearfix">
    <div className="radio-label">
      <label>{questionInfo.text}</label>
      <div className="radio-check">
        <Field component="input" type="radio" name={`${name}.yn`} value={false} normalize={normalizeBoolean} />
        {' '}
        No
      </div>
      <div className="radio-check">
        <Field component="input" type="radio" name={`${name}.yn`} value normalize={normalizeBoolean} />
        {' '}
        Yes
      </div>
    </div>

    <div className="label-text">
      <label>If Yes, Please Explain</label>
    </div>
    <div className="input-field">
      <Field component="input" type="text" name={`${name}.explain`} placeholder="Explain" />
    </div>
  </div>
);

export default IfNoExplain;
