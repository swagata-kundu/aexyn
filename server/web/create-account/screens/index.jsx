import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from './sign-up';
import Company from './company';
import SelectOffice from './select-office';
import CreateCompany from './create-company';
import { masterData } from '../../state/action';

class CreateAccount extends Component {
  componentDidMount() {
    this.props.masterData();
  }

  render() {
    const { step } = this.props;
    switch (step) {
      case 'USER_INFO': return <SignUp />;
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
}), { masterData })(CreateAccount);
