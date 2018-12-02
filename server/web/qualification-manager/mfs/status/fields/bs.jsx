import React from 'react';

const BusinessStructure = ({ text, answer = {} }) => (
  <div>
    <h5>{text}</h5>
    <table>
      <tbody>
        <tr>
          <th>Corporation Type</th>
          <th>State of Incorporation</th>
          <th>Year of Incorporation</th>
        </tr>
        <tr>
          <td>{answer.type}</td>
          <td>{answer.state}</td>
          <td>{answer.year}</td>
        </tr>
      </tbody>
    </table>
  </div>

);

export default BusinessStructure;
