import React from 'react';
import _ from 'lodash';

const RenderUnions = ({ answer = [], text }) => (
  <div>
    <h5>{text}</h5>
    <table>
      <tbody>
        <tr>
          <th>Trade</th>
          <th>Aggrement</th>
          <th>Year Expires</th>
        </tr>
        {_.map(answer, (location, index) => (
          <tr key={index}>
            <td>{location.trade}</td>
            <td>{location.agreement}</td>
            <td>{location.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


);

export default RenderUnions;
