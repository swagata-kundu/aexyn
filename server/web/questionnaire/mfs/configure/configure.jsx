import React from 'react';
import SideMenu from './sidemenu';

const Configure = () => {
  return (
    <section
      className="custom-body-container-wrapper"
      style={{ paddingLeft: 50 }}
    >
      <div className="custom-body-container custom-questionnaire-section">
     
          <SideMenu />
        
          <div className="custom-right-group">
            <div className="custom-preview-ques-group">
              <div className="top-group clearfix">
                <h1>Qualification Questionnaire</h1>
                <span className="button-group">
                  <a href="#" className="custom-btn custom-ques-btn">
                    Configure Questionnaire
                  </a>
                </span>
              </div>
              <div className="bottom-group">
                <p>
                  This is a preview of questionnaire that your supplier will be
                  asked to complete:
                </p>
                <div className="content-group">
                  <div className="content-item">
                    <h3>Opening Statement</h3>
                    <p>
                      Please complete all the questions. The contents of this
                      questionnaire will be considered confidention and used
                      safety to determine your firm's qualification and will not
                      be disclosed to others.
                    </p>
                  </div>
                  <div className="form-group">
                    <h3>Company profile</h3>
                    <form>
                      <div className="form-field single-col left-label">
                        <div className="label-text">
                          <label>Company Name</label>
                        </div>
                        <div className="input-field">
                          <input
                            type="text"
                            name="companyname"
                            placeholder="Company Name"
                          />
                        </div>
                      </div>
                      <div className="form-field input-column three-form-field clearfix">
                        <label>Office Location</label>
                        <div className="column-1">
                          <div className="form-text">Office Name</div>
                          <input
                            type="text"
                            name="companyname"
                            placeholder="Company Name"
                          />
                        </div>
                        <div className="column-2">
                          <div className="form-text">Address</div>
                          <input
                            type="text"
                            name="address"
                            placeholder="Address"
                          />
                        </div>
                        <div className="column-3">
                          <div className="form-text">phone</div>
                          <input
                            type="tel"
                            name="telephone"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="additional-input">
                        <i className="fa fa-plus-circle" aria-hidden="true" />{' '}
                        add a location
                      </div>
                      <div className="form-field left-label">
                        <div className="label-text">
                          <label>Business Type</label>
                        </div>
                        <div className="input-field">
                          <select>
                            <option value>Select</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-field left-label">
                        <div className="label-text">
                          <label>Labor Type</label>
                        </div>
                        <div className="input-field">
                          <select>
                            <option value>Select</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-field left-label">
                        <div className="label-text">
                          <label>Enterprise Type</label>
                        </div>
                        <div className="input-field">
                          <select>
                            <option value>Select</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-field left-label">
                        <div className="label-text">
                          <label>Work Performed</label>
                        </div>
                        <div className="input-field">
                          <select>
                            <option value>Select</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-field input-column clearfix">
                        <label>Ownersip/Business Structure</label>
                        <div className="three-form-field clearfix">
                          <div className="column-1">
                            <div className="form-text">Corporation Type</div>
                            <input
                              type="text"
                              name="corporationtype"
                              placeholder="Company Name"
                            />
                          </div>
                          <div className="column-2">
                            <div className="form-text">
                              State of Incorporation
                            </div>
                            <input
                              type="text"
                              name="stateofincorporation"
                              placeholder="Address"
                            />
                          </div>
                          <div className="column-3">
                            <div className="form-text">
                              Year of Incorporation
                            </div>
                            <input
                              type="tel"
                              name="yearofincorporation"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-field">
                        <div className="radio-label">
                          <label>Label Text</label>
                          <div className="radio-check">
                            <input type="radio" name="no" defaultValue="No" />{' '}
                            No{' '}
                          </div>
                          <div className="radio-check">
                            <input type="radio" name="yes" defaultValue="Yes" />{' '}
                            Yes
                          </div>
                        </div>
                      </div>
                      <div className="form-field left-label">
                        <div className="label-text">
                          <label>If Yes, Please Explain</label>{' '}
                        </div>
                        <div className="input-field">
                          <input type="text" name="workperformed" placeholder />
                        </div>
                      </div>
                      <div className="form-field">
                        <div className="radio-label">
                          <label>Label Text</label>
                          <div className="radio-check">
                            <input type="radio" name="no" defaultValue="No" />{' '}
                            No{' '}
                          </div>
                          <div className="radio-check">
                            <input type="radio" name="yes" defaultValue="Yes" />{' '}
                            Yes
                          </div>
                        </div>
                      </div>
                      <div className="form-field left-label">
                        <div className="label-text">
                          <label>If Yes, Please Explain</label>{' '}
                        </div>
                        <div className="input-field">
                          <input type="text" name="workperformed" placeholder />
                        </div>
                      </div>
                      <div className="form-field">
                        <div className="radio-label">
                          <label>Label Text</label>
                          <div className="radio-check">
                            <input type="radio" name="no" defaultValue="No" />{' '}
                            No{' '}
                          </div>
                          <div className="radio-check">
                            <input type="radio" name="yes" defaultValue="Yes" />{' '}
                            Yes
                          </div>
                        </div>
                      </div>
                      <div className="form-field left-label">
                        <div className="label-text">
                          <label>If Yes, Please Explain</label>{' '}
                        </div>
                        <div className="input-field">
                          <input type="text" name="workperformed" placeholder />
                        </div>
                      </div>
                      <div className="additional-input">
                        <i className="fa fa-plus-circle" aria-hidden="true" />{' '}
                        upload files
                      </div>
                    </form>
                  </div>
                  <div className="form-group">
                    <h3>Company profile</h3>
                    <form>
                      <div className="form-field">
                        <div className="label-text">
                          <label>Company Name</label>
                        </div>
                        <div className="input-field">
                          <input type="file" name accept="image/*" />
                        </div>
                      </div>
                      <div className="form-field">
                        <div className="label-text">
                          <label>Company Name</label>
                        </div>
                        <div className="input-field">
                          <select>
                            <option value>Placeholder</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-field input-column two-col-form-field clearfix">
                        <label>Number of Employees</label>
                        <div className="form-text">
                          <div className="department">Department</div>
                          <div className="employee-number">
                            Number of Employees
                          </div>
                        </div>
                        <div className="form-field">
                          <div className="label-text">
                            <label>Estimating Department</label>
                          </div>
                          <div className="input-field">
                            <input type="number" name placeholder />
                          </div>
                        </div>
                        <div className="form-field">
                          <div className="label-text">
                            <label>Field Supervision</label>
                          </div>
                          <div className="input-field">
                            <input type="number" name placeholder />
                          </div>
                        </div>
                        <div className="form-field">
                          <div className="label-text">
                            <label>Tradespeople</label>
                          </div>
                          <div className="input-field">
                            <input type="number" name placeholder />
                          </div>
                        </div>
                        <div className="form-field">
                          <div className="label-text">
                            <label>Clerical / Accounting</label>
                          </div>
                          <div className="input-field">
                            <input type="number" name placeholder />
                          </div>
                        </div>
                        <div className="form-field">
                          <div className="label-text">
                            <label>Other</label>
                          </div>
                          <div className="input-field">
                            <input type="number" name placeholder />
                          </div>
                        </div>
                        <div className="form-field">
                          <div className="label-text">
                            <label>Total</label>
                          </div>
                          <div className="input-field">
                            <input type="number" name placeholder />
                          </div>
                        </div>
                      </div>
                      <div className="form-field input-column clearfix">
                        <label>Professional Licenses</label>
                        <div className="four-col-form-field clearfix">
                          <div className="column-1">
                            <div className="form-text">License Number</div>
                            <input type="text" name placeholder />
                          </div>
                          <div className="column-2">
                            <div className="form-text">Classification</div>
                            <input type="text" name placeholder />
                          </div>
                          <div className="column-3">
                            <div className="form-text">State</div>
                            <input type="text" name placeholder />
                          </div>
                          <div className="column-4">
                            <div className="form-text">Issuing Agency</div>
                            <input type="text" name placeholder />
                          </div>
                        </div>
                      </div>
                      <div className="form-field two-col-equal-field clearfix">
                        <div className="label-text">
                          <label>
                            Attach your insurance agent's EMR verification
                            letter
                          </label>
                        </div>
                        <div className="input-field">
                          <input type="file" name />
                        </div>
                      </div>
                      <div className="form-field two-col-right-field clearfix">
                        <div className="label-text">
                          <label>
                            How often do you hold regular safety meetings for
                            field supervisors?
                          </label>
                        </div>
                        <div className="input-field">
                          <select>
                            <option value>Placeholder</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-field input-column clearfix">
                        <label>Title</label>
                        <div className="three-form-field clearfix">
                          <div className="column-1">
                            <div className="form-text">Label</div>
                            <select>
                              <option value>Select</option>
                            </select>
                          </div>
                          <div className="column-2">
                            <div className="form-text">Label</div>
                            <select>
                              <option value>Select</option>
                            </select>
                          </div>
                          <div className="column-3">
                            <div className="form-text">Label</div>
                            <input type="number" name placeholder="Number" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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
                            />{' '}
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              name
                              defaultValue
                              defaultChecked
                            />{' '}
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
                            />{' '}
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />{' '}
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
                            />{' '}
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />{' '}
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
                            />{' '}
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />{' '}
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
                            />{' '}
                          </td>
                          <td>
                            <input type="checkbox" name defaultValue />{' '}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <span className="ad-field">
                      <i className="fa fa-plus-circle" aria-hidden="true" /> add
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
            </div>
          </div>
        </div>
    </section>
  );
};

export default Configure;