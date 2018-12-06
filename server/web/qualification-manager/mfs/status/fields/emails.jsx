import React from 'react';
import _ from 'lodash';

const RenderContacts = ({ answer = [], text }) => (
  <div>
    <h5>{text}</h5>
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {_.map(answer, (location, index) => (
          <tr key={index}>
            <td>{location.name}</td>
            <td>{location.email}</td>
            <td>{location.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


);


export default RenderContacts;
