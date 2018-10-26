import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';

window.onload = () => {
  render(
    <Routes />,
    document.getElementById('qualification-manager'),
  );
};
