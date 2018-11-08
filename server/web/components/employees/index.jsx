import React from 'react';
import _ from 'lodash';

export const EmployeeName = ({
  user_id, first_name, last_name, job_title,
}) => {
  const icon = `${_.get(first_name, '0', '').toLocaleUpperCase()}${_.get(
    last_name,
    '0',
    '',
  ).toLocaleUpperCase()}`;
  return (
    <div key={user_id} className="member-detail">
      <div className="icon-group">
        <span className="member-icon">{icon}</span>
      </div>
      <div className="detail-group">
        <a href="#" className="member-name">
          {`${first_name} ${last_name}`}
        </a>
        <small className="designation">{job_title}</small>
      </div>
    </div>
  );
};
