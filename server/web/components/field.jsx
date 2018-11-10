import React from 'react';

export const customField = ({
  input, label, type, meta: { touched, error },
}) => (
  <div>
    <div className="input">
      <input {...input} placeholder={label} type={type} />
    </div>
    {touched && error && (
    <div className="have-alredy-account">
      {error}
    </div>
    )}
  </div>
);
