import React from 'react';
import { Field } from 'redux-form';

const Workers = ({ name, questionInfo }) => (
  <div className="form-field clearfix input-column clearfix">
    <label>{questionInfo.text}</label>
    <div className="column-1 four-col dollar">
      <div className="form-text">
General Liability aggregriate
      </div>
      <div className="input-field">
        <input type="number" step="any" />
        <span className="dollar-icon">$</span>
      </div>
    </div>
    <div className="column-1 four-col dollar">
      <div className="form-text">general Liability Single Occur</div>
      <div className="input-field">
        <input type="number" step="any" />
        <span className="dollar-icon">$</span>
      </div>
    </div>
    <div className="column-1 four-col dollar">
      <div className="form-text">Workers compensation</div>
      <div className="input-field">
        <input type="number" step="any" />
        <span className="dollar-icon">$</span>
      </div>
    </div>
    <div className="column-1 four-col dollar">
      <div className="form-text">Automobile</div>
      <div className="input-field">
        <input type="number" step="any" />
        <span className="dollar-icon">$</span>
      </div>
    </div>
  </div>
);

export default Workers;
