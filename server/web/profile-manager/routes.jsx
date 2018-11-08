import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/dashboard-header';
import Footer from '../components/dashboard-footer';
import RouteG from '../components/route-guard';
import User from './screens/user';
import Account from './screens/account';
import Notification from './screens/notification';


const basename = '/profile-manager/';
const Routes = () => (
  <Router basename={basename}>
    <div>
      <Header />
      <section className="custom-body-container-wrapper" style={{ paddingLeft: 50 }}>
        <div className="custom-body-container">
          <Route exact path="/" component={User} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/notification" component={Notification} />
        </div>
      </section>
      <Footer />
    </div>
  </Router>
);

const RoutesHOC = () => (<RouteG view={<Routes />} basename={basename} />);

export default RoutesHOC;
