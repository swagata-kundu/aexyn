import React from 'react';

const Header = () => (
  <header className="custom-header-container-wrapper">
    <div className="custom-header-container">
      <div className="header-group">
        <div className="col-md-3 pull-left logo">
          <a href="/">
            <img src="/static/images/aexyn-logo.png" alt="Aexyn" />
          </a>
        </div>
        <div className="col-md-9 pull-left text-right">
          <a href="/sign-up" className="pull-right">
            Sign In
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
