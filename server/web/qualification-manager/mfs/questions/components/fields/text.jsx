import React from 'react';
import { Field } from 'redux-form';

const text = () => (
  <div className="form-field single-col left-label">
    <div className="label-text">
      <label>Company Name</label>
    </div>
    <div className="input-field">
      <Field component="input" type="text" name="companyname" placeholder="Company Name" />
    </div>
  </div>
);

export default text;
