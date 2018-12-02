import React from 'react';

const Amount = ({ text, answer = {} }) => (
  <div>
    <p>{text}</p>
    <p>{answer.value}</p>

  </div>
);

export default Amount;
