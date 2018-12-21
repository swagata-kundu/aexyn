import React from 'react';
import { Field } from 'redux-form';

const Workers = ({ name, questionInfo, disabled }) => (
  <div className="form-field clearfix input-column clearfix">
    <label>{questionInfo.text}</label>
    <div className="column-1 four-col dollar">
      <div className="form-text">
General Liability aggregriate
      </div>
      <div className="input-field">
        <Field disabled={disabled} component="input" type="number" name={`${name}.gl`} />
        <span className="dollar-icon">$</span>
      </div>
    </div>
    <div className="column-1 four-col dollar">
      <div className="form-text">General Liability Single Occur</div>
      <div className="input-field">
        <Field disabled={disabled} component="input" type="number" name={`${name}.gls`} />
        <span className="dollar-icon">$</span>
      </div>
    </div>
    <div className="column-1 four-col dollar">
      <div className="form-text">Workers compensation</div>
      <div className="input-field">
        <Field disabled={disabled} component="input" type="number" name={`${name}.wc`} />
        <span className="dollar-icon">$</span>
      </div>
    </div>
    <div className="column-1 four-col dollar">
      <div className="form-text">Automobile</div>
      <div className="input-field">
        <Field disabled={disabled} component="input" type="number" name={`${name}.auto`} />
        <span className="dollar-icon">$</span>
      </div>
    </div>
  </div>
);

export default Workers;
