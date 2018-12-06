import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getCompany, invitationEmail } from '../../../../service/qualification-manager';
import { companyPopup } from '../../../state/action';


class QuestionierCompanyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {
        employees: [],
      },
      office_id: null,
      company_offices: [],
    };
  }

  componentDidMount = async () => {
    const { id } = this.props;
    const company_offices = await getCompany(id);
    this.setState({
      company_offices,
      current: company_offices[0],
      office_id: company_offices[0].office_id,
    });
  };

  onChangeOffice = (e) => {
    this.setState({
      office_id: parseInt(e.target.value, 10),
    });
    const { company_offices, office_id } = this.state;
    const selected = _.find(company_offices, (o => o.office_id === office_id));
    this.setState({
      current: selected,
    });
  }

  closePopup = () => {
    this.props.companyPopup(false);
  }

  inviteEmail = async (data) => {
    const emails = [];
    emails.push(data.email);
    await invitationEmail(emails);
  }

  renderDropDown=() => {
    const { company_offices, office_id } = this.state;

    return (
      <select onChange={this.onChangeOffice} value={office_id}>
        {company_offices.map(companyData => (
          <option key={companyData.office_id} value={companyData.office_id}>
            {companyData.office}
          </option>
        ))
          }
      </select>
    );
  }

  render() {
    const { company_offices, current } = this.state;
    if (company_offices.length === 0) {
      return null;
    }
    return (
      <div className="custom-data-invite-pop show-pop">
        <div className="custom-data-invite-pop-inner">
          <div className="custom-search-table">
            <table>
              <tbody>
                <tr className="has-border">
                  <td>{company_offices[0].company_name}</td>
                  <td>Private Info</td>
                  <td>Recent Work History</td>
                  <td />
                </tr>
                <tr>
                  <td className="custom-search-tb-data">
                    <div className="custom-tb-left-col">
                      <img src="/static/images/aexyn-logo.png" alt="Aexyn" />
                    </div>
                    <div className="custom-tb-rght-col">
                      <div className="tb-row-1">
                        <a href="#">{company_offices.office}</a>
                        {' '}
                        <span className="devider">|</span>
                        {' '}
                        <span>{company_offices[0].company_name}</span>
                      </div>
                      <div className="custom-tb-select">
                        {this.renderDropDown()}
                      </div>
                      {
                          current.employees.map(data => (
                            <div className="tb-row-1" key={data.office_id}>
                              {data.isInvited === 0 ? (
                                <button
                                  onClick={() => this.inviteEmail(data)}
                                  className="tb-btn"
                                  type="button"
                                >
                                    INVITE
                                </button>
                              ) : (
                                <button
                                  className="tb-btn"
                                  disabled
                                  type="button"
                                >
                                    INVITED
                                </button>
                              )}
                              {' '}
                              <a href="#">
                                {data.first_name}
                                {' '}
                                {data.last_name}
                                {' '}
                              </a>
                              <span className="devider">|</span>
                              {' '}
                              <span>{data.job_title}</span>
                            </div>
                          ))
                         }
                    </div>
                  </td>
                  <td>
                    <b>NOT INVITED TO QUALITY</b>
                  </td>
                  <td>
                    <i>None for this work performed</i>
                  </td>
                </tr>
              </tbody>
            </table>
            <a className="close-pop" onClick={() => this.closePopup()}>
              <i className="fa fa-times" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(
  null,
  { companyPopup },
)(QuestionierCompanyInfo);
