import React from 'react';

const RenderLcenses = ({ answers = [], text }) => (
  <div>
    <h5>{text}</h5>
    <table>
      <tbody>
        <tr>
          <th>license Number</th>
          <th>Classification</th>
          <th>State</th>
          <th>Issuing Agency</th>
        </tr>
        {answers.map((location, index) => (
          <tr key={index}>
            <td>{`${location}.number`}</td>
            <td>{`${location}.classification`}</td>
            <td>{`${location}.state`}</td>
            <td>{`${location}.agency`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

);

export default RenderLcenses;
