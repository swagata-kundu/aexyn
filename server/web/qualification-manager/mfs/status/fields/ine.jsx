import React from 'react';

const IfNoExplain = ({ text, answer }) => (
  <table>
    <tbody>
      <tr>
        <td>
          {text}
        </td>
        {answer ? (
          <td>
            {answer.yn ? 'Yes' : 'No'}
            <small>{answer.explain}</small>
          </td>
        ) : <td>NA</td>}
      </tr>
    </tbody>
  </table>);

export default IfNoExplain;
