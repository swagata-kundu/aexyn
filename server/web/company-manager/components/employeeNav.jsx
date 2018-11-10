import React from 'react';

const EmployeeNavgation = () => (
  <div className="custom-section-header-main-wrapper" style={{ minHeight: '105px' }}>
    <div className="section-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1>Company Name</h1>
          </div>
          <div className="col-sm-12">
            <ul>
              <li className="active">
                <a href="/company-manager/offices/1/employees">Employees</a>
              </li>
              <li>
                <a href="/company-profile">Office Information</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EmployeeNavgation;
