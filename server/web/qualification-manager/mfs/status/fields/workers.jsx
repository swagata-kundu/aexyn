import React from 'react';

const Workers = ({ answer = {}, text }) => (

  <div>
    <h5>{text}</h5>
    <table>
      <tbody>
        <tr>
          <th>General Liability aggregriate</th>
          <th>General Liability Single Occur</th>
          <th>Workers compensation</th>
          <th>Automobile</th>
        </tr>
        <tr>
          <td>{answer.gl}</td>
          <td>{answer.gls}</td>
          <td>{answer.wc}</td>
          <td>{answer.auto}</td>
        </tr>
      </tbody>
    </table>
  </div>


);

export default Workers;
