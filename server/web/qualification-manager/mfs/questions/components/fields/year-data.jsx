import React from 'react';
import { Field } from 'redux-form';

const YearlyData = ({ name, questionInfo }) => (
  <div className="form-field input-column clearfix">
    <label>{questionInfo.text}</label>
    <div className="four-col-form-field clearfix">
      <div className="column-1">
        <div className="form-text">2018</div>
        <input type="text" placeholder />
      </div>
      <div className="column-2">
        <div className="form-text">2017</div>
        <input type="text" placeholder />
      </div>
      <div className="column-3">
        <div className="form-text">2016</div>
        <input type="text" placeholder />
      </div>
      <div className="column-4">
        <div className="form-text">2015</div>
        <input type="text" placeholder />
      </div>
    </div>
  </div>
);

export default YearlyData;
