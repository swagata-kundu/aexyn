import React from 'react';
import { connect } from 'react-redux';

const Welcome = ({ user }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="section-header col-sm-12 text-center">
        <h1>
          Hello
          {' '}
          {' '}
          <span className="username">
            {user.first_name}
            {' ,'}
          </span>
        </h1>
        <h1>Welcome to Aexyn</h1>
      </div>
    </div>
  </div>
);
export default connect(state => ({
  user: state.form.signup.values,
}))(Welcome);
