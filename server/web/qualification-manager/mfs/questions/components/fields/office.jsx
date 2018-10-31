import React from 'react';
import { Field } from 'redux-form';

const Office = ({ name, questionInfo }) => (
  <div>
    <div className="form-field input-column three-form-field clearfix">
      <label>Office Location</label>
      <div className="column-1">
        <div className="form-text">Office Name</div>
        <input type="text" name="companyname" placeholder="Company Name" />
      </div>
      <div className="column-2">
        <div className="form-text">Address</div>
        <input type="text" name="address" placeholder="Address" />
      </div>
      <div className="column-3">
        <div className="form-text">phone</div>
        <input type="tel" name="telephone" placeholder="Phone Number" />
      </div>
    </div>
    <div className="additional-input">
      <i className="fa fa-plus-circle" aria-hidden="true" /> 
      add a location
    </div>
  </div>
);

export default Office;
