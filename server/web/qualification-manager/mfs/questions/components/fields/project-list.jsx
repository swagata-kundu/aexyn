import React from 'react';
import { Field, FieldArray } from 'redux-form';

const RenderProjects = ({ fields }) => (
  <div>
    {fields.map((location, index) => (
      <div className="form-field-bottom-grop clearfix">
        <div className="column-1 four-col">
          <Field component="input" type="text" name={`${location}.name`} placeholder="Project Name" />
        </div>
        <div className="column-2 four-col">
          <Field component="input" type="text" name={`${location}.client`} placeholder="Client" />
        </div>
        <div className="column-3 dollar four-col">
          <div className="input-field">
            <Field component="input" type="number" name={`${location}.value`} placeholder="Contract Value" />
            <span className="dollar-icon">$</span>
          </div>
        </div>
        <div className="column-4 four-col">
          <div className="date-field">
            <Field component="input" type="date" name={`${location}.date`} placeholder="Completion Date" />
            <i className="fa fa-calendar-o" aria-hidden="true" />
            <span className="remove-row-value"><i onClick={() => fields.remove(index)} className="fa fa-times" aria-hidden="true" /></span>
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

const ProjectList = ({ name, questionInfo }) => (
  <div className="four-col-form-field list-of-project-details four-col-additional-form-field form-field clearfix">
    <label>{questionInfo.text}</label>
    <div className="form-field-top-grop clearfix">
      <div className="column-1 four-col"><div className="form-text">Project Name</div></div>
      <div className="column-2 four-col"><div className="form-text">Client</div></div>
      <div className="column-3 four-col"><div className="form-text">Contract value</div></div>
      <div className="column-3 four-col"><div className="form-text">Completion date</div></div>
    </div>

    <FieldArray name={name} component={RenderProjects} />

  </div>
);

export default ProjectList;
