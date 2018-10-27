import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import Routes from './routes';

window.onload = () => {
  render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    document.getElementById('qualification-manager'),
  );
};
