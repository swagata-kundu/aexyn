import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="custom-permission-tab-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <ul className="custom-axeyn-tabber-list tab-list-nav">
            <li>
              <NavLink to="/permission-settings/suppliers">For Suppliers</NavLink>
            </li>
            <li>
              <NavLink to="/permission-settings/jungle">For Jungles</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Nav;
