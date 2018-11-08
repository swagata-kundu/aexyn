import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = () => (
  <div
    className="custom-section-header-main-wrapper"
    style={{ minHeight: 105 }}
  >
    <div className="section-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1>Qualification Manager </h1>
          </div>
          <div className="col-sm-12">
            <ul>
              <li>
                <NavLink to="/manage-food-suppliers/">Manage Food Suppliers</NavLink>
              </li>
              <li>
                <NavLink to="/not-implemented/">Invitations From Jungles</NavLink>
              </li>
              <li>
                <NavLink to="/permission-settings/">Permissions &amp; Settings</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Tabs;
