import React from 'react';
import { Field, FieldArray } from 'redux-form';

const RenderLcenses = ({ fields }) => (
  <div>
    {fields.map((location, index) => (
      <div className="form-field-bottom-grop clearfix">
        <div className="column-1 four-col">
          <Field component="input" type="text" name={`${location}.number`} placeholder="License Number" />
        </div>
        <div className="column-2 four-col">
          <Field component="input" type="text" name={`${location}.classification`} placeholder="Classification" />
        </div>
        <div className="column-3 four-col">
          <Field component="input" type="text" name={`${location}.state`} placeholder="State" />
        </div>
        <div className="column-4 four-col">
          <Field component="input" type="email" name={`${location}.agency`} placeholder="Issuing Agency" />
        </div>
        <span className="remove-row-value">
          <i
            onClick={() => fields.remove(index)}
            className="fa fa-times"
            aria-hidden="true"
          />
        </span>
      </div>
    ))}
    <div role="presentation" className="additional-input" onClick={() => fields.push({})}>
      <i className="fa fa-plus-circle" aria-hidden="true" />
      {' '}
Add a License
      {' '}

    </div>
  </div>
);

const License = ({ name, questionInfo }) => (
  <div className="four-col-form-field four-col-additional-form-field">
    <div className="form-field clearfix input-column clearfix">
      <label>{questionInfo.text}</label>
      <div className="form-field-top-grop clearfix">
        <div className="column-1 four-col"><div className="form-text">License Number</div></div>
        <div className="column-2 four-col"><div className="form-text">Classification</div></div>
        <div className="column-3 four-col"><div className="form-text">State</div></div>
        <div className="column-4 four-col"><div className="form-text">Issuing Agency</div></div>
      </div>
      <FieldArray name={name} component={RenderLcenses} />
    </div>
  </div>
);

export default License;
