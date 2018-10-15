import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Header from '../../sign-in/components/header';
import Footer from '../../sign-in/components/footer';
import { next } from '../state/action';

const SignupForm = (props) => {
  const { handleSubmit, onSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Create an A Aexyn account</h3>
      <div className="input two-col-input clearfix">
        <div>
          <Field
            component="input"
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <Field
            component="input"
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          />
        </div>
      </div>
      <div className="input">
        <Field
          component="input"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="input">
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="Create a Password"
          required
        />
      </div>
      <div className="checkbox-input">
        <Field
          component="input"
          type="checkbox"
          name="checkbox"
          defaultValue="check"
          id="agree"
          required
        />
        {' '}
        I agree the Aexyn&nbsp;
        <a href="#">terms of service</a>
        &nbsp;and&nbsp;
        <a href="#">privacy policy</a>
      </div>
      <div className="actions">
        <input type="submit" name="submit" defaultValue="Create Account" />
      </div>
    </form>
  );
};
const SignupFormConnected = reduxForm({
  form: 'signup',
})(SignupForm);
class SignUp extends Component {
  renderForm = () => <SignupFormConnected onSubmit={this.onSubmit} />;

  onSubmit=(values) => {
    console.log(values);
    this.props.next();
  }

  render() {
    return (
      <div>
        <Header />
        <section className="custom-account-container-wrapper">
          <div className="container">
            <div className="row">
              <div className="form-group sign-up">
                {this.renderForm()}
                <div className="form-bottom-content">
                  <center>
                    <a href="/sign-in">Already have an account?</a>
                  </center>
                  <h2>Tag Line</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default connect(null, dispatch => ({
  next: () => dispatch(next()),
}))(SignUp);
