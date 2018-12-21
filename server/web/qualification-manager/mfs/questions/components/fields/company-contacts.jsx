import React from 'react';
import { Field, FieldArray } from 'redux-form';

const RenderOffices = ({ fields, disabled }) => {
  if (fields.length === 0 ) {
    fields.push({});
  }
  return (
    <div>
      {fields.map((location, index) => (
        <div className="form-field-bottom-grop clearfix">
          <div className="column-1 four-col">
            <Field disabled={disabled} component="input" type="text" name={`${location}.company`} placeholder="Company Name" />
          </div>
          <div className="column-2 four-col">
            <Field disabled={disabled} component="input" type="text" name={`${location}.address`} placeholder="Address" />
          </div>
          <div className="column-3 four-col">
            <Field disabled={disabled} component="input" type="text" name={`${location}.phone`} placeholder="Phone" />
          </div>
          <div className="column-4 four-col">
            <Field disabled={disabled} component="input" type="email" name={`${location}.email`} placeholder="Email" />
          </div>
          {index !== 0 && <span className="remove-row-value"><i onClick={() => fields.remove(index)} className="fa fa-times" aria-hidden="true" /></span>}

        </div>
      ))}
      <div role="presentation" className="additional-input" onClick={() => fields.push({})}>
        <i className="fa fa-plus-circle" aria-hidden="true" />
        {' '}
Add a Contact
        {' '}

      </div>
    </div>
  );
};


const CompanyContacts = ({ name, questionInfo, disabled }) => (
  <div className="four-col-form-field four-col-additional-form-field">
    <label>{questionInfo.text}</label>
    <div className="form-field-top-grop clearfix">
      <div className="column-1 four-col"><div className="form-text">Company Name</div></div>
      <div className="column-2 four-col"><div className="form-text">Address</div></div>
      <div className="column-3 four-col"><div className="form-text">Phone</div></div>
      <div className="column-3 four-col"><div className="form-text">Email</div></div>
    </div>
    <FieldArray name={name} component={RenderOffices} disabled={disabled} />
  </div>
);


export default CompanyContacts;
