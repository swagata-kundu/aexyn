import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionierInviteHeader from '../questionier-invite-header';
import SideBar from './sidebar';
import QuestionierCompany from './questionier-invite-company';
import QuestionierCompanyInfo from './questionier-invite-companyInfo';
import { searchCompany } from '../../../state/action';
import { searchCompanyList } from '../../../../service/qualification-manager';

class QuestionierInviteSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  searchCompanies = async (event) => {
    let companies = {};
    if (event.target.value !== '') {
      companies = await searchCompanyList(event.target.value);
      this.props.searchCompany(companies);
    } else {
      this.props.searchCompany(companies);
    }
  }

  render() {
    const { companies } = this.props;
    const matchesCount = companies.matches !== undefined ? companies.matches.length : 'No';
    return (
      <section
        className="custom-body-container-wrapper"
        style={{ paddingLeft: '50px' }}
      >
        <div className="custom-body-container">
          <div className="custom-section">
            <div className="custom-sidebar-tab">
              <div className="custom-axeyn-tabber-group">
                <QuestionierInviteHeader />
                <div className="custom-axeyn-tabber-item axeyn-tab-search-grp d-block">
                  <div className="axeyn-tab-search-inner-grp">
                    <div className="container-fluid-1">
                      <div className="row">
                        <SideBar />
                        <div className="col-sm-10 custom-axeyn-tab-search-main-content">
                          <div className="custom-search">
                            <form>
                              <div className="custom-searh-input">
                                <input
                                  type="Search"
                                  placeholder="Looking for a specific company?"
                                  onChange={e => this.searchCompanies(e)}
                                />
                              </div>
                            </form>
                            <div className="custom-search-table table-1">
                              <table>
                                <tbody>
                                  <tr>
                                    <td>
                                      <h6>
                                        {matchesCount}
                                        {' '}
Best matches
                                      </h6>
                                    </td>
                                  </tr>
                                  {companies.matches !== undefined
                                    ? (
                                      <tr className="has-border">
                                        <td>Company</td>
                                        <td>Private Info</td>
                                        <td>Recent Work History</td>
                                      </tr>
                                    )
                                    : null}
                                  {companies.matches !== undefined
                                    ? companies.matches.map(company => (
                                      <QuestionierCompany key={company.id} data={company} />
                                    ))
                                    : null}
                                </tbody>
                              </table>
                              <QuestionierCompanyInfo />
                            </div>
                            <div className="custom-search-table table-2">
                              <table>
                                <tbody>
                                  <tr>
                                    <td>
                                      <h6>Did you mean one of these?</h6>
                                    </td>
                                  </tr>
                                  {companies.suggestions !== undefined
                                    ? (
                                      <tr className="has-border">
                                        <td>Company</td>
                                        <td>Private Info</td>
                                        <td>Recent Work History</td>
                                      </tr>
                                    )
                                    : null}

                                  {companies.suggestions !== undefined
                                    ? companies.suggestions.map(company => (
                                      <QuestionierCompany key={company.id} data={company} />
                                    ))
                                    : null}
                                </tbody>
                              </table>
                              <QuestionierCompanyInfo />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
function mapStateToProps(state) {
  return {
    companies: state.qualification.companies,
    getCompanies: state.qualification.getCompanies,
  };
}
export default connect(mapStateToProps, ({ searchCompany }))(QuestionierInviteSearch);
