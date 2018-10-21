import React from 'react';

export const customField = ({
  input, label, type, meta: { touched, error },
}) =>{
    console.log(touched, error);
    return (
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
)};
