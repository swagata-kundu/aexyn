import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { getCompany } from '../../../../service/qualification-manager';
import { getCompanyDetail } from '../../../state/action';

const QuestionierCompany = (props) => {
  const { data, selectCompany } = props;
  return (
    <form>
      <select onChange={e => selectCompany(e)}>
        {data !== undefined && data.length > 0
          ? data.map(companyData => (
            <option key={companyData.office_id} id={companyData.office_id} value={companyData.office_id}>
              {companyData.company_name}
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
    const companieDetails = await getCompany();
    this.props.getCompanyDetail(companieDetails);
  };

  onChange = (event) => {
    this.setState({
      companyId: event.target.value,
    });
  }

  render() {
    const { getCompanies } = this.props;
    const { companyId } = this.state;
    return (
      <div className="custom-data-invite-pop">
        <div className="custom-data-invite-pop-inner">
          <div className="custom-search-table">
            <table>
              <tbody>
                <tr className="has-border">
                  <td>Company</td>
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
                        <a href="#">{getCompanies.company_name}</a>
                        {' '}
                        <span className="devider">|</span>
                        {' '}
                        <span>Corona</span>
                      </div>
                      <div className="custom-tb-select">
                        <QuestionierCompanys
                          data={getCompanies}
                          selectCompany={this.onChange}
                        />
                      </div>
                      {getCompanies !== undefined && getCompanies.length > 0
                        ? getCompanies.map(employee => (
                          employee.employees !== undefined && employee.employees.length > 0 && employee.office_id === Number(companyId)
                            ? employee.employees.map(data => (
                              <div className="tb-row-1">
                                <a
                                  href="#"
                                  className="tb-btn"
                                  style={data.isInvited ? { cursor: 'not-allowed' } : null}
                                >
                            + INVITE
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
  { getCompanyDetail },
)(QuestionierCompanyInfo);
