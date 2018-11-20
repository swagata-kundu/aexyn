import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = ({ invitationId }) => (
  <div className="custom-section">
    <div className="custom-section-header-main-wrapper" style={{ minHeight: 105 }}>
      <div className="section-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1><span className="company-name">Talwar Electronics Application</span></h1>
            </div>
            <div className="col-sm-12">
              <div className="custom-body-nav">
                <ul>
                  <li><NavLink to={`/invitation-from-jungle/${invitationId}`}>Questionnaire</NavLink></li>
                  <li><NavLink to={`/invitation-from-jungle/${invitationId}/editors`}>Editors</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Tabs;
