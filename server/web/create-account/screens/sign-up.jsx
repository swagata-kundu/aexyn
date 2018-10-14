import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <header className="custom-header-container-wrapper">
          <div className="custom-header-container">
            <div className="account-header-group">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 logo">
                    <a href="/"><img src="../../../static/images/aexyn-logo.png" alt="Aexyn" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="custom-account-container-wrapper">
          <div className="container">
            <div className="row">
              <div className="form-group sign-up">
                <form>
                  <h3>Create an Aexyn account</h3>
                  <div className="input two-col-input clearfix">
                    <div><input type="text" name="firstname" placeholder="First Name" /></div>
                    <div><input type="text" name="lastname" placeholder="Last Name" /></div>
                  </div>
                  <div className="input">
                    <input type="email" name="email" placeholder="Email" />
                  </div>
                  <div className="input">
                    <input type="password" name="password" placeholder="Create a Password" />
                  </div>
                  <div className="checkbox-input">
                    <input type="checkbox" name="checkbox" defaultValue="check" id="agree" />
                    {' '}
I agree the Aexyn&nbsp;
                    <a href="#">terms of service</a>
&nbsp;and&nbsp;
                    <a href="#">privacy policy</a>
                  </div>
                  <div className="actions"><input type="submit" name="submit" defaultValue="Create Account" /></div>
                </form>
                <div className="form-bottom-content">
                  <center><a href="/sign-in">Already have an account?</a></center>
                  <h2>Tag Line</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer-container-wrapper">
          <div className="custom-footer-container">
            <div className="custom-footer-top-group">
              <div className="container">
                <div className="custom-footer-menu">
                  <div className="row">
                    <div className="col-sm-12">
                      <ul>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">Support</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
