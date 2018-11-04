import React from 'react';

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
              <li className="active">
                <a href="#">Manage Food Suppliers</a>
              </li>
              <li>
                <a href="#">Invitations From Jungles</a>
              </li>
              <li>
                <a href="#">Permissions &amp; Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Tabs;
