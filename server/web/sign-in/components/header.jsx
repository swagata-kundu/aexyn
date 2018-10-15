import React from 'react';

const Header = () => (
  <header className="custom-header-container-wrapper">
    <div className="custom-header-container">
      <div className="account-header-group">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 logo">
              <a href="/">
                <img src="/static/images/aexyn-logo.png" alt="Aexyn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
