import React from 'react';

const VerifyEmail = () => (
  <section className="custom-account-container-wrapper">
    <div className="container">
      <div className="row">
        <div className="email-verification col-sm-7">
          <h2>Verify your email to View</h2>
          <p>
            You are logged in as
            <span className="email-text">abc@xyz.com</span>
            which has verified.
            Email verification is required as a security precaution.
          </p>
          <a className="email-verify-btn custom-btn">
            Resend Email Verification
          </a>
          <p>
            <small>
              Already verified your email?
              {' '}
              <a>
                <em>Reload this page</em>
              </a>
            </small>
            {' '}
            <br />
            <small>
              Need help?
              {' '}
              <a>
                <em>Email our support team.</em>
              </a>
            </small>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default VerifyEmail;
