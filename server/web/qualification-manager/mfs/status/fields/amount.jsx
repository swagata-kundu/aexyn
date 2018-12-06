import React from 'react';

const Amount = ({ text, answer = {} }) => (

  <table>
    <tbody>
      <tr>
        <td>
          {text}
        </td>
        <td>
          <span className="dollar-icon">$</span>
          {answer.value ? answer.value : '0'}
        </td>
      </tr>
    </tbody>
  </table>

);

export default Amount;
