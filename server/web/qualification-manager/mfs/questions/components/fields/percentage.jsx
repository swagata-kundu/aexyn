import React from 'react';
import { Field } from 'redux-form';

const Percentage = ({ name, questionInfo }) => (
  <div className="form-field percentage">
    <div className="label-text">
      <label>{questionInfo.text}</label>
    </div>
    <div className="input-field">
      <input type="number" step="any" />
      <span className="percent-icon">%</span>
    </div>
  </div>
);

export default Percentage;
