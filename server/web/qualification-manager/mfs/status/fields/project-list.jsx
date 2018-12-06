import React from 'react';
import _ from 'lodash';

const RenderProjects = ({ answer = [], text }) => (
  <div>
    <h5>{text}</h5>
    <table>
      <tbody>
        <tr>
          <th>Project Name</th>
          <th>Client</th>
          <th>Contract value</th>
          <th>Completion Date</th>
        </tr>
        {_.map(answer, (location, index) => (
          <tr key={index}>
            <td>{location.name}</td>
            <td>{location.client}</td>
            <td>{location.value}</td>
            <td>{location.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


export default RenderProjects;
