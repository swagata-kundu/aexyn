import React, { Component } from 'react';

class Questions extends Component {
  componentDidMount() {}

  renderSideOptions=() => (
    <div className="custom-left-group ifj-ques-left-group">
      <div className="top-group">
        <a href="#">
jump to next unanswered
          {' '}
          <i className="fa fa-angle-double-right" aria-hidden="true" />
        </a>
      </div>
      <div className="middle-group">
        <h3>Sections:</h3>
        <ul>
          <li><a href="#">Company Profile</a></li>
          <li><a href="#">Certification &amp; Licenses</a></li>
          <li><a href="#">Health &amp; Safety</a></li>
          <li><a href="#">Insurance &amp; Surety</a></li>
          <li><a href="#">Financials</a></li>
          <li><a href="#">Work Experience</a></li>
          <li><a href="#">Legal</a></li>
          <li><a href="#">Other</a></li>
          <li><a href="#">Signature</a></li>
        </ul>
      </div>
    </div>

  )

  render() {
    return (
      <div className="custom-questionnaire-section ifj-questionnaire-section">
        {this.renderSideOptions()}
        <div className="custom-right-group ifj-ques-right-group">
          <div className="custom-preview-ques-group">
            <div className="bottom-group">
              <div className="icon-grp">
                <i className="fa fa-shield" aria-hidden="true" />
              </div>
              <div className="content-group">
                <p>
                  <span className="company-name">Talwar Electronics</span>
                  {' '}
trusts Aexyn connected to securely collect and transmit your qualification. Your information will only be made available to
                  {' '}
                  <span className="company-name">Talwar Electronics</span>
. Other clients will only receive your information if your information if you explicity send them a qualification application.
                </p>
              </div>
              <div className="content-group">
                <div className="content-item">
                  <p>Please complete all the questions. The contents of this questionnaire will be considered confidention and used safety to determine your firm's qualification and will not be disclosed to others.</p>
                </div>
                <div className="form-group">
                  <h3>Company profile</h3>
                  <form>
                    <div className="form-field clearfix single-col left-label">
                      <div className="label-text"><label>Text Response</label></div>
                      <div className="input-field"><input type="text" name="companyname" placeholder="Company Name" /></div>
                    </div>
                    <div className="form-field clearfix single-col left-label">
                      <div className="label-text"><label>Number</label></div>
                      <div className="input-field"><input type="number" name="companyname" placeholder /></div>
                    </div>
                    <div className="three-col-form-field three-col-additional-field">
                      <div className="form-field clearfix input-column clearfix">
                        <label>list of office locations</label>
                        <div className="form-field-top-grop clearfix">
                          <div className="column-1 three-col"><div className="form-text">Office Name</div></div>
                          <div className="column-2 three-col"><div className="form-text">Address</div></div>
                          <div className="column-3 three-col"><div className="form-text">phone</div></div>
                        </div>
                        <div className="form-field-bottom-grop clearfix">
                          <div className="column-1 three-col">
                            <input type="text" name="companyname" placeholder="Office Name" />
                          </div>
                          <div className="column-2 three-col">
                            <input type="text" name="address" placeholder="Address" />
                          </div>
                          <div className="column-3 three-col">
                            <input type="tel" name="telephone" placeholder="Phone Number" />
                            <span className="remove-row-value"><i className="fa fa-times" aria-hidden="true" /></span>
                          </div>
                        </div>
                        <div className="additional-input">
                          <i className="fa fa-plus-circle" aria-hidden="true" />
                          {' '}
add a location
                        </div>
                      </div>
                    </div>
                    <div className="three-col-form-field three-col-additional-field">
                      <div className="form-field clearfix input-column clearfix">
                        <label>List of name/email/phone</label>
                        <div className="form-field-top-grop clearfix">
                          <div className="column-1 three-col"><div className="form-text">Name</div></div>
                          <div className="column-2 three-col"><div className="form-text">Email</div></div>
                          <div className="column-3 three-col"><div className="form-text">phone</div></div>
                        </div>
                        <div className="form-field-bottom-grop clearfix">
                          <div className="column-1 three-col">
                            <input type="text" name="companyname" placeholder="Name" />
                          </div>
                          <div className="column-2 three-col">
                            <input type="Email" name="address" placeholder="Email" />
                          </div>
                          <div className="column-3 three-col">
                            <input type="telephone" name="telephone" placeholder="Phone Number" />
                            <span className="remove-row-value"><i className="fa fa-times" aria-hidden="true" /></span>
                          </div>
                        </div>
                        <div className="additional-input">
                          <i className="fa fa-plus-circle" aria-hidden="true" />
                          {' '}
add a Contact
                        </div>
                      </div>
                    </div>
                    <div className="three-col-form-field three-col-additional-field">
                      <div className="form-field input-column clearfix">
                        <label>list of unions incl expiration</label>
                        <div className="form-field-top-grop clearfix">
                          <div className="column-1 three-col"><div className="form-text">Trade</div></div>
                          <div className="column-2 three-col"><div className="form-text">Aggrement</div></div>
                          <div className="column-3 three-col"><div className="form-text">year Expires</div></div>
                        </div>
                        <div className="form-field-bottom-grop clearfix">
                          <div className="column-1 three-col">
                            <input type="text" name="trade" placeholder="Name" />
                          </div>
                          <div className="column-2 three-col">
                            <input type="Email" name="aggrement" placeholder="Email" />
                          </div>
                          <div className="column-3 three-col">
                            <input type="telephone" name="yearexpires" placeholder="year" />
                            <span className="remove-row-value"><i className="fa fa-times" aria-hidden="true" /></span>
                          </div>
                        </div>
                        <div className="additional-input">
                          <i className="fa fa-plus-circle" aria-hidden="true" />
                          {' '}
add a union
                        </div>
                      </div>
                    </div>
                    <div className="form-field clearfix left-label">
                      <div className="label-text"><label>multi-select</label></div>
                      <div className="input-field">
                        <select>
                          <option value>Select</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-field clearfix left-label">
                      <div className="label-text"><label>multi-select</label></div>
                      <div className="input-field">
                        <select>
                          <option value>Select</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-field clearfix left-label">
                      <div className="label-text"><label>multi-select</label></div>
                      <div className="input-field">
                        <select>
                          <option value>Select</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-field clearfix left-label">
                      <div className="label-text"><label>multi-select</label></div>
                      <div className="input-field">
                        <select>
                          <option value>Select</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-field input-column clearfix">
                      <label>business structure </label>
                      <div className="three-col-form-field clearfix clearfix">
                        <div className="column-1 three-col">
                          <div className="form-text">Corporation Type</div>
                          <input type="text" name="corporationtype" placeholder="Company Name" />
                        </div>
                        <div className="column-2 three-col">
                          <div className="form-text">State of Incorporation</div>
                          <input type="text" name="stateofincorporation" placeholder="Address" />
                        </div>
                        <div className="column-3 three-col">
                          <div className="form-text">Year of Incorporation</div>
                          <input type="tel" name="yearofincorporation" placeholder="Phone Number" />
                        </div>
                      </div>
                    </div>
                    <div className="form-field clearfix">
                      <div className="radio-label">
                        <label>Has your company ever done business with other name?</label>
                        <div className="radio-check">
                          <input type="radio" name="no" defaultValue="No" />
                          {' '}
No
                          {' '}
                        </div>
                        <div className="radio-check">
                          <input type="radio" name="yes" defaultValue="Yes" />
                          {' '}
Yes
                        </div>
                      </div>
                      <div className="left-label">
                        <div className="label-text">
                          <label>If Yes, Please Explain</label>
                          {' '}
                        </div>
                        <div className="input-field"><input type="text" name="workperformed" placeholder /></div>
                      </div>
                    </div>
                    <div className="form-field clearfix">
                      <div className="radio-label">
                        <label>Does your company have an orientaion program for newly appointed supervisor?</label>
                        <div className="radio-check">
                          <input type="radio" name="no" defaultValue="No" />
                          {' '}
No
                          {' '}
                        </div>
                        <div className="radio-check">
                          <input type="radio" name="yes" defaultValue="Yes" />
                          {' '}
Yes
                        </div>
                      </div>
                      <div className="left-label">
                        <div className="label-text">
                          <label>Please Describe</label>
                          {' '}
                        </div>
                        <div className="input-field"><input type="text" name="workperformed" placeholder /></div>
                        <div className="upload-file-input">
                          <i className="fa fa-plus-circle" aria-hidden="true" />
                          {' '}
upload files
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="form-group">
                  <h3>Section 2</h3>
                  <form>
                    <div className="form-field input-column one-col-addition-field clearfix">
                      <label>list of industry affiliation</label>
                      <div className="form-text">
                        <div className="department">
Description of affilation of Membership
                        </div>
                      </div>
                      <div className="input-field">
                        <input type="text" step="any" />
                        <span className="remove-row-value"><i className="fa fa-times" aria-hidden="true" /></span>
                      </div>
                      <div className="additional-input">
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                        {' '}
add another affilation
                      </div>
                    </div>
                    <div className="form-field clearfix input-column two-col-form-field clearfix clearfix">
                      <label>list of employees by dept</label>
                      <div className="form-text">
                        <div className="department">Department</div>
                        <div className="employee-number">Number of Employees</div>
                      </div>
                      <div className="form-field clearfix">
                        <div className="label-text"><label>Estimating Department</label></div>
                        <div className="input-field">
                          <input type="number" placeholder />
                        </div>
                      </div>
                      <div className="form-field clearfix">
                        <div className="label-text"><label>Field Supervision</label></div>
                        <div className="input-field">
                          <input type="number" placeholder />
                        </div>
                      </div>
                      <div className="form-field clearfix">
                        <div className="label-text"><label>Tradespeople</label></div>
                        <div className="input-field">
                          <input type="number" placeholder />
                        </div>
                      </div>
                      <div className="form-field clearfix">
                        <div className="label-text"><label>Clerical / Accounting</label></div>
                        <div className="input-field">
                          <input type="number" placeholder />
                        </div>
                      </div>
                      <div className="form-field clearfix">
                        <div className="label-text"><label>Other</label></div>
                        <div className="input-field">
                          <input type="number" placeholder />
                        </div>
                      </div>
                      <div className="form-field clearfix">
                        <div className="label-text"><label>Total</label></div>
                        <div className="input-field">
                          <input type="number" placeholder />
                        </div>
                      </div>
                    </div>
                    <div className="four-col-form-field four-col-additional-form-field">
                      <div className="form-field clearfix input-column clearfix">
                        <label>list of licenses</label>
                        <div className="form-field-top-grop clearfix">
                          <div className="column-1 four-col"><div className="form-text">License Number</div></div>
                          <div className="column-2 four-col"><div className="form-text">Classification</div></div>
                          <div className="column-3 four-col"><div className="form-text">State</div></div>
                          <div className="column-4 four-col"><div className="form-text">Issuing Agency</div></div>
                        </div>
                        <div className="form-field-bottom-grop clearfix">
                          <div className="column-1 four-col">
                            <input type="text" placeholder />
                          </div>
                          <div className="column-2 four-col">
                            <input type="text" placeholder />
                          </div>
                          <div className="column-3 four-col">
                            <input type="text" placeholder />
                          </div>
                          <div className="column-4 four-col">
                            <input type="text" placeholder />
                          </div>
                          <span className="remove-row-value"><i className="fa fa-times" aria-hidden="true" /></span>
                        </div>
                        <div className="additional-input">
                          <i className="fa fa-plus-circle" aria-hidden="true" />
                          {' '}
add a Licence
                        </div>
                      </div>
                    </div>
                    <div className="four-col-form-field">
                      <div className="form-field input-column clearfix">
                        <label>Project Details</label>
                        <div className="form-field-top-grop clearfix">
                          <div className="column-1 four-col"><div className="form-text">Project Name</div></div>
                          <div className="column-2 four-col"><div className="form-text">Client</div></div>
                          <div className="column-3 four-col"><div className="form-text">Contract value</div></div>
                          <div className="column-4 four-col"><div className="form-text">Completion date</div></div>
                        </div>
                        <div className="form-field-bottom-grop clearfix">
                          <div className="column-1 four-col">
                            <input type="text" placeholder="Aexyn" />
                          </div>
                          <div className="column-2 four-col">
                            <input type="text" placeholder="Panipat" />
                          </div>
                          <div className="column-3 four-col dollar">
                            <div className="input-field">
                              <input type="number" step="any" />
                              <span className="dollar-icon">$</span>
                            </div>
                          </div>
                          <div className="column-4 four-col">
                            <div className="date-field">
                              <input type="date" placeholder />
                              <i className="fa fa-calendar-o" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="four-col-form-field list-of-project-details four-col-additional-form-field form-field clearfix">
                      <label>list of project details</label>
                      <div className="form-field-top-grop clearfix">
                        <div className="column-1 four-col"><div className="form-text">Project Name</div></div>
                        <div className="column-2 four-col"><div className="form-text">Client</div></div>
                        <div className="column-3 four-col"><div className="form-text">Contract value</div></div>
                        <div className="column-3 four-col"><div className="form-text">Completion date</div></div>
                      </div>
                      <div className="form-field-bottom-grop clearfix">
                        <div className="column-1 four-col">
                          <input type="text" placeholder="Aexyn" />
                        </div>
                        <div className="column-2 four-col">
                          <input type="text" placeholder="Panipat" />
                        </div>
                        <div className="column-3 dollar four-col">
                          <div className="input-field">
                            <input type="number" step="any" />
                            <span className="dollar-icon">$</span>
                          </div>
                        </div>
                        <div className="column-4 four-col">
                          <div className="date-field">
                            <input type="date" placeholder />
                            <i className="fa fa-calendar-o" aria-hidden="true" />
                            <span className="remove-row-value"><i className="fa fa-times" aria-hidden="true" /></span>
                          </div>
                        </div>
                      </div>
                      <div className="form-field-bottom-grop clearfix">
                        <div className="column-1 four-col">
                          <input type="text" placeholder="Aexyn" />
                        </div>
                        <div className="column-2 four-col">
                          <input type="text" placeholder="Panipat" />
                        </div>
                        <div className="column-3 dollar four-col">
                          <div className="input-field">
                            <input type="number" step="any" />
                            <span className="dollar-icon">$</span>
                          </div>
                        </div>
                        <div className="column-4 four-col">
                          <div className="date-field">
                            <input type="date" placeholder />
                            <i className="fa fa-calendar-o" aria-hidden="true" />
                            <span className="remove-row-value"><i className="fa fa-times" aria-hidden="true" /></span>
                          </div>
                        </div>
                      </div>
                      <div className="form-field-bottom-grop clearfix">
                        <div className="column-1 four-col">
                          <input type="text" placeholder="Aexyn" />
                        </div>
                        <div className="column-2 four-col">
                          <input type="text" placeholder="Panipat" />
                        </div>
                        <div className="column-3 dollar four-col">
                          <div className="input-field">
                            <input type="number" step="any" />
                            <span className="dollar-icon">$</span>
                          </div>
                        </div>
                        <div className="column-4 four-col">
                          <div className="date-field">
                            <input type="date" placeholder />
                            <i className="fa fa-calendar-o" aria-hidden="true" />
                            <span className="remove-row-value"><i className="fa fa-times" aria-hidden="true" /></span>
                          </div>
                        </div>
                      </div>
                      <div className="form-field-bottom-grop clearfix">
                        <div className="column-1 four-col">
                          <input type="text" placeholder="Aexyn" />
                        </div>
                        <div className="column-2 four-col">
                          <input type="text" placeholder="Panipat" />
                        </div>
                        <div className="column-3 dollar four-col">
                          <div className="input-field">
                            <input type="number" step="any" />
                            <span className="dollar-icon">$</span>
                          </div>
                        </div>
                        <div className="column-4 four-col">
                          <div className="date-field">
                            <input type="date" placeholder />
                            <i className="fa fa-calendar-o" aria-hidden="true" />
                            <span className="remove-row-value"><i className="fa fa-times" aria-hidden="true" /></span>
                          </div>
                        </div>
                      </div>
                      <div className="additional-input">
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                        {' '}
add another Project
                      </div>
                    </div>
                    <div className="four-col-form-field four-col-additional-form-field">
                      <label>list of Company contacts</label>
                      <div className="form-field-top-grop clearfix">
                        <div className="column-1 four-col"><div className="form-text">Company Name</div></div>
                        <div className="column-2 four-col"><div className="form-text">Address</div></div>
                        <div className="column-3 four-col"><div className="form-text">Phone</div></div>
                        <div className="column-3 four-col"><div className="form-text">Email</div></div>
                      </div>
                      <div className="form-field-bottom-grop clearfix">
                        <div className="column-1 four-col">
                          <input type="text" placeholder="Aexyn" />
                        </div>
                        <div className="column-2 four-col">
                          <input type="text" placeholder="Panipat" />
                        </div>
                        <div className="column-3 four-col">
                          <input type="Phone" placeholder={9876543210} />
                        </div>
                        <div className="column-4 four-col">
                          <input type="Email" placeholder="abc@aexyn.com" />
                        </div>
                        <span className="remove-row-value"><i className="fa fa-times" aria-hidden="true" /></span>
                      </div>
                      <div className="additional-input">
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                        {' '}
add a Company
                      </div>
                    </div>
                    <div className="four-col-form-field">
                      <div className="form-field clearfix input-column clearfix">
                        <label>Data for last four years</label>
                        <div className="column-1 four-col">
                          <div className="form-text">2018</div>
                          <input type="text" placeholder />
                        </div>
                        <div className="column-2 four-col">
                          <div className="form-text">2017</div>
                          <input type="text" placeholder />
                        </div>
                        <div className="column-3 four-col">
                          <div className="form-text">2016</div>
                          <input type="text" placeholder />
                        </div>
                        <div className="column-4 four-col">
                          <div className="form-text">2015</div>
                          <input type="text" placeholder />
                        </div>
                      </div>
                    </div>
                    <div className="four-col-form-field">
                      <div className="form-field clearfix input-column clearfix">
                        <label>general, workers comp, auto</label>
                        <div className="column-1 four-col dollar">
                          <div className="form-text">
General Liability aggregriate
                          </div>
                          <div className="input-field">
                            <input type="number" step="any" />
                            <span className="dollar-icon">$</span>
                          </div>
                        </div>
                        <div className="column-1 four-col dollar">
                          <div className="form-text">general Liability Single Occur</div>
                          <div className="input-field">
                            <input type="number" step="any" />
                            <span className="dollar-icon">$</span>
                          </div>
                        </div>
                        <div className="column-1 four-col dollar">
                          <div className="form-text">Workers compensation</div>
                          <div className="input-field">
                            <input type="number" step="any" />
                            <span className="dollar-icon">$</span>
                          </div>
                        </div>
                        <div className="column-1 four-col dollar">
                          <div className="form-text">Automobile</div>
                          <div className="input-field">
                            <input type="number" step="any" />
                            <span className="dollar-icon">$</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-field clearfix two-col-equal-field clearfix">
                        <div className="label-text"><label>Attach your insurance agent's EMR verification letter</label></div>
                        <div className="input-field"><input type="file" /></div>
                      </div>
                      <div className="form-field clearfix two-col-right-field clearfix">
                        <div className="label-text"><label>Frequently Dropdown</label></div>
                        <div className="input-field">
                          <select>
                            <option value>Placeholder</option>
                          </select>
                        </div>
                      </div>
                      <div className="three-col-form-field">
                        <div className="form-field clearfix input-column clearfix">
                          <label>Business Structure</label>
                          <div className="column-1 three-col">
                            <div className="form-text">Corporate Type</div>
                            <select>
                              <option value>Select</option>
                            </select>
                          </div>
                          <div className="column-2 three-col">
                            <div className="form-text">State of Incorporation</div>
                            <select>
                              <option value>Select</option>
                            </select>
                          </div>
                          <div className="column-3 three-col">
                            <div className="form-text">Year Of Incorporation</div>
                            <input type="number" placeholder="yyyy" />
                          </div>
                        </div>
                      </div>
                      <div className="form-field clearfix input-column two-col-form-field clearfix clearfix">
                        <div className="form-field clearfix">
                          <div className="label-text"><label>Total bonding capacity</label></div>
                          <div className="input-field dollar">
                            <input type="number" step="any" />
                            <span className="dollar-icon">$</span>
                          </div>
                        </div>
                        <div className="form-field clearfix dollar">
                          <div className="label-text"><label>Bonding capacity per project</label></div>
                          <div className="input-field">
                            <input type="number" step="any" />
                            <span className="dollar-icon">$</span>
                          </div>
                        </div>
                        <div className="form-field clearfix dollar">
                          <div className="label-text"><label>Available bonding capacity as of this date</label></div>
                          <div className="input-field">
                            <input type="number" step="any" />
                            <span className="dollar-icon">$</span>
                          </div>
                        </div>
                        <div className="form-field clearfix percentage">
                          <div className="label-text"><label>Bond rate (%)</label></div>
                          <div className="input-field">
                            <input type="number" step="any" />
                            <span className="percent-icon">%</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-field clearfix">
                        <div className="label-text"><label>dollar amount</label></div>
                        <div className="input-field dollar">
                          <input type="number" step="any" />
                          <span className="dollar-icon">$</span>
                        </div>
                      </div>
                      <div className="form-field clearfix percentage">
                        <div className="label-text"><label>percentage </label></div>
                        <div className="input-field">
                          <input type="number" step="any" />
                          <span className="percent-icon">%</span>
                        </div>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Questions;
