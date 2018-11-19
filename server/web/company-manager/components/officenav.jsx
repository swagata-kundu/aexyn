import React from 'react';
import { NavLink } from 'react-router-dom';

const OfficeNavigation = ({ office_id }) => (
  <div className="custom-section-header-main-wrapper" style={{ minHeight: '105px' }}>
    <div className="section-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1>Company Name</h1>
          </div>
          <div className="col-sm-12">
            <ul>
              <li>
                <NavLink to={`/offices/${office_id}/employees`}>Employees</NavLink>
              </li>
              <li>
                <NavLink to={`/offices/${office_id}/info`}>Office Information</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OfficeNavigation;
