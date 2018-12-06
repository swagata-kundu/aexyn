import React from 'react';
import _ from 'lodash';

const RenderLcenses = ({ answer = [], text }) => (
  <div>
    <h5>{text}</h5>
    <table>
      <tbody>
        <tr>
          <th>License Number</th>
          <th>Classification</th>
          <th>State</th>
          <th>Issuing Agency</th>
        </tr>
        {_.map(answer, (location, index) => (
          <tr key={index}>
            <td>{location.number}</td>
            <td>{location.classification}</td>
            <td>{location.state}</td>
            <td>{location.agency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

);

export default RenderLcenses;
