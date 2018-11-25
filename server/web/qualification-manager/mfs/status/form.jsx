import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import { formatDate } from '../../../util';
import { EmployeeName } from '../../../components/employees/index';
import { load_invitation_reviewers, add_invitation_reviewers, delete_invitation_reviewers } from '../../state/action';

class Form extends Component {
  componentDidMount() {}

  render() {
    const a = 1;
    return (
      <div className="custom-application-tabber-item" id="submitted-form" style={{}}>


        <div className="custom-qualification-status-form">
          <div className="submitted-form-group">
            <div className="submitted-form-content clearfix">
              <div className="left-content">
                <h3>Completed Questionnaire</h3>
                <p>
Submitted on
                  {' '}
                  <span className="date">01/01/2018</span>
                  {' '}
by
                  {' '}
                  <span className="member-name">Deepak Kumar</span>
                </p>
              </div>
              <div className="right-content">
                <a href className="custom-btn">Invite to Revise</a>
              </div>
            </div>
            <hr />
            <div className="clearfix">
              <div className="left-content">
                <h3><span className="company-name">AA Printers</span></h3>
                <p>
Invitation to apply sent on
                  {' '}
                  <span className="date">October 12, 2018 at 01:45PM HST</span>
                </p>
                <div className="member-detail clearfix">
                  <div className="icon-group">
                    <span className="icon" />
                  </div>
                  <div className="member-detail">
                    <a href="#"><span className="member-name">Deep Kumar</span></a>
                    <span className="email">abc@def.com</span>
                  </div>
                </div>
              </div>
              <div className="right-content" />
            </div>
            <hr />
            <h5>Office Locations</h5>
            <table>
              <tbody>
                <tr>
                  <th>Office Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                </tr>
                <tr>
                  <td>Phoenix</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Buisness Type</td>
                  <td>--</td>
                  <td />
                </tr>
                <tr>
                  <td>Labor Type</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>Enterprise Type</td>
                  <td>None</td>
                  <td />
                </tr>
                <tr>
                  <td>Work Performed</td>
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
            <h5>Ownership/Buisness Structure</h5>
            <table>
              <tbody>
                <tr>
                  <th>Corporation Type</th>
                  <th>State of Incorporation</th>
                  <th>Year of Incorporation</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Has your company ever done buisness under a different name?</td>
                  <td>No</td>
                  <td />
                </tr>
                <tr>
                  <td>Is your company owned or controlledby a parent corporation?</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>Does someone outside of your company your estimating?</td>
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
            <h5>Number of Employees</h5>
            <table>
              <tbody>
                <tr>
                  <th>Department</th>
                  <th className="text-right">Number of Employees</th>
                </tr>
                <tr>
                  <td>Estimating Department</td>
                  <td className="text-right">0</td>
                </tr>
                <tr>
                  <td>Field Supervision</td>
                  <td className="text-right">0</td>
                </tr>
                <tr>
                  <td>Tradespeople</td>
                  <td className="text-right">0</td>
                </tr>
                <tr>
                  <td>Clerical/Accounting</td>
                  <td className="text-right">0</td>
                </tr>
                <tr>
                  <td>Other</td>
                  <td className="text-right">0</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td className="text-right">0</td>
                </tr>
              </tbody>
            </table>
            <h5>Owner/Officers of your company</h5>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
                <tr className="company-owner">
                  <td>xyz</td>
                  <td />
                  <td>12345</td>
                </tr>
              </tbody>
            </table>
            <h3>Certifications &amp; Licenses</h3>
            <h5>Professional Licenses</h5>
            <table>
              <tbody>
                <tr>
                  <th>license Number</th>
                  <th>Classification</th>
                  <th>State</th>
                  <th>Issuing Agency</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Trade Unions</h5>
            <table>
              <tbody>
                <tr>
                  <th>Trade</th>
                  <th>Agreement</th>
                  <th>Year Expires</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>MBE, WBE, SBE or any other type of certified buisness enterprises</h5>
            <table>
              <tbody>
                <tr>
                  <th>Type of certified business</th>
                  <th>Certifying Agency</th>
                  <th>Vendor ID</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Industry Affiliation or Memberships</h5>
            <table>
              <tbody>
                <tr>
                  <th>Description of affiliation or memberships</th>
                </tr>
                <tr>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h3>Health &amp; Safety</h3>
            <table>
              <tbody>
                <tr>
                  <th>Health &amp; Safety</th>
                  <th />
                </tr>
                <tr>
                  <td>Attach a copy of your safety program</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Provide your workers compensation experience modification rate (EMR)</h5>
            <table>
              <tbody>
                <tr>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Attach copy of your osha no. 300A summary logs</h5>
            <table>
              <tbody>
                <tr>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Man-Hours worked</h5>
            <table>
              <tbody>
                <tr>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>First Aid Cases</h5>
            <table>
              <tbody>
                <tr>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Osha Recordable cases</h5>
            <table>
              <tbody>
                <tr>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Recordable Incident Rate (RIR)</h5>
            <table>
              <tbody>
                <tr>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Lost Time/Workday cases</h5>
            <table>
              <tbody>
                <tr>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Lost Time/Workday Incident Rate (LTWR)</h5>
            <table>
              <tbody>
                <tr>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Fatalities</h5>
            <table>
              <tbody>
                <tr>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Average number of Employees</h5>
            <table>
              <tbody>
                <tr>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Osha Inspection</h5>
            <table>
              <tbody>
                <tr>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Osha Violations/Citations (Closed Only)</h5>
            <table>
              <tbody>
                <tr>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h3>Insurance &amp; Surety</h3>
            <table>
              <tbody>
                <tr>
                  <td>Total bonding capacity</td>
                  <td>
                    <span className="dollar-icon">$</span>
0
                  </td>
                </tr>
                <tr>
                  <td>Bonding capacity per project</td>
                  <td>
                    <span className="dollar-icon">$</span>
0
                  </td>
                </tr>
                <tr>
                  <td>Available bonding capacity as of the date</td>
                  <td>
                    <span className="dollar-icon">$</span>
0
                  </td>
                </tr>
                <tr>
                  <td>Bond rate</td>
                  <td>
0
                    <span className="percent-icon">%</span>
                  </td>
                </tr>
                <tr>
                  <td>Attach reference letter stating aggregate and single project bonding capacity from your surety company</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Insurance Limits</h5>
            <table>
              <tbody>
                <tr>
                  <th>General Liability Aggregate</th>
                  <th>General Liability Single Occur.</th>
                  <th>Workers Compensation</th>
                  <th>Automobile</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Bonding Agent Refrences</h5>
            <table>
              <tbody>
                <tr>
                  <th>Company Name</th>
                  <th>Branch Address</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Surety Refrences</h5>
            <table>
              <tbody>
                <tr>
                  <th>Company Name</th>
                  <th>Branch Address</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Insurance Refrences</h5>
            <table>
              <tbody>
                <tr>
                  <th>Company Name</th>
                  <th>Branch Address</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h3>Financials</h3>
            <table>
              <tbody>
                <tr>
                  <td>Attach a current financial statement. Ideally</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Attach a current financial statement. Ideally</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Attach a current financial statement. Ideally</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Attach a current financial statement. Ideally, this is an audited financial covering the last three years.</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Revenue</h5>
            <table>
              <tbody>
                <tr>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h5>Net Worth</h5>
            <table>
              <tbody>
                <tr>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
            <h3>Other</h3>
            <table>
              <tbody>
                <tr>
                  <td>
Would you like to prove any additional information you feel would help
                    {' '}
                    <span className="company-name">AA Printers</span>
                    {' '}
determine your company's qualifications and expertise?
                  </td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
            <h3>Signature</h3>
            <table>
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>Ankit</td>
                </tr>
                <tr>
                  <td>Title</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
