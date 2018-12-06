import React from 'react';
import _ from 'lodash';

const RenderAffiliations = ({ answer = [], text }) => (
  <div>
    <h5>{text}</h5>
    <table>
      <tbody>
        <tr>
          <th>Description of affilation of Membership</th>
        </tr>
        {_.map(answer, (location, index) => (
          <tr key={index}>
            <td>{location.affiliation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


);


export default RenderAffiliations;
