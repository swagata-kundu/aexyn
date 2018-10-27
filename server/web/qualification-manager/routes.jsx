import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/dashboard-header';
import Footer from '../components/dashboard-footer';
import Mfs from './mfs';
import RouteG from '../components/route-guard';


const Routes = () => (
  <Router basename="/qualification-manager/">
    <div>
      <Header />
      <Route path="/manage-food-suppliers/" component={Mfs} />
      <Footer />
    </div>
  </Router>
);

const RoutesHOC = () => (<RouteG view={<Routes />} />);

export default RoutesHOC;
