import React from 'react';

const Text = ({ text, answer = {} }) => (
  <div>
    <p>{text}</p>
    <p>{answer.value}</p>

  </div>
);

export default Text;
