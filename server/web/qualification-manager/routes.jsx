import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/dashboard-header';
import Footer from '../components/dashboard-footer';
import Mfs from './mfs';
import EmailVrify from './email-verify';
import Invite from './mfs/invite/routes';
import RouteG from '../components/route-guard';

import Mfs from './mfs';

const Routes = () => (
  <Router basename="/qualification-manager/">
    <div>
      <Header />
      <Route path="/manage-food-suppliers/" component={Mfs} />
      <Route path="/verify-email" component={EmailVrify} />
      <Route path="/invite" component={Invite} />
      <Footer />
    </div>
  </Router>
);

const RoutesHOC = () => (<RouteG view={<Routes />} />);

export default RoutesHOC;
