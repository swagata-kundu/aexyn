import React from 'react';
import _ from 'lodash';


const YesNoDescribe = ({ text, answer }) => (
  <table>
    <tbody>
      <tr>
        <td>
          {text}
        </td>
        {answer ? (
          <td>
            {answer.yn ? 'Yes' : 'No'}
            <small>{answer.explain}</small>
          </td>
        ) : <td>NA</td>}
        {_.map(answer.files, (f, index) => (
          <tr key={index}>
            <td>
              <a target="_blank" href={f.url}>{f.file_name}</a>
            </td>
          </tr>
        ))}
      </tr>
    </tbody>
  </table>);

export default YesNoDescribe;
