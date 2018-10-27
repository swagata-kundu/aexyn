import React from 'react';
import { connect } from 'react-redux';
import EmailVerify from './email-verify';
import Header from './dashboard-header';
import Footer from './dashboard-footer';

const routeGuard = (props) => {
  const { userInfo, view } = props;
  const { verified } = userInfo;
  if (!verified) {
    return (
      <div>
        <Header />
        <EmailVerify />
        <Footer />
      </div>
    );
  }
  return view;
};

export default connect(state => (
  { userInfo: state.common.get('userInfo').toJS() }
))(routeGuard);
