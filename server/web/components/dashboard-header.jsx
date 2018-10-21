import React from 'react';

const DashBoardHeader = () => (
  <header className="custom-header-container-wrapper">
    <div className="custom-header-container" style={{ minHeight: '44.5781px' }}>
      <div className="header-group">
        <div className="col-md-3 pull-left logo">
          <a href="/">
            <img src="/static/images/aexyn-logo.png" alt="Aexyn" />
          </a>
        </div>
        <div className="col-md-9 pull-left" style={{ textAlign: 'right' }}>
          <a href="/sign-up" className="pull-right">
            Sign In
          </a>
        </div>
      </div>
    </div>
    <div className="custom-sidebar-wrapper">
      <div className="sidebar-group">
        <div className="sidebar-nav">
          <ul>
            <li>
              <a href="/user">
                <i className="fa fa-user-circle-o" aria-hidden="true" />
                <span className="menu-text">Ajay</span>
              </a>
            </li>
            <li>
              <a href="/companies">
                <i className="fa fa-building-o" aria-hidden="true" />
                <span className="menu-text">Ajay Mech</span>
              </a>
            </li>
            <li>
              <a href="/projects">
                <i className="fa fa-list-ul" aria-hidden="true" />
                <span className="menu-text">Projects</span>
              </a>
            </li>
            <li>
              <a hres="/opportunities">
                <i className="fa fa-database" aria-hidden="true" />
                <span className="menu-text">Opportunities</span>
              </a>
            </li>
            <li>
              <a href="/qualifications">
                <i className="fa fa-tasks" aria-hidden="true" />
                <span className="menu-text">Qualifications</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="custom-sidebar-recent-view">
          <h3>Recently Viewed:</h3>
          <ul>
            <li>
              <a href="#">Nothing viewed yet</a>
            </li>
          </ul>
        </div>
        <div className="custom-sidebar-login-details">
          <ul>
            <li>
              <a href="#">Sign Out</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default DashBoardHeader;
