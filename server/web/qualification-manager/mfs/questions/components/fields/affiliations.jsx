import React from 'react';
import { Field } from 'redux-form';

const Text = ({ name, questionInfo }) => (
  <div className="form-field input-column two-col-form-field clearfix">
    <label>list of industry affiliation</label>
    <div className="form-text">
      <div className="department">{questionInfo.text}</div>
    </div>
    <div className="input-field">
      <input type="text" step="any" />
    </div>
    <div className="additional-input">
      <i className="fa fa-plus-circle" aria-hidden="true" /> Add another
      affilation
    </div>
    <span className="remove-row-value">
      <i className="fa fa-times" aria-hidden="true" />
    </span>
  </div>
);

export default Text;
