import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './screens/login';

const App = () => (
  <Router basename="/">
    <div>
      <Route exact path="/" component={Login} />
    </div>
  </Router>
);

window.onload = () => {
  render(<App />, document.getElementById('sign-in'));
};
