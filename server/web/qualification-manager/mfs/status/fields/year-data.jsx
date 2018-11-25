import React from 'react';
import { Field } from 'redux-form';
import moment from 'moment';

const YearlyData = ({ name, questionInfo }) => {
  const currentYear = parseInt(moment().format('YYYY'), 10);
  return (
    <div className="four-col-form-field">
      <div className="form-field clearfix input-column clearfix">
        <label>{questionInfo.text}</label>
        <div className="column-1 four-col">
          <div className="form-text">{currentYear}</div>
          <Field component="input" type="text" name={`${name}.year1`} />
        </div>
        <div className="column-2 four-col">
          <div className="form-text">{currentYear - 1}</div>
          <Field component="input" type="text" name={`${name}.year2`} />
        </div>
        <div className="column-3 four-col">
          <div className="form-text">{currentYear - 2}</div>
          <Field component="input" type="text" name={`${name}.year3`} />
        </div>
        <div className="column-4 four-col">
          <div className="form-text">{currentYear - 3}</div>
          <Field component="input" type="text" name={`${name}.year4`} />
        </div>
      </div>
    </div>
  );
};

export default YearlyData;
