import React from 'react';

const Nav = () => (
  <div className="custom-permission-tab-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <ul className="custom-axeyn-tabber-list tab-list-nav">
            <li className="active">
              <a href="/qualification-manager/permission-settings/suppliers">For Suppliers</a>
            </li>
            <li className>
              <a href="/qualification-manager/permission-settings/jungle">For Jungles</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Nav;
