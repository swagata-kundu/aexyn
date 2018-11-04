import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EmailVerify from './email-verify';
import Header from './dashboard-header';
import Footer from './dashboard-footer';

const routeGuard = (props) => {
  const { userInfo, view, basename } = props;
  const { verified } = userInfo;
  if (!verified) {
    return (
      <Router basename={basename}>
        <div>
          <Header />
          <Route path="/" component={EmailVerify} />
          <Footer />
        </div>
      </Router>
    );
  }
  return view;
};

export default connect(state => ({
  userInfo: state.common.get('userInfo').toJS(),
}))(routeGuard);
