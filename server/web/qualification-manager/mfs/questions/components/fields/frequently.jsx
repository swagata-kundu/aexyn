import React from 'react';
import { Field } from 'redux-form';

const Frequently = ({ name, questionInfo, disabled }) => (
  <div className="form-field clearfix two-col-right-field clearfix">
    <div className="label-text">
      <label>{questionInfo.text}</label>
    </div>
    <div className="input-field">
      <Field
        component="select"
        required={questionInfo.isRequired}
        type="input"
        name={`${name}.value`}
        placeholder={questionInfo.text}
        disabled={disabled}
      >
        <option value="Annual">Annual</option>
        <option value="Monthly">Monthly</option>
        <option value="Weekly">Weekly</option>
        <option value="Daily">Daily</option>
        <option value="As Needed">As Needed</option>
      </Field>
    </div>
  </div>
);

export default Frequently;
