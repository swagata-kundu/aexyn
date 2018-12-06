import React from 'react';

let str_array = [];
let calulateLength = 0;

const QuestionierCompany = (props) => {
  const { data, selectCompany } = props;
  const { qualification_status } = data;
  if (data !== undefined && data.locations !== undefined) {
    str_array = data.locations.split(',');

    for (let i = 0; i < str_array.length; i += 1) {
      str_array[i] = str_array[i].replace(/^\s*/, '').replace(/\s*$/, '');
    }
  }

  let statusText = 'Not Invited to Qualify';
  if (qualification_status === 'SENT') {
    statusText = 'Invitation Sent';
  } else if (qualification_status === 'IN_PROGRESS') {
    statusText = 'Invitation In-Progress';
  }

  if (str_array.length > 4) {
    calulateLength = str_array.length - 4;
  }
  return (
    <tr className="has-border">
      <td className="custom-search-tb-data">
        <div className="custom-tb-left-col">
          <i className="fa fa-building-o" aria-hidden="true" />
        </div>
        <div className="custom-tb-rght-col">
          <div className="tb-row-1">
            <a href="#">{data.name}</a>
            {' '}
            <span className="devider">|</span>
            {' '}
            <span>{str_array[0]}</span>
          </div>
          <div className="tb-row-1">
            {str_array.length > 0
              && str_array.map((tagname, index) => (
                <span key={index} className="custom-tag">
                  {tagname}
                </span>
              ))}

            {calulateLength > 0 && (
              <span className="custom-tag more-tag">
                +
                <i className="more-tag-val">{calulateLength}</i>
                {' '}
More
              </span>
            )}
          </div>
        </div>
      </td>
      <td>
        <b>{statusText}</b>
      </td>
      <td>
        <i>None for this work performed</i>
      </td>
      <td>
        <div className="align-center" onClick={() => selectCompany(data.id)}>
          <a href="#" className="custom-more-btn">
            Click Here for Invite
          </a>
        </div>
      </td>
    </tr>
  );
};

export default QuestionierCompany;
