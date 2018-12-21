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

const IfNoExplain = ({ name, questionInfo, disabled }) => (
  <div className="form-field clearfix">
    <div className="radio-label">
      <label>{questionInfo.text}</label>
      <div className="radio-check">
        <Field disabled={disabled} component="input" type="radio" name={`${name}.yn`} normalize={normalizeBoolean} value={false} />
        No
      </div>
      <div className="radio-check">
        <Field disabled={disabled} component="input" type="radio" name={`${name}.yn`} normalize={normalizeBoolean} value />
        Yes
      </div>
    </div>
    <div className="label-text">
      <label>If No, Please Explain</label>
    </div>
    <div className="input-field">
      <Field disabled={disabled} component="input" name={`${name}.explain`} type="text" placeholder="Explain" />
    </div>
  </div>
);

export default IfNoExplain;
