import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/dashboard-header';
import Footer from '../components/dashboard-footer';
import RouteG from '../components/route-guard';
import Offices from './screens/offices';
import CreateOffice from './screens/createOffice';
import Employee from './screens/employees';
import { getOffice } from './state/action';


const basename = '/company-manager/';
class Routes extends React.Component {
  componentDidMount() {
    this.props.getOffice();
  }

  render() {
    return (
      <Router basename={basename}>
        <div>
          <Header />
          <Route exact path="/offices" component={Offices} />
          <Route exact path="/offices/create" component={CreateOffice} />
          <Route exact path="/offices/:office_id/employees" component={Employee} />
          <Footer />
        </div>
      </Router>
    );
  }
}

const RoutesConnected = connect(null, ({ getOffice }))(Routes);

const RoutesHOC = () => (<RouteG view={<RoutesConnected />} basename={basename} />);

export default RoutesHOC;
