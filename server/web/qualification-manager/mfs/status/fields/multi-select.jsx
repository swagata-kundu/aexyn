import React from 'react';
import _ from 'lodash';

const MultiSelect = ({ text, answer = {} }) => (
    <table>
      <tbody>
        <tr>
          <td>
            {text}
          </td>
          <td>
            {answer.value ? answer.value.toString() : 'NA'}
          </td>
        </tr>
      </tbody>
    </table>
  );

export default MultiSelect;
