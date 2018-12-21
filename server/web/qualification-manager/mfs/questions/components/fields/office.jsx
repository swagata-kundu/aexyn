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
          <div className="column-1 three-col">
            <Field disabled={disabled} component="input" type="text" name={`${location}.name`} placeholder="Company Name" />
          </div>
          <div className="column-2 three-col">
            <Field disabled={disabled} component="input" type="text" name={`${location}.address`} placeholder="Address" />
          </div>
          <div className="column-3 three-col">
            <Field disabled={disabled} component="input" type="text" name={`${location}.phone`} placeholder="Phone" />

            {index !== 0 && <span className="remove-row-value"><i onClick={() => fields.remove(index)} className="fa fa-times" aria-hidden="true" /></span>}
          </div>
        </div>
      ))}
      <div role="presentation" className="additional-input" onClick={() => fields.push({})}>
        <i className="fa fa-plus-circle" aria-hidden="true" />
        {' '}
Add Another Office
      </div>
    </div>
  );
};

const Office = ({ name, questionInfo, disabled }) => (
  <div className="three-col-form-field three-col-additional-field">
    <div className="form-field clearfix input-column clearfix">
      <label>{questionInfo.text}</label>
      <div className="form-field-top-grop clearfix">
        <div className="column-1 three-col"><div className="form-text">Office Name</div></div>
        <div className="column-2 three-col"><div className="form-text">Address</div></div>
        <div className="column-3 three-col"><div className="form-text">Phone</div></div>
      </div>
      <FieldArray disabled={disabled} name={name} component={RenderOffices} />
    </div>
  </div>
);

export default Office;
