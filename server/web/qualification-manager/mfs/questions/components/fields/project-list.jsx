import React from 'react';
import { Field } from 'redux-form';

const ProjectList = ({ name, questionInfo }) => (
  <div className="form-field list-of-project-details input-column clearfix">
    <label>list of project details</label>
    <div className="four-col-form-field clearfix">
      <div className="column-1">
        <div className="form-text">Project Name</div>
        <input type="text" placeholder="Aexyn" />
        <input type="text" placeholder="Aexyn" />
        <input type="text" placeholder="Aexyn" />
      </div>
      <div className="column-2">
        <div className="form-text">Client</div>
        <input type="text" placeholder="Panipat" />
        <input type="text" placeholder="Panipat" />
        <input type="text" placeholder="Panipat" />
      </div>
      <div className="form-field dollar">
        <div className="form-text">Contract value</div>
        <div className="input-field">
          <input type="number" step="any" />
          <span className="dollar-icon">$</span>
        </div>
        <div className="input-field">
          <input type="number" step="any" />
          <span className="dollar-icon">$</span>
        </div>
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
          <span className="remove-row-value">
            <i className="fa fa-times" aria-hidden="true" />
          </span>
        </div>
        <div className="date-field">
          <input type="date" placeholder />
          <i className="fa fa-calendar-o" aria-hidden="true" />
          <span className="remove-row-value">
            <i className="fa fa-times" aria-hidden="true" />
          </span>
        </div>
        <div className="date-field">
          <input type="date" placeholder />
          <i className="fa fa-calendar-o" aria-hidden="true" />
          <span className="remove-row-value">
            <i className="fa fa-times" aria-hidden="true" />
          </span>
        </div>
      </div>
      <div className="additional-input">
        <i className="fa fa-plus-circle" aria-hidden="true" />
        {' '}
        Add another
        Project
            </div>
    </div>
  </div>
);

export default ProjectList;
