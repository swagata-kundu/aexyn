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
                <NavLink to="/manage-food-suppliers/invite/by-search">
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage-food-suppliers/invite/by-email">
                  Email
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage-food-suppliers/invite/by-link">
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
