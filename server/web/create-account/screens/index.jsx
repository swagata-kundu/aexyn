import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from './sign-up';
import Company from './company';
import SelectOffice from './select-office';
import CreateCompany from './create-company';

class CreateAccount extends Component {
  render() {
    const { step } = this.props;
    switch (step) {
      case 'USER': return <SignUp />;
      case 'COMPANY': return <Company />;
      case 'SELECT_OFFICE': return <SelectOffice />;
      case 'CREATE_COMPANY': return <CreateCompany />;
      default:
        return null;
    }
  }
}

export default connect(state => ({
  step: state.account.get('step'),
}))(CreateAccount);
