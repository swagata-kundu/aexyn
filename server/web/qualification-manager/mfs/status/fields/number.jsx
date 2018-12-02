import React from 'react';

const Number = ({ text, answer = {} }) => (
  <div>
    <p>{text}</p>
    <p>{answer.value}</p>

  </div>
);

export default Number;
