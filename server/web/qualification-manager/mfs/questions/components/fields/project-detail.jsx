import React from 'react';
import { Field } from 'redux-form';

const ProjectDetail = ({ name, questionInfo }) => (
  <div className="four-col-form-field">
    <div className="form-field input-column clearfix">
      <label>{questionInfo.text}</label>
      <div className="form-field-top-grop clearfix">
        <div className="column-1 four-col"><div className="form-text">Project Name</div></div>
        <div className="column-2 four-col"><div className="form-text">Client</div></div>
        <div className="column-3 four-col"><div className="form-text">Contract value</div></div>
        <div className="column-4 four-col"><div className="form-text">Completion date</div></div>
      </div>
      <div className="form-field-bottom-grop clearfix">
        <div className="column-1 four-col">
          <Field component="input" type="text" name={`${name}.name`} placeholder="Project Name" />
        </div>
        <div className="column-2 four-col">
          <Field component="input" type="text" name={`${name}.client`} placeholder="Client" />
        </div>
        <div className="column-3 dollar four-col">
          <div className="input-field">
            <Field component="input" type="number" name={`${name}.value`} placeholder="Contract Value" />
            <span className="dollar-icon">$</span>
          </div>
        </div>
        <div className="column-4 four-col">
          <div className="date-field">
            <Field component="input" type="date" name={`${name}.date`} placeholder="Completion Date" />
            <i className="fa fa-calendar-o" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default ProjectDetail;
