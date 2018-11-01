import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { resetPasswordLink } from '../../service/auth';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      sent: false,
    };
  }

  handleinput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


  submitForm = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    await resetPasswordLink({ email });
    this.setState({ sent: true });
  }

  renderForm = () => {
    const {
      email,
    } = this.state;
    return (
      <form onSubmit={this.submitForm}>
        <h3>Forget Password</h3>
        <div className="input">
          <input
            type="email"
            value={email}
            onChange={this.handleinput}
            name="email"
            placeholder="Email"
            required
            maxLength="100"
          />
        </div>

        <div className="actions">
          <input type="submit" value="Submit" />
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
                  <p>Link to reset password hass been sent to your email id.</p>
                  <a href="/"> Back </a>
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
