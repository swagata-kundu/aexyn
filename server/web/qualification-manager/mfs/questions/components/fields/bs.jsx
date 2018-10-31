import React from 'react';
import { Field } from 'redux-form';

const BusinessStructure = ({ name, questionInfo }) => (
  <div className="form-field input-column clearfix">
    <label>{questionInfo.text}</label>
    <div className="three-form-field clearfix">
      <div className="column-1">
        <div className="form-text">Corporation Type</div>
        <input type="text" name="corporationtype" placeholder="Company Name" />
      </div>
      <div className="column-2">
        <div className="form-text">State of Incorporation</div>
        <input type="text" name="stateofincorporation" placeholder="Address" />
      </div>
      <div className="column-3">
        <div className="form-text">Year of Incorporation</div>
        <input
          type="tel"
          name="yearofincorporation"
          placeholder="Phone Number"
        />
      </div>
    </div>
  </div>
);

export default BusinessStructure;
