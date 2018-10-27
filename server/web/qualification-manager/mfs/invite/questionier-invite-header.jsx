import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class QuestionierInviteHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <div className="section-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1>Invite Suppliers to apply for Qualification </h1>
          </div>
          <div className="col-sm-12">
            <ul className="custom-axeyn-tabber-list">
              <li>
                <NavLink to="/invite/by-search" activeClassName="selected">
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink to="/invite/by-email" activeClassName="selected">
                  Email
                </NavLink>
              </li>
              <li>
                <NavLink to="/invite/by-link" activeClassName="selected">
                  Share Link
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionierInviteHeader;
