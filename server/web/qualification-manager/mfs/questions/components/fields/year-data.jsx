import React from 'react';
import { Field } from 'redux-form';

const YearlyData = ({ name, questionInfo }) => (

  <div className="four-col-form-field">
    <div className="form-field clearfix input-column clearfix">
      <label>{questionInfo.text}</label>
      <div className="column-1 four-col">
        <div className="form-text">2018</div>
        <input type="text" placeholder />
      </div>
      <div className="column-2 four-col">
        <div className="form-text">2017</div>
        <input type="text" placeholder />
      </div>
      <div className="column-3 four-col">
        <div className="form-text">2016</div>
        <input type="text" placeholder />
      </div>
      <div className="column-4 four-col">
        <div className="form-text">2015</div>
        <input type="text" placeholder />
      </div>
    </div>
  </div>
);

export default YearlyData;
