import React from 'react';
import { Field } from 'redux-form';

const File = ({ name, questionInfo }) => (
  <div className="form-field clearfix two-col-equal-field clearfix">
    <div className="label-text">
      <label>{questionInfo.text}</label>
    </div>
    <div className="input-field">
      <input type="file" />
    </div>
  </div>
);

export default File;
