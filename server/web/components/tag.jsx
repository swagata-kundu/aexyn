import React from 'react';
import TagsInput from 'react-tagsinput';
// import 'react-tagsinput/react-tagsinput.css';

const Tags = (field) => {
  const { input, disabled } = field;
  const { onChange, value = [] } = input;
  const current = value || [];
  return <TagsInput disabled={disabled} value={current} onChange={onChange} />;
};

export default Tags;
