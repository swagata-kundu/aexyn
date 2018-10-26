import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/dashboard-header';
import Footer from '../components/dashboard-footer';
import Mfs from './mfs';
import EmailVrify from './email-verify';


const Routes = () => (
  <Router basename="/qualification-manager/">
    <div>
      <Header />
      <Route path="/manage-food-suppliers/" component={Mfs} />
      <Route path="/verify-email" component={EmailVrify} />
      <Footer />
    </div>
  </Router>
);
export default Routes;