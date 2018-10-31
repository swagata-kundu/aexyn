import React from 'react';
import { Field } from 'redux-form';

const Frequently = ({ name, questionInfo }) => (
  <div className="form-field single-col left-label">
    <div className="label-text">
      <label>{questionInfo.text}</label>
    </div>
    <div className="input-field">
      <Field
        component="select"
        required={questionInfo.isRequired}
        type="input"
        name={name}
        placeholder={questionInfo.text}
      >
        <option>Annual</option>
        <option>Monthly</option>
        <option>Weekly</option>
        <option>Daily</option>
        <option>As Needed</option>
      </Field>
    </div>
  </div>
);

export default Frequently;
