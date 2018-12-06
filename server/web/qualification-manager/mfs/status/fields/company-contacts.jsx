import React from 'react';
import _ from 'lodash';

const RenderOffices = ({ answer = [], text }) => (
  <div>
    <h5>{text}</h5>
    <table>
      <tbody>
        <tr>
          <th>Company Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {_.map(answer, (location, index) => (
          <tr key={index}>
            <td>{location.company}</td>
            <td>{location.address}</td>
            <td>{location.phone}</td>
            <td>{location.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


);


export default RenderOffices;
