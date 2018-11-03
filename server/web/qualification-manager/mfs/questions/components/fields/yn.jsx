import React from 'react';
import { Field } from 'redux-form';

const YesNo = ({ name, questionInfo }) => (
  <div className="form-field">
    <div className="radio-label">
      <label>{questionInfo.text}</label>
      <div className="radio-check">
        <input type="radio" name="no" defaultValue="No" />
        {' '}
No
      </div>
      <div className="radio-check">
        <input type="radio" name="yes" defaultValue="Yes" />
        {' '}
Yes
      </div>
    </div>
  </div>
);

export default YesNo;
