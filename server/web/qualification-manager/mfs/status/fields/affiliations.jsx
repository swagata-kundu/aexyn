import React from 'react';
import { Field, FieldArray } from 'redux-form';

const RenderAffiliations = ({ fields }) => (
  <div>
    {fields.map((location, index) => (
      <div className="input-field">
        <Field component="input" type="text" name={`${location}.affiliation`} placeholder="Affiliation" />
        <span className="remove-row-value"><i onClick={() => fields.remove(index)} className="fa fa-times" aria-hidden="true" /></span>
      </div>
    ))}
    <div role="presentation" className="additional-input" onClick={() => fields.push({})}>
      <i className="fa fa-plus-circle" aria-hidden="true" />
      {' '}
Add Another Affiliation
    </div>
  </div>
);

const Text = ({ name, questionInfo }) => (
  <div className="form-field clearfix input-column one-col-addition-field clearfix">
    <label>{questionInfo.text}</label>
    <div className="form-text">
      <div className="department">
Description of affilation of Membership
      </div>
    </div>
    <FieldArray name={name} component={RenderAffiliations} />

  </div>
);

export default Text;
