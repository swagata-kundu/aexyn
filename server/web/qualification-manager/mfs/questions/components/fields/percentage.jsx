import React from 'react';
import { Field } from 'redux-form';

const Percentage = ({ name, questionInfo, disabled }) => (
  <div className="form-field percentage">
    <div className="label-text">
      <label>{questionInfo.text}</label>
    </div>
    <div className="input-field">
      <Field disabled={disabled} component="input" required={questionInfo.isRequired} type="number" name={`${name}.value`} placeholder={questionInfo.text} />
      <span className="percent-icon">%</span>
    </div>
  </div>
);

export default Percentage;
