import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/dashboard-header';
import Footer from '../components/dashboard-footer';
import RouteG from '../components/route-guard';
import Offices from './screens/offices';
import CreateOffice from './screens/createOffice';
import Employee from './screens/employees';


const basename = '/company-manager/';
const Routes = () => (
  <Router basename={basename}>
    <div>
      <Header />
      <Route exact path="/offices" component={Offices} />
      <Route exact path="/offices/create" component={CreateOffice} />
      <Route exact path="/offices/:id/employees" component={Employee} />

      <Footer />
    </div>
  </Router>
);

const RoutesHOC = () => (<RouteG view={<Routes />} basename={basename} />);

export default RoutesHOC;
