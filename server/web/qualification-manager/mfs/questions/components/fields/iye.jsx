import React from 'react';
import { Field } from 'redux-form';

const IfNoExplain = ({ name, questionInfo }) => (
  <div className="form-field clearfix">
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

    <div className="label-text">
      <label>If Yes, Please Explain</label>
      {' '}
    </div>
    <div className="input-field">
      <input type="text" name="workperformed" placeholder />
    </div>
  </div>
);

export default IfNoExplain;
