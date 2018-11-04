import React from 'react';
import { Field } from 'redux-form';

const Text = ({ name, questionInfo }) => (
  <div className="form-field single-col left-label">
    <div className="label-text">
      <label>{questionInfo.text}</label>
    </div>
    <div className="input-field">
      <Field component="input" required={questionInfo.isRequired} type="text" name={name} placeholder={questionInfo.text} />
    </div>
  </div>
);

export default Text;
