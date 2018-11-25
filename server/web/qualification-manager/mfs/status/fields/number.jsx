import React from 'react';
import { Field } from 'redux-form';

const Number = ({ name, questionInfo }) => (
  <div className="form-field single-col left-label">
    <div className="label-text">
      <label>{questionInfo.text}</label>
    </div>
    <div className="input-field">
      <Field component="input" required={questionInfo.isRequired} type="number" name={`${name}.value`} placeholder={questionInfo.text} />
    </div>
  </div>
);

export default Number;
