import React from 'react';
import _ from 'lodash';

const File = ({ text, answer = {} }) => (
  <table>
    <tbody>
      <tr>
        <td>
          {text}
        </td>
        {_.map(answer.value, (f, index) => (
          <tr key={index}>
            <td>
              <a target="_blank" href={f.url}>{f.file_name}</a>
            </td>
          </tr>
        ))}
      </tr>
    </tbody>
  </table>
);

export default File;
