import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const SideBar = (props) => {
  const { getOffices } = props;
  return (
    <div className="custom-left-group">
      <div className="custom-siebar-user-detail">
        <div className="custom-user-company-name">
          <h3>COMPANY:</h3>
          <ul>
            <li>Karvie</li>
          </ul>
        </div>
      </div>
      <div className="top-group">
        <NavLink to="/offices">
          <i className="fa fa-long-arrow-left" />
          Back to Company
        </NavLink>
        <ul>
          <li><NavLink to="/offices/create">Add an office</NavLink></li>
        </ul>
      </div>
      <div className="middle-group">
        <ul>
          {getOffices.map(o => (
            <li key={o.id}><NavLink to={`/offices/${o.id}/employees`}>{o.city}</NavLink></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default connect(state => ({
  getOffices: state.company.getOffices,
}))(SideBar);
