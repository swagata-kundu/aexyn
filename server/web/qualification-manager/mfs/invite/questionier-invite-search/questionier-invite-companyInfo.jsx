import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { getCompany, invitationEmail } from '../../../../service/qualification-manager';
import { getCompanyDetail, companyPopup } from '../../../state/action';

const QuestionierCompany = (props) => {
  const { data, selectCompany } = props;
  return (
    <form>
      <select onChange={e => selectCompany(e)}>
        {data !== undefined && data.length > 0
          ? data.map(companyData => (
            <option key={companyData.office_id} id={companyData.office_id} value={companyData.office_id}>
              {companyData.office}
            </option>
          ))
          : null}
      </select>
    </form>
  );
};

const QuestionierCompanys = reduxForm({
  form: 'company',
  destroyOnUnmount: false,
})(QuestionierCompany);
class QuestionierCompanyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyId: null,
    };
  }

  componentDidMount = async () => {
    const { id } = this.props;
    const companieDetails = await getCompany(id);
    this.props.getCompanyDetail(companieDetails);
  };

  onChange = (event) => {
    this.setState({
      companyId: event.target.value,
    });
  }

  closePopup = () => {
    this.props.companyPopup(false);
  }

  inviteEmail = async (data) => {
    const emails = [];
    emails.push(data.email);
    const companieDetails = await invitationEmail(emails);
  }

  render() {
    const { getCompanies } = this.props;
    const { companyId } = this.state;
    return (
      <div className="custom-data-invite-pop show-pop">
        <div className="custom-data-invite-pop-inner">
          <div className="custom-search-table">
            <table>
              <tbody>
                <tr className="has-border">
                  <td>{getCompanies.length > 0 ? getCompanies[0].company_name : 'Company'}</td>
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
                        <a href="#">{getCompanies.office}</a>
                        {' '}
                        <span className="devider">|</span>
                        {' '}
                        <span>{getCompanies.length > 0 ? getCompanies[0].company_name : 'Company'}</span>
                      </div>
                      <div className="custom-tb-select">
                        <QuestionierCompanys
                          data={getCompanies}
                          selectCompany={this.onChange}
                        />
                      </div>
                      {getCompanies !== undefined && getCompanies.length > 0
                        ? getCompanies.map(employee => (
                          employee.employees !== undefined && employee.employees.length > 0 && (employee.office_id === getCompanies[0].office_id || employee.office_id === Number(companyId))
                            ? employee.employees.map(data => (
                              <div className="tb-row-1" key={data.office_id}>
                                <a
                                  onClick={() => this.inviteEmail(data)}

                                  className="tb-btn"
                                  style={data.isInvited ? { cursor: 'not-allowed' } : { cursor: 'pointer'}}
                                >
                                  {!data.isInvited ? '+ INVITE' : 'INVITED'}
                                </a>
                                {' '}
                                <a href="#">
                                  {data.first_name}
                                  {' '}
                                  {' '}
                                  {data.last_name}
                                  {' '}
                                </a>
                                {' '}
                                <span className="devider">|</span>
                                {' '}
                                <span>{data.job_title}</span>
                              </div>
                            )) : null

                        )) : null}
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

function mapStateToProps(state) {
  return {
    getCompanies: state.qualification.getCompanies,
  };
}
export default connect(
  mapStateToProps,
  { getCompanyDetail, companyPopup },
)(QuestionierCompanyInfo);
