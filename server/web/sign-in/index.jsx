import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './screens/login';
import FP from './screens/forget-password';

const App = () => (
  <Router basename="/">
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/forget-password" component={FP} />
    </div>
  </Router>
);
/* eslint-disable */
window.onload = () => {
  render(<App />, document.getElementById('sign-in'));
};
