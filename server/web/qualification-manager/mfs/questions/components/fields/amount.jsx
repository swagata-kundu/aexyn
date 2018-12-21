import React from 'react';
import { Field } from 'redux-form';

const Amount = ({ name, questionInfo, disabled }) => (
  <div className="form-field input-column two-col-form-field clearfix">
    <div className="form-field dollar">
      <div className="label-text">
        <label>{questionInfo.text}</label>
      </div>
      <div className="input-field">
        <Field disabled={disabled} component="input" required={questionInfo.isRequired} type="number" name={`${name}.value`} placeholder={questionInfo.text} />
        <span className="dollar-icon">$</span>
      </div>
    </div>
  </div>
);

export default Amount;
