import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import Recaptcha from 'react-recaptcha';

import Header from '../../sign-in/components/header';
import Footer from '../../sign-in/components/footer';
import { checkEmail } from '../../service/auth';
import { customField } from '../components/field';
import { mergeKeys } from '../state/action';

const SignupForm = (props) => {
  const { handleSubmit, onSubmit, captchaVerify } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Create an A Aexyn account</h3>
      <div className="input two-col-input clearfix">
        <div>
          <Field
            component="input"
            type="text"
            name="first_name"
            placeholder="First Name"
            maxLength={20}
            required
          />
        </div>
        <div>
          <Field
            component="input"
            type="text"
            name="last_name"
            placeholder="Last Name"
            maxLength={20}
            required
          />
        </div>
      </div>
      <Field
        component={customField}
        type="email"
        name="email"
        label="Email"
        maxLength={50}
        required
      />
      <div className="input">
        <Field
          component="input"
          type="password"
          name="password"
          maxLength={20}
          placeholder="Create a Password"
          required
        />
      </div>
      <Field
        component={customField}
        type="password"
        name="repeatPassword"
        label="Confirm Password"
        maxLength={20}
        required
      />
      <div className="checkbox-input">
        <Field
          component="input"
          type="checkbox"
          name="agree"
          id="agree"
          required
        />
        I agree the Aexyn&nbsp;
        <a href="#">terms of service</a>
        &nbsp;and&nbsp;
        <a href="#">privacy policy</a>
      </div>
      <div>
        <Recaptcha
          verifyCallback={captchaVerify}
          sitekey="6Lc_OHYUAAAAAE7zPafaYGEsv2CCtNcDafnT9A5H"
        />
      </div>

      <div className="actions">
        <input type="submit" name="submit" defaultValue="Create Account" />
      </div>
    </form>
  );
};
const SignupFormConnected = reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  initialValues: {
    agree: false,
  },
})(SignupForm);
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.verified = false;
  }

  renderForm = () => <SignupFormConnected onSubmit={this.onSubmit} captchaVerify={this.captchaVerify} />;

  captchaVerify=() => {
    this.verified = true;
  }

  onSubmit=async (values) => {
    const exists = await checkEmail(values.email);
    if (exists) {
      throw new SubmissionError({
        email: 'Email Already in user',
      });
    }
    const { password, repeatPassword } = values;
    if (password !== repeatPassword) {
      throw new SubmissionError({
        repeatPassword: 'Password do not match',
      });
    }
    if (this.verified) {
      this.props.mergeKeys({ step: 'COMPANY' });
    }
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
                    <a href="/">Already have an account?</a>
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
export default connect(null, { mergeKeys })(SignUp);
