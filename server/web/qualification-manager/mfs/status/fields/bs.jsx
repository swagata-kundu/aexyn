import React from 'react';
import { Field } from 'redux-form';

const BusinessStructure = ({ name, questionInfo }) => (
  <div className="form-field clearfix input-column clearfix">
    <label>{questionInfo.text}</label>
    <div className="three-col-form-field clearfix clearfix">
      <div className="column-1 three-col">
        <div className="form-text">Corporation Type</div>
        <Field component="input" type="text" name={`${name}.type`} placeholder="Corporation Type" />
      </div>
      <div className="column-2 three-col">
        <div className="form-text">State of Incorporation</div>
        <Field type="text" component="input" name={`${name}.state`} placeholder="State" />
      </div>
      <div className="column-3 three-col">
        <div className="form-text">Year of Incorporation</div>
        <Field type="number" component="input" name={`${name}.year`} placeholder="Year" />
      </div>
    </div>
  </div>

);

export default BusinessStructure;
