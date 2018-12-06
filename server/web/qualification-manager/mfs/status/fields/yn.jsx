import React from 'react';

const YesNo = ({ text, answer }) => (
  <table>
    <tbody>
      <tr>
        <td>
          {text}
        </td>
        {answer ? (
          <td>
            {answer.yn ? 'Yes' : 'No'}
          </td>
        ) : <td>NA</td>}
      </tr>
    </tbody>
  </table>
);

export default YesNo;
