import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header';
import SignUp from './screens/sign-up';
import Company from './screens/company';
import SelectOffice from './screens/select-office';


const CompanyRoutes = ({ match }) => (
  <div>
    <Header />
    <Route exact path={`${match.url}`} component={Company} />
    <Route path={`${match.url}/:companyId/office`} component={SelectOffice} />
  </div>);


const App = () => (
  <Router basename="/web/create-account/">
    <div>
      <Route exact path="/" component={SignUp} />
      <Route path="/company" component={CompanyRoutes} />
    </div>
  </Router>
);


window.onload = () => {
  render(<App />, document.getElementById('create-account'));
};
