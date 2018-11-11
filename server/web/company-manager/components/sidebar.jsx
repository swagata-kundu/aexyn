import React from 'react';
import { NavLink } from 'react-router-dom';


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
        <a href="#">
          <i className="fa fa-long-arrow-left" />
          {' '}
Back to Company
        </a>
        <ul>
          <li><a href="#">Add an office</a></li>
        </ul>
      </div>
      <div className="middle-group">
        {getOffices.length > 0 && getOffices.map(value => (
          <h3 key={value.id}><NavLink to={`/offices/${value.id}/employees`}>Offices:</NavLink></h3>
        ))}
        <ul>
          <li><a href="#">Delhi</a></li>
          <li><a href="#">Gurgaon</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
