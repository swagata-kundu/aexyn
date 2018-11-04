import React from 'react';
import { Field } from 'redux-form';

const YesNoDescribe = ({ name, questionInfo }) => (
  <div className="form-field">
    <div className="radio-label">
      <label>
        {questionInfo.text}
      </label>
      <div className="radio-check">
        <input type="radio" name="no" defaultValue="No" />
No
      </div>
      <div className="radio-check">
        <input type="radio" name="yes" defaultValue="Yes" />
Yes
      </div>
    </div>
    <div className="left-label">
      <div className="label-text">
        <label>Please Describe</label>
      </div>
      <div className="input-field">
        <input type="text" name="workperformed" placeholder />
      </div>
      <div className="upload-file-input">
        <i className="fa fa-plus-circle" aria-hidden="true" />
        {' '}
upload files
      </div>
    </div>
  </div>
);

export default YesNoDescribe;
