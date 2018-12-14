import React from 'react';
import { Field } from 'redux-form';
import FI from '../../../../../components/file-input';


const File = ({ name, questionInfo }) => (
  <div className="form-field clearfix two-col-equal-field clearfix">
    <div className="label-text">
      <label>{questionInfo.text}</label>
    </div>
    <div className="input-field">
      <Field component={FI} name={`${name}.value`} />
    </div>
  </div>
);

export default File;
