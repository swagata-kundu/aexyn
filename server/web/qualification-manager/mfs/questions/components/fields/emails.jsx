import React from 'react';
import { Field } from 'redux-form';

const Emails = ({ name, questionInfo }) => (
  <div className="form-field input-column three-form-field clearfix">
    <label>{questionInfo.text}</label>
    <div className="column-1">
      <div className="form-text">Name</div>
      <input type="text" name="companyname" placeholder="Name" />
    </div>
    <div className="column-2">
      <div className="form-text">Email</div>
      <input type="Email" name="address" placeholder="Email" />
    </div>
    <div className="column-3">
      <div className="form-text">phone</div>
      <input type="telephone" name="telephone" placeholder="Phone Number" />
      <span className="remove-row-value">
        <i className="fa fa-times" aria-hidden="true" />
      </span>
    </div>
    <div className="additional-input">
      <i className="fa fa-plus-circle" aria-hidden="true" /> Add a Contact
    </div>
  </div>
);

export default Emails;
