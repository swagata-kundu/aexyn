import React from 'react';

const ProjectDetail = ({ answer = {}, text }) => (

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
        <tr>
          <td>{answer.name}</td>
          <td>{answer.client}</td>
          <td>{answer.value}</td>
          <td>{answer.date}</td>
        </tr>
      </tbody>
    </table>
  </div>


);

export default ProjectDetail;
