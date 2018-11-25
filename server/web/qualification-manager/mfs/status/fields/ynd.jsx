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

const YesNoDescribe = ({ name, questionInfo }) => (
  <div className="form-field">
    <div className="radio-label">
      <label>
        {questionInfo.text}
      </label>
      <div className="radio-check">
        <Field component="input" type="radio" name={`${name}.yn`} normalize={normalizeBoolean} value={false} />
No
      </div>
      <div className="radio-check">
        <Field component="input" type="radio" name={`${name}.yn`} normalize={normalizeBoolean} value />
Yes
      </div>
    </div>
    <div className="left-label">
      <div className="label-text">
        <label>Please Describe</label>
      </div>
      <div className="input-field">
        <Field component="input" type="text" name={`${name}.explain`} placeholder="Description" />
      </div>
      <div className="upload-file-input">
        <i className="fa fa-plus-circle" aria-hidden="true" />
upload files
      </div>
    </div>
  </div>
);

export default YesNoDescribe;