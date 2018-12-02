import React from 'react';
import moment from 'moment';

const YearlyData = ({ text, answer }) => {
  const currentYear = parseInt(moment().format('YYYY'), 10);
  return (
    <div>
      <h5>{text}</h5>
      <table>
        <tbody>
          <tr>
            <th>{currentYear}</th>
            <th>{currentYear - 1}</th>
            <th>{currentYear - 2}</th>
            <th>{currentYear - 3}</th>
          </tr>
          <tr>
            <td>{answer.year1 ? answer.year1 : '--'}</td>
            <td>{answer.year2 ? answer.year2 : '--'}</td>
            <td>{answer.year3 ? answer.year3 : '--'}</td>
            <td>{answer.year4 ? answer.year4 : '--'}</td>
          </tr>
        </tbody>
      </table>


    </div>
  );
};

export default YearlyData;
