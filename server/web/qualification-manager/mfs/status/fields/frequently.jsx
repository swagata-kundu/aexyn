import React from 'react';

const Frequently = ({ text, answer = {} }) => (
  <table>
    <tbody>
      <tr>
        <td>
          {text}
        </td>
        <td>
          {answer.value ? answer.value : 'NA'}
        </td>
      </tr>
    </tbody>
  </table>
);

export default Frequently;
