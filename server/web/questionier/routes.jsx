import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/dashboard-header';
import Footer from '../components/dashboard-footer';
import Mfs from './mfs';


const Routes = () => (
  <Router basename="/questionire/">
    <div>
      <Header />
      <Route exact path="/" component={Mfs} />
      <Footer />
    </div>
  </Router>
);
export default Routes;
