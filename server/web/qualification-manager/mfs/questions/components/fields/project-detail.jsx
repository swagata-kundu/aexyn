import React from 'react';
import { Field } from 'redux-form';

const ProjectDetail = ({ name, questionInfo }) => (
  <div className="form-field input-column clearfix">
    <label>{questionInfo.text}</label>
    <div className="four-col-form-field clearfix">
      <div className="column-1">
        <div className="form-text">Project Name</div>
        <input type="text" placeholder="Aexyn" />
      </div>
      <div className="column-2">
        <div className="form-text">Client</div>
        <input type="text" placeholder="Panipat" />
      </div>
      <div className="form-field dollar">
        <div className="form-text">Contract value</div>
        <div className="input-field">
          <input type="number" step="any" />
          <span className="dollar-icon">$</span>
        </div>
      </div>
      <div className="column-4">
        <div className="form-text">Completion date</div>
        <div className="date-field">
          <input type="date" placeholder />
          <i className="fa fa-calendar-o" aria-hidden="true" />
        </div>
      </div>
    </div>
  </div>
);

export default ProjectDetail;
