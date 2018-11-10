import React from 'react';

const SideBar = () => (
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
      <h3>Offices:</h3>
      <ul>
        <li><a href="#">Delhi</a></li>
        <li><a href="#">Gurgaon</a></li>
      </ul>
    </div>
  </div>
);

export default SideBar;
