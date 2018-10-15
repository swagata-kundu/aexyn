import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from './sign-up';
import Company from './company';

class CreateAccount extends Component {
  render() {
    const { step } = this.props;
    switch (step) {
      case 1: return <SignUp />;
      case 2: return <Company />
      default:
        return null;
    }
  }
}

export default connect(state => ({
  step: state.account.get('step'),
}))(CreateAccount);