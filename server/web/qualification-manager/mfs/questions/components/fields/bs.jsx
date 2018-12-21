import React from 'react';
import { Field } from 'redux-form';

const BusinessStructure = ({ name, questionInfo, disabled }) => (
  <div className="form-field clearfix input-column clearfix">
    <label>{questionInfo.text}</label>
    <div className="three-col-form-field clearfix clearfix">
      <div className="column-1 three-col">
        <div className="form-text">Corporation Type</div>
        <Field
          component="select"
          required={questionInfo.isRequired}
          type="input"
          name={`${name}.type`}
          disabled={disabled}
        >
          <option value="LLP">LLP</option>
          <option value="PVT. Ltd">PVT. ltd</option>
          <option value="Public company">Public company</option>
          <option value="Proprietor">proprietor</option>
        </Field>
      </div>
      <div className="column-2 three-col">
        <div className="form-text">State of Incorporation</div>
        <Field disabled={disabled} type="text" component="input" name={`${name}.state`} placeholder="State" />
      </div>
      <div className="column-3 three-col">
        <div className="form-text">Year of Incorporation</div>
        <Field disabled={disabled} type="number" component="input" name={`${name}.year`} placeholder="Year" />
      </div>
    </div>
  </div>

);

export default BusinessStructure;
