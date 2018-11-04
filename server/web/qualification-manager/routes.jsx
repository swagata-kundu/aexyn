import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/dashboard-header';
import Footer from '../components/dashboard-footer';
import Mfs from './mfs';
import Permission from './permission';
import RouteG from '../components/route-guard';

const basename = '/qualification-manager/';
const Routes = () => (
  <Router basename={basename}>
    <div>
      <Header />
      <Route path="/manage-food-suppliers/" component={Mfs} />
      <Route path="/permission-settings/" component={Permission} />
      <Footer />
    </div>
  </Router>
);

const RoutesHOC = () => (<RouteG view={<Routes />} basename={basename} />);

export default RoutesHOC;
