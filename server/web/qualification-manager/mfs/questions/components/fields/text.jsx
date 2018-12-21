import React from 'react';
import { Field } from 'redux-form';

const Text = ({ name, questionInfo, disabled }) => (
  <div className="form-field single-col left-label">
    <div className="label-text">
      <label>{questionInfo.text}</label>
    </div>
    <div className="input-field">
      <Field disabled={disabled} component="input" required={questionInfo.isRequired} type="text" name={`${name}.value`} placeholder={questionInfo.text} />
    </div>
  </div>
);

export default Text;
