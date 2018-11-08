import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ heading }) => (
  <div className="custom-section-header-main-wrapper" style={{ minHeight: 105 }}>
    <div className="section-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12"><h1>{heading}</h1></div>
          <div className="col-sm-12">
            <ul>
              <li><NavLink to="/">Profile</NavLink></li>
              <li><NavLink to="/account">Account Settings</NavLink></li>
              <li><NavLink to="/notification">Notification Preferences</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Nav;
