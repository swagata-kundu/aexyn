import React, { Component } from 'react';
import _ from 'lodash';
import SideMenu from './sidemenu';
import { getQuestions } from '../../../service/qualification-manager';

export default class Configure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {},
      questionTypes: [],
    };
  }

  componentDidMount=async () => {
    const r = await getQuestions();
    const questions = _.get(r, 'questions', {});
    const questionTypes = _.get(r, 'questionTypes', []);
    const { questionSet } = r;
    this.setState({
      questions, questionTypes, questionSet,
    });
  }

  render() {
    return (
      <section
        className="custom-body-container-wrapper"
        style={{ paddingLeft: 50 }}
      >
        <div className="custom-body-container custom-questionnaire-section">
          <SideMenu />

          <div className="custom-right-group">
            <form>
              <div className="top-group clearfix">
                <h1>Qualification Questionnaire</h1>
                <span className="button-group">
                  <button type="button" className="custom-ques-cancel-btn">
                    Cancel
                  </button>
                  <button type="submit" className="custom-btn custom-ques-btn">
                    Save
                  </button>
                </span>
              </div>
              <div className="content-group">
                <p>
                  Customize the questionnaire that your supplier will be asked
                  to complete:
                </p>
                <div className="content-item">
                  <h3>Opening Statement</h3>
                  <p>
                    Please complete all of the questions. The contents of this
                    questionnaire will be considered confidention and used
                    safety to determine your firm's qualification and will not
                    be disclosed to others.
                  </p>
                </div>
                <div className="content-item">
                  <div className="form-edit-group">
                    <h3>Company Profile</h3>
                    <table>
                      <tbody>
                        <tr>
                          <th>Question</th>
                          <th>Response Type</th>
                          <th>Include?</th>
                          <th>Required?</th>
                        </tr>
                        <tr>
                          <td>Company Name</td>
                          <td>Text Response</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Office Location</td>
                          <td>List of office location</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                            {' '}
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                            {' '}
                          </td>
                        </tr>
                        <tr>
                          <td>Business Type</td>
                          <td>multi-select</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                            {' '}
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />
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
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                            {' '}
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />
                            {' '}
                          </td>
                        </tr>
                        <tr>
                          <td>Number of employees</td>
                          <td>list of employees by dept</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                            {' '}
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />
                            {' '}
                          </td>
                        </tr>
                        <tr>
                          <td>Owner/officers of your company</td>
                          <td>list of name/email/phone</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                            {' '}
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />
                            {' '}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <span className="ad-field">
                      <i className="fa fa-plus-circle" aria-hidden="true" />
                      {' '}
                      add
                      a field
                    </span>
                  </div>
                </div>
                <div className="content-item">
                  <div className="form-edit-group">
                    <h3>Certificate &amp; Licenses</h3>
                    <table>
                      <tbody>
                        <tr>
                          <th>Question</th>
                          <th>Response Type</th>
                          <th>Include?</th>
                          <th>Required?</th>
                        </tr>
                        <tr>
                          <td>Professional Licenses</td>
                          <td>list of licenses</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />
                          </td>
                        </tr>
                        <tr>
                          <td>Trade Unions</td>
                          <td>list of unions incl. expiration</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            MBE,WBE,SBE or any other type of certified business
                            enterprises
                          </td>
                          <td>list of licenses</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />
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
                          <th>Question</th>
                          <th>Response Type</th>
                          <th>Include?</th>
                          <th>Required?</th>
                        </tr>
                        <tr>
                          <td>Attach a copy of your safety program</td>
                          <td>attach file</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />
                          </td>
                        </tr>
                        <tr>
                          <td>Do you have safety officer or department</td>
                          <td>yes/no, if yes explain</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Provide your Workers Compensation Experience
                            Modification Rate (EMR)
                          </td>
                          <td>data for last 4 years</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Attach your insurance agent's EMR Verification
                            Letter
                          </td>
                          <td>attach file</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            How often do you hold regular safety meetings for
                            field supervisors?
                          </td>
                          <td>frequency dropdown</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />
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
                          <th>Question</th>
                          <th>Response Type</th>
                          <th>Include?</th>
                          <th>Required?</th>
                        </tr>
                        <tr>
                          <td>Full Name</td>
                          <td>text response</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />
                          </td>
                        </tr>
                        <tr>
                          <td>Title</td>
                          <td>text response</td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />
                          </td>
                        </tr>
                        <tr />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
