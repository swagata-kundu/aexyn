import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      step: 1,
    };
  }

  handleinput = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitForm=(e) => {
    e.preventDefault();
    let { step } = this.state;
    if (step === 1) {
      step += 1;
      this.setState({ step });
    }
  }

  back=() => { this.setState({ step: 1 }); }

  renderForm = () => {
    const { email, password, step } = this.state;
    return (
      <form onSubmit={this.submitForm}>
        <h3>Sign into Your</h3>
        <h1>Aexyn Account</h1>
        {step === 1 ? (
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
        ) : (
          <div className="input">
            <input
              type="password"
              value={password}
              onChange={this.handleinput}
              name="password"
              placeholder="Password"
              required
              maxLength="100"
            />
          </div>
        )}
        {step === 1 ? (
          <div className="actions">
            <input type="submit" value="Next" />
          </div>
        ) : (
          <div>
            <div className="actions">
              <input type="submit" value="Submit" />
            </div>
            <div className="actions">
              <button type="button" onClick={this.back}>Back</button>
            </div>
          </div>
        )}
      </form>
    );
  };

  render() {
    return (
      <div>
        <Header />
        <section className="custom-account-container-wrapper">
          <div className="container">
            <div className="row">
              <div className="form-group">
                {this.renderForm()}
                <div className="form-bottom-content">
                  <center>
                    <a href="/create-account">Need an Account?</a>
                  </center>
                  <p>How do i get an account?</p>
                  <p>
                    Aexyn is currently only available via invitation. The
                    easiest way to start using the platform is to get invited to
                    bid on an upcoming project from a GC or Owner who already
                    uses the Aexyn platform, or get invited to an office by one
                    of your colleagues. Once you get invited, you'll receive an
                    email that will prompt you to create an account. Please
                    contact
                    {' '}
                    <a href="#">support@aexyn.com</a>
                    . if you have any questions.
                  </p>
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
