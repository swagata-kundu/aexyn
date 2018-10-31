import React from 'react';

const noAccess = () => (
  <div className="custom-access-section clearfix">
    <div className="row">
      <div className="col-sm-6 custom-access-section-left-col">
        <div className="custom-access-section-left-col-inner">
          <div className="top-icon">
            <i className="fa fa-lock" aria-hidden="true" />
          </div>
          <h3>You don't have access</h3>
          <p>
            You're logged in as{' '}
            <a href="mailto:eeee1ea@grr.la">eeee1ea@grr.la</a>
            <br /> This account does not have access to view applications
          </p>
          <div className="bottom-content">
            <p>
              <small>
                Continuing to have problems? Email our support team at{' '}
                <a href="mailto:support@aexyn.com">support@aexyn.com</a>
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 custom-access-section-right-col">
        <div className="custom-access-section-right-col-inner">
          <p>Contact an employee below to request access:</p>
          <div className="member-sec">
            <div className="member-icon-left">
              <span className="member-left-icon">NK</span>
            </div>
            <div className="member-details-left">
              <a href="#">Nishant Kataria</a>
              <small>Job Title</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default noAccess;
