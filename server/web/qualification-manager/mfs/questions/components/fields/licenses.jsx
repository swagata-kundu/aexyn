import React from 'react';
import { Field } from 'redux-form';

const License = ({ name, questionInfo }) => (
  <div className="form-field input-column clearfix">
    <label>{questionInfo.text}</label>
    <div className="four-col-form-field clearfix">
      <div className="column-1">
        <div className="form-text">License Number</div>
        <input type="text" placeholder />
      </div>
      <div className="column-2">
        <div className="form-text">Classification</div>
        <input type="text" placeholder />
      </div>
      <div className="column-3">
        <div className="form-text">State</div>
        <input type="text" placeholder />
      </div>
      <div className="column-4">
        <div className="form-text">Issuing Agency</div>
        <input type="text" placeholder />
      </div>
    </div>
  </div>
);

export default License;
