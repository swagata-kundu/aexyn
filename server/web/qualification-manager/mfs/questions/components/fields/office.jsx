import React from 'react';
import { Field, FieldArray } from 'redux-form';

const RenderOffices = ({ fields }) => (
  <div>
    {fields.map((location, index) => (
      <div className="form-field-bottom-grop clearfix">
        <div className="column-1 three-col">
          <Field component="input" type="text" name={`${location}.name`} placeholder="Company Name" />
        </div>
        <div className="column-2 three-col">
          <Field component="input" type="text" name={`${location}.address`} placeholder="Address" />
        </div>
        <div className="column-3 three-col">
          <Field component="input" type="text" name={`${location}.phone`} placeholder="Phone" />

          <span className="remove-row-value"><i onClick={() => fields.remove(index)} className="fa fa-times" aria-hidden="true" /></span>
        </div>
      </div>
    ))}
    <div role="presentation" className="additional-input" onClick={() => fields.push({})}>
      <i className="fa fa-plus-circle" aria-hidden="true" />
      {' '}
Add a Location
    </div>
  </div>
);

const Office = ({ name, questionInfo }) => (
  <div className="three-col-form-field three-col-additional-field">
    <div className="form-field clearfix input-column clearfix">
      <label>{questionInfo.text}</label>
      <div className="form-field-top-grop clearfix">
        <div className="column-1 three-col"><div className="form-text">Office Name</div></div>
        <div className="column-2 three-col"><div className="form-text">Address</div></div>
        <div className="column-3 three-col"><div className="form-text">phone</div></div>
      </div>
      <FieldArray name={name} component={RenderOffices} />
    </div>
  </div>
);

export default Office;
