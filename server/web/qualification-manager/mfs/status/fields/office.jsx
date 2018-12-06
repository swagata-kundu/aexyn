import React from 'react';
import _ from 'lodash';


const RenderOffices = ({ answer = [], text }) => (
  <div>
    <h5>{text}</h5>
    <table>
      <tbody>
        <tr>
          <th>Office Name</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
        {_.map(answer, (location, index) => (
          <tr key={index}>
            <td>{location.name}</td>
            <td>{location.address}</td>
            <td>{location.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

);


export default RenderOffices;
