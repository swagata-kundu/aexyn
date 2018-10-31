import React from 'react';
import { Field } from 'redux-form';

const Employees = ({ name, questionInfo }) => (
  <div className="form-field input-column two-col-form-field clearfix">
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
        <input type="number" placeholder />
      </div>
    </div>
    <div className="form-field">
      <div className="label-text">
        <label>Field Supervision</label>
      </div>
      <div className="input-field">
        <input type="number" placeholder />
      </div>
    </div>
    <div className="form-field">
      <div className="label-text">
        <label>Tradespeople</label>
      </div>
      <div className="input-field">
        <input type="number" placeholder />
      </div>
    </div>
    <div className="form-field">
      <div className="label-text">
        <label>Clerical / Accounting</label>
      </div>
      <div className="input-field">
        <input type="number" placeholder />
      </div>
    </div>
    <div className="form-field">
      <div className="label-text">
        <label>Other</label>
      </div>
      <div className="input-field">
        <input type="number" placeholder />
      </div>
    </div>
    <div className="form-field">
      <div className="label-text">
        <label>Total</label>
      </div>
      <div className="input-field">
        <input type="number" placeholder />
      </div>
    </div>
  </div>
);

export default Employees;
