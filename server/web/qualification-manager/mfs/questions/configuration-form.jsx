import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

const ConfigureQuestion = (props) => {
  const { handleSubmit, onSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="custom-edit-ques-group">
        <div className="top-group clearfix">
          <h1>Qualification Questionnaire</h1>
          <span className="button-group">
            <a href="#" className="custom-ques-cancel-btn">
              Cancel
            </a>
            <a href="#" className="custom-btn custom-ques-btn">
              Save
            </a>
          </span>
        </div>
        <div className="content-group">
          <p>
            Customize the questionnaire that your supplier will be asked to
            complete:
          </p>
          <div className="content-item">
            <h3>Opening Statement</h3>
            <textarea
              defaultValue={
                "Please complete all of the questions. The contents of this questionnaire will be considered confidention and used safety to determine your firm's qualification and will not be disclosed to others."
              }
            />
          </div>
          <div className="content-item">
            <div className="form-edit-group">
              <h3>Company Profile</h3>
              <table>
                <tbody>
                  <tr>
                    <th className="text-left">Question</th>
                    <th className="text-left">Response Type</th>
                    <th>Include?</th>
                    <th>Required?</th>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Company Name</td>
                    <td>Text Response</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                    </td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                    </td>
                  </tr>
                  <tr>
                    <td>Office Location</td>
                    <td>List of office location</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                      {' '}
                    </td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                      {' '}
                    </td>
                  </tr>
                  <tr>
                    <td>Business Type</td>
                    <td>multi-select</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                      {' '}
                    </td>
                    <td>
                      <input type="checkbox" defaultValue />
                      {' '}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Does someone outside of your company perform your
                      estimating?
                    </td>
                    <td>yes/no,if yes explain</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                      {' '}
                    </td>
                    <td>
                      <input type="checkbox" defaultValue />
                      {' '}
                    </td>
                  </tr>
                  <tr>
                    <td>Number of employees</td>
                    <td>list of employees by dept</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                      {' '}
                    </td>
                    <td>
                      <input type="checkbox" defaultValue />
                      {' '}
                    </td>
                  </tr>
                  <tr>
                    <td>Owner/officers of your company</td>
                    <td>list of name/email/phone</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                      {' '}
                    </td>
                    <td>
                      <input type="checkbox" defaultValue />
                      <span className="remove-row-value">
                        <i className="fa fa-times" aria-hidden="true" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" placeholder="Custom Question" />
                    </td>
                    <td>
                      <select>
                        <option>dollar amount</option>
                        <option>attach file</option>
                        <option>number</option>
                        <option>percentage</option>
                        <option>text responsive</option>
                        <option>yes or no</option>
                        <option>yes/no, if no explain</option>
                        <option>yes/no, if yes explain</option>
                      </select>
                    </td>
                    <td>
                      <input type="checkbox" className="include-check" />
                    </td>
                    <td>
                      <input type="checkbox" className="requare-check" />
                      <span className="add-row-value">
                        <i className="fa fa-check" aria-hidden="true" />
                      </span>
                    </td>
                  </tr>
                  <tr className="add-feld-btn-wrp">
                    <td>
                      <span className="ad-field">
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                        {' '}
                        add a field
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="content-item">
            <div className="form-edit-group">
              <h3>Certificate &amp; Licenses</h3>
              <table>
                <tbody>
                  <tr>
                    <th className="text-left">Question</th>
                    <th className="text-left">Response Type</th>
                    <th>Include?</th>
                    <th>Required?</th>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Professional Licenses</td>
                    <td>list of licenses</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                    </td>
                    <td>
                      <input type="checkbox" defaultValue />
                    </td>
                  </tr>
                  <tr>
                    <td>Trade Unions</td>
                    <td>list of unions incl. expiration</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                    </td>
                    <td>
                      <input type="checkbox" defaultValue />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      MBE,WBE,SBE or any other type of certified business
                      enterprises
                    </td>
                    <td>list of licenses</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                    </td>
                    <td>
                      <input type="checkbox" defaultValue />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="content-item">
            <div className="form-edit-group">
              <h3>Health &amp; Safety</h3>
              <table>
                <tbody>
                  <tr>
                    <th className="text-left">Question</th>
                    <th className="text-left">Response Type</th>
                    <th>Include?</th>
                    <th>Required?</th>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Attach a copy of your safety program</td>
                    <td>attach file</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                    </td>
                    <td>
                      <input type="checkbox" defaultValue />
                    </td>
                  </tr>
                  <tr>
                    <td>Do you have safety officer or department</td>
                    <td>yes/no, if yes explain</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                    </td>
                    <td>
                      <input type="checkbox" defaultValue />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Provide your Workers Compensation Experience Modification
                      Rate (EMR)
                    </td>
                    <td>data for last 4 years</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                    </td>
                    <td>
                      <input type="checkbox" defaultValue />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Attach your insurance agent's EMR Verification Letter
                    </td>
                    <td>attach file</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                    </td>
                    <td>
                      <input type="checkbox" defaultValue />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      How often do you hold regular safety meetings for field
                      supervisors?
                    </td>
                    <td>frequency dropdown</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                    </td>
                    <td>
                      <input type="checkbox" defaultValue />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="content-item">
            <div className="form-edit-group">
              <h3>Signature</h3>
              <table>
                <tbody>
                  <tr>
                    <th className="text-left">Question</th>
                    <th className="text-left">Response Type</th>
                    <th>Include?</th>
                    <th>Required?</th>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Full Name</td>
                    <td>text response</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                    </td>
                    <td>
                      <input type="checkbox" defaultValue />
                    </td>
                  </tr>
                  <tr>
                    <td>Title</td>
                    <td>text response</td>
                    <td>
                      <input type="checkbox" defaultValue defaultChecked />
                    </td>
                    <td>
                      <input type="checkbox" defaultValue />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const ConfigureQuestionConnected = reduxForm({
  form: 'configureQuestion',
})(ConfigureQuestion);

export default ConfigureQuestionConnected;
