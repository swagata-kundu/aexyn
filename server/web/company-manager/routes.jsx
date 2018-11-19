import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/dashboard-header';
import Footer from '../components/dashboard-footer';
import RouteG from '../components/route-guard';
import Offices from './screens/offices';
import CreateOffice from './screens/addoffice';
import Employee from './screens/employees';
import CompanyProfile from './screens/company';
import { getOffice } from './state/action';
import { masterData } from '../state/action';


const basename = '/company-manager/';
class Routes extends React.Component {
  componentDidMount() {
    this.props.getOffice();
    this.props.masterData();
  }

  render() {
    return (
      <Router basename={basename}>
        <div>
          <Header />
          <Route exact path="/company-profile" component={CompanyProfile} />
          <Route exact path="/offices" component={Offices} />
          <Route exact path="/offices/create" component={CreateOffice} />
          <Route exact path="/offices/:office_id/employees" component={Employee} />
          <Footer />
        </div>
      </Router>
    );
  }
}

const RoutesConnected = connect(null, ({ getOffice, masterData }))(Routes);

const RoutesHOC = () => (<RouteG view={<RoutesConnected />} basename={basename} />);

export default RoutesHOC;
