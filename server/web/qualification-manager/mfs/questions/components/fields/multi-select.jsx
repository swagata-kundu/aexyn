import React from 'react';
import { Field } from 'redux-form';
import MS from '../../../../../components/multi-select';

const MultiSelect = ({ name, questionInfo }) => (
  <div className="form-field left-label">
    <div className="label-text">
      <label>{questionInfo.text}</label>
    </div>
    <div className="input-field">
      <Field name={`${name}.value`} component={MS} placeholder={questionInfo.text} />
    </div>
  </div>
);

export default MultiSelect;
