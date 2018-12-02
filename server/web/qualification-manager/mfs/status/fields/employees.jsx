import React from 'react';
import { Field } from 'redux-form';

const Employees = ({ text, answer = {} }) => (
  <div>
    <h5>{text}</h5>
    <table>
      <tbody>
        <tr>
          <th>Department</th>
          <th className="text-right">Number of Employees</th>
        </tr>
        <tr>
          <td>Estimating Department</td>
          <td className="text-right">{answer.ed}</td>
        </tr>
        <tr>
          <td>Field Supervision</td>
          <td className="text-right">{answer.fs}</td>
        </tr>
        <tr>
          <td>Tradespeople</td>
          <td className="text-right">{answer.tp}</td>
        </tr>
        <tr>
          <td>Clerical/Accounting</td>
          <td className="text-right">{answer.ca}</td>
        </tr>
        <tr>
          <td>Other</td>
          <td className="text-right">{answer.ot}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td className="text-right">{answer.total}</td>
        </tr>
      </tbody>
    </table>
  </div>
);
export default Employees;
