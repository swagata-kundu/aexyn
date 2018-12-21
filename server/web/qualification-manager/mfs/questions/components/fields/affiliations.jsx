import React from 'react';
import { Field, FieldArray } from 'redux-form';

const RenderAffiliations = ({ fields, disabled }) => {
  if (fields.length === 0) {
    fields.push({});
  }
  return (
    <div>
      {fields.map((location, index) => (
        <div className="input-field">
          <Field disabled={disabled} component="input" type="text" name={`${location}.affiliation`} placeholder="Affiliation" />
          {index !== 0 && <span className="remove-row-value"><i onClick={() => fields.remove(index)} className="fa fa-times" aria-hidden="true" /></span>}
        </div>
      ))}
      <div role="presentation" className="additional-input" onClick={() => fields.push({})}>
        <i className="fa fa-plus-circle" aria-hidden="true" />
        {' '}
Add Another Affiliation
      </div>
    </div>
  );
};

const Text = ({ name, questionInfo, disabled }) => (
  <div className="form-field clearfix input-column one-col-addition-field clearfix">
    <label>{questionInfo.text}</label>
    <div className="form-text">
      <div className="department">
Description of affilation of Membership
      </div>
    </div>
    <FieldArray name={name} component={RenderAffiliations} disabled={disabled} />

  </div>
);

export default Text;
