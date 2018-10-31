import React from 'react';
import { Field } from 'redux-form';

const Amount = ({ name, questionInfo }) => (
  <div className="form-field input-column two-col-form-field clearfix">
    <div className="form-field dollar">
      <div className="label-text">
        <label>{questionInfo.text}</label>
      </div>
      <div className="input-field">
        <input type="number" step="any" />
        <span className="dollar-icon">$</span>
      </div>
    </div>
  </div>
);

export default Amount;
