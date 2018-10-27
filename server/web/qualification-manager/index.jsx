import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from '../create-account/state/store';

window.onload = () => {
  render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    document.getElementById('qualification-manager'),
  );
};
