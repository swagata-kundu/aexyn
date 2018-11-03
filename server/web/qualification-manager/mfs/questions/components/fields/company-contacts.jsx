import React from 'react';
import { Field } from 'redux-form';

const CompanyContacts = ({ name, questionInfo }) => (
  <div className="form-field list-of-company input-column clearfix">
    <label>{questionInfo.text}</label>
    <div className="four-col-form-field clearfix">
      <div className="column-1">
        <div className="form-text">Company Namer</div>
        <input type="text" placeholder="Aexyn" />
      </div>
      <div className="column-2">
        <div className="form-text">Address</div>
        <input type="text" placeholder="Panipat" />
      </div>
      <div className="column-3">
        <div className="form-text">Phone</div>
        <input type="Phone" placeholder={9876543210} />
      </div>
      <div className="column-4">
        <div className="form-text">Email</div>
        <input type="Email" placeholder="abc@aexyn.com" />
      </div>
      <span className="remove-row-value">
        <i className="fa fa-times" aria-hidden="true" />
      </span>
    </div>
    <div className="additional-input">
      <i className="fa fa-plus-circle" aria-hidden="true" />
      {' '}
        Add Contact
    </div>
  </div>
);

export default CompanyContacts;
