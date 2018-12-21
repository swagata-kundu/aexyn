import React from 'react';
import { Field, FieldArray } from 'redux-form';

const RenderProjects = ({ fields, disabled }) => {
  if (fields.length === 0 ) {
    fields.push({});
  }
  return (
    <div>
      {fields.map((location, index) => (
        <div className="form-field-bottom-grop clearfix">
          <div className="column-1 four-col">
            <Field disabled={disabled} component="input" type="text" name={`${location}.name`} placeholder="Project Name" />
          </div>
          <div className="column-2 four-col">
            <Field disabled={disabled} component="input" type="text" name={`${location}.client`} placeholder="Client" />
          </div>
          <div className="column-3 dollar four-col">
            <div className="input-field">
              <Field disabled={disabled} component="input" type="number" name={`${location}.value`} placeholder="Contract Value" />
              <span className="dollar-icon">$</span>
            </div>
          </div>
          <div className="column-4 four-col">
            <div className="date-field">
              <Field disabled={disabled} component="input" type="date" name={`${location}.date`} placeholder="Completion Date" />
              <i className="fa fa-calendar-o" aria-hidden="true" />
              {index !== 0 && <span className="remove-row-value"><i onClick={() => fields.remove(index)} className="fa fa-times" aria-hidden="true" /></span>}
            </div>
          </div>
        </div>
      ))}
      <div role="presentation" className="additional-input" onClick={() => fields.push({})}>
        <i className="fa fa-plus-circle" aria-hidden="true" />
        {' '}
Add a Project
      </div>
    </div>
  );
};
const ProjectList = ({ name, questionInfo, disabled }) => (
  <div className="four-col-form-field list-of-project-details four-col-additional-form-field form-field clearfix">
    <label>{questionInfo.text}</label>
    <div className="form-field-top-grop clearfix">
      <div className="column-1 four-col"><div className="form-text">Project Name</div></div>
      <div className="column-2 four-col"><div className="form-text">Client</div></div>
      <div className="column-3 four-col"><div className="form-text">Contract value</div></div>
      <div className="column-3 four-col"><div className="form-text">Completion date</div></div>
    </div>

    <FieldArray name={name} component={RenderProjects} disabled={disabled} />

  </div>
);

export default ProjectList;
