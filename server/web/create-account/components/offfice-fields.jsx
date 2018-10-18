import React from 'react';
import { Field } from 'redux-form';
import { basename } from 'path';

const officeFields = ({ baseName }) => {
  const seperator = basename ? `${baseName}.` : '';
  return (
    <div className="form-field">
      <div className="label">
        <label>Office Address</label>
      </div>
      <div className="input">
        <Field
          component="input"
          type="text"
          name={`${seperator}address1`}
          placeholder="Street / P.O Box"
          required
        />
        <Field
          component="input"
          type="text"
          name={`${seperator}address2`}
          placeholder="Suite / Floor"
          required
        />
        <Field
          required
          component="input"
          type="text"
          name={`${seperator}city`}
          placeholder="City"
        />
        <Field
          required
          component="select"
          name={`${seperator}country`}
          placeholder="India"
        />
        <div className="two-col-right-input">
          <Field
            required
            component="select"
            name={`${seperator}state`}
            className="state"
          />
          <Field
            required
            component="input"
            type="text"
            name={`${seperator}zip`}
            placeholder="Zip"
          />
        </div>
      </div>
    </div>
  );
};

export default officeFields;
