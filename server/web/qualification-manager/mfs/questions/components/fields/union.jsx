import React from 'react';
import { Field } from 'redux-form';

const Union = ({ name, questionInfo }) => (
  <div className="form-field input-column three-form-field clearfix">
    <label>{questionInfo.text}</label>
    <div className="column-1">
      <div className="form-text">Trade</div>
      <input type="text" name="trade" placeholder="Name" />
    </div>
    <div className="column-2">
      <div className="form-text">Aggrement</div>
      <input type="Email" name="aggrement" placeholder="Email" />
    </div>
    <div className="column-3">
      <div className="form-text">year Expires</div>
      <input type="telephone" name="yearexpires" placeholder="year" />
      <span className="remove-row-value">
        <i className="fa fa-times" aria-hidden="true" />
      </span>
    </div>
    <div className="additional-input">
      <i className="fa fa-plus-circle" aria-hidden="true" /> Add a Union
    </div>
  </div>
);

export default Union;
