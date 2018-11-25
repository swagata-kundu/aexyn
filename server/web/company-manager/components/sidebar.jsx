import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const SideBar = (props) => {
  const { offices, userInfo } = props;
  return (
    <div className="custom-left-group">
      <div className="custom-siebar-user-detail">
        <div className="custom-user-company-name">
          <h3>COMPANY:</h3>
          <ul>
            <li>{userInfo.company_name}</li>
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
          {offices.map(o => (
            <li key={o.id}><NavLink to={`/offices/${o.id}/employees`}>{o.name}</NavLink></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default connect(state => ({
  offices: state.company.offices,
  userInfo: state.common.get('userInfo').toJS(),
}))(SideBar);
