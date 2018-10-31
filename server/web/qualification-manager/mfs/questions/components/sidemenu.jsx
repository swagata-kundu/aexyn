import React from 'react';

const Sidemenu = () => (
  <div className="custom-left-group">
    <div className="top-group">
      <a href="/qualification-manager/manage-food-suppliers">
        <i className="fa fa-long-arrow-left" aria-hidden="true" />
{' '}
Back to
        Dashboard
</a>
    </div>
    <div className="middle-group">
      <h3>Section</h3>
      <ul>
        <li>
          <a href="#">Company Profile</a>
        </li>
        <li>
          <a href="#">Certification &amp; Licenses</a>
        </li>
        <li>
          <a href="#">Health &amp; Safety</a>
        </li>
        <li>
          <a href="#">Insurance &amp; Surety</a>
        </li>
        <li>
          <a href="#">Financials</a>
        </li>
        <li>
          <a href="#">Work Experience</a>
        </li>
        <li>
          <a href="#">Legal</a>
        </li>
        <li>
          <a href="#">Other</a>
        </li>
        <li>
          <a href="#">Signature</a>
        </li>
      </ul>
    </div>
    <div className="bottom-group">
      <h3>Questions?</h3>
      <p>
        Having trouble editing your questionnaire?
{' '}
        <a href="#">Email our support team</a>
      </p>
    </div>
  </div>
);


export default Sidemenu;
