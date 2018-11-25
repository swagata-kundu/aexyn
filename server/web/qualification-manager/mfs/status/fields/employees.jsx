import React from 'react';
import { Field } from 'redux-form';

const Employees = ({ name, questionInfo }) => (
  <div className="form-field clearfix input-column two-col-form-field clearfix">
    <label>{questionInfo.text}</label>
    <div className="form-text">
      <div className="department">Department</div>
      <div className="employee-number">Number of Employees</div>
    </div>
    <div className="form-field">
      <div className="label-text">
        <label>Estimating Department</label>
      </div>
      <div className="input-field">
        <Field component="input" type="number" name={`${name}.ed`} />
      </div>
    </div>
    <div className="form-field">
      <div className="label-text">
        <label>Field Supervision</label>
      </div>
      <div className="input-field">
        <Field component="input" type="number" name={`${name}.fs`} />
      </div>
    </div>
    <div className="form-field">
      <div className="label-text">
        <label>Trades People</label>
      </div>
      <div className="input-field">
        <Field component="input" type="number" name={`${name}.tp`} />
      </div>
    </div>
    <div className="form-field">
      <div className="label-text">
        <label>Clerical / Accounting</label>
      </div>
      <div className="input-field">
        <Field component="input" type="number" name={`${name}.ca`} />
      </div>
    </div>
    <div className="form-field">
      <div className="label-text">
        <label>Other</label>
      </div>
      <div className="input-field">
        <Field component="input" type="number" name={`${name}.ot`} />
      </div>
    </div>
    <div className="form-field">
      <div className="label-text">
        <label>Total</label>
      </div>
      <div className="input-field">
        <Field component="input" type="number" name={`${name}.total`} />
      </div>
    </div>
  </div>
);

export default Employees;
