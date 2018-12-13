import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { resetPassword } from '../../service/auth';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmPassword: '',
      sent: false,
    };
  }

  handleinput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


  submitForm = async (e) => {
    e.preventDefault();
    const { newPassword } = this.state;
    const { match } = this.props;
    const { params } = match;
    const { hash } = params;
    try {
      await resetPassword({ newPassword, hash });
      this.setState({ sent: true });
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  renderForm = () => {
    const {
      newPassword, confirmPassword,
    } = this.state;
    return (
      <form onSubmit={this.submitForm}>
        <h3>Reset Password</h3>
        <div className="input">
          <input
            type="password"
            value={newPassword}
            onChange={this.handleinput}
            name="newPassword"
            placeholder="New Password"
            required
            maxLength="100"
          />
        </div>
        <div className="input">
          <input
            type="password"
            value={confirmPassword}
            onChange={this.handleinput}
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            maxLength="100"
          />
        </div>

        <div className="actions">
          <input type="submit" value="Submit" />
          <a href="/"> Login </a>

        </div>

      </form>
    );
  };

  render() {
    const { sent } = this.state;
    return (
      <div>
        <Header />
        <section className="custom-account-container-wrapper">
          <div className="container row form-group">
            {!sent ? this.renderForm()
              : (
                <div>
                  <p>Password changed successfully. Login using new password.</p>
                  <a href="/"> Login </a>
                </div>
              )
            }
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
