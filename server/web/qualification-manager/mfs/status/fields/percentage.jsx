import React from 'react';

const Text = ({ text, answer = {} }) => (
  <table>
    <tbody>
      <tr>
        <td>
          {text}
        </td>
        <td>
          {answer.value ? answer.value : '0'}
          <span className="percent-icon">%</span>
        </td>
      </tr>
    </tbody>
  </table>
);
export default Text;
