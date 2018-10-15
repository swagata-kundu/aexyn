import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Screens from './screens';
import store from './state/store';

window.onload = () => {
  render(
    <Provider store={store}>
      <Screens />
    </Provider>,
    document.getElementById('create-account')
  );
};
