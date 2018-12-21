import React from 'react';
import { Field, FieldArray } from 'redux-form';

const RenderUnions = ({ fields, disabled }) => {
  if (fields.length === 0 ) {
    fields.push({});
  }
  return (
    <div>
      {fields.map((location, index) => (
        <div className="form-field-bottom-grop clearfix">
          <div className="column-1 three-col">
            <Field disabled={disabled} component="input" type="text" name={`${location}.trade`} placeholder="Trade" />
          </div>
          <div className="column-2 three-col">
            <Field disabled={disabled} component="input" type="text" name={`${location}.agreement`} placeholder="Agreement" />
          </div>
          <div className="column-3 three-col">
            <Field disabled={disabled} component="input" type="text" name={`${location}.year`} placeholder="Year Expires" />

            {index !== 0 && <span className="remove-row-value"><i onClick={() => fields.remove(index)} className="fa fa-times" aria-hidden="true" /></span>}
          </div>
        </div>
      ))}
      <div role="presentation" className="additional-input" onClick={() => fields.push({})}>
        <i className="fa fa-plus-circle" aria-hidden="true" />
        {' '}
Add
      </div>
    </div>
  );
};

const Union = ({ name, questionInfo, disabled }) => (
  <div className="three-col-form-field three-col-additional-field">
    <div className="form-field input-column clearfix">
      <label>{questionInfo.text}</label>
      <div className="form-field-top-grop clearfix">
        <div className="column-1 three-col"><div className="form-text">Trade</div></div>
        <div className="column-2 three-col"><div className="form-text">Aggrement</div></div>
        <div className="column-3 three-col"><div className="form-text">Year Expires</div></div>
      </div>
      <FieldArray disabled={disabled} name={name} component={RenderUnions} />

    </div>
  </div>
);

export default Union;
