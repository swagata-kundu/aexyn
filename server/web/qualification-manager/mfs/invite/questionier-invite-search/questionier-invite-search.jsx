import React, { Component } from 'react';
import QuestionierInviteHeader from '../questionier-invite-header';
import SideBar from './sidebar';
import QuestionierCompany from './questionier-invite-company';
import QuestionierCompanyInfo from './questionier-invite-companyInfo';

class QuestionierInviteSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <section
      className="custom-body-container-wrapper"
      style={{ paddingLeft: '50px' }}
    >
      <div className="custom-body-container">
        <div className="custom-section">
          <div className="custom-sidebar-tab">
            <div className="custom-axeyn-tabber-group">
              <QuestionierInviteHeader />
              <div className="custom-axeyn-tabber-item axeyn-tab-share-link-grp d-block">
                <div className="axeyn-tab-search-inner-grp">
                  <div className="container-fluid-1">
                    <div className="row">
                      <SideBar />
                      <div className="col-sm-9 custom-axeyn-tab-search-main-content">
                        <div className="custom-search">
                          <form>
                            <div className="custom-searh-input">
                              <input
                                type="Search"
                                placeholder="Looking for a specific company?"
                              />
                            </div>
                          </form>
                          <div className="custom-search-table table-1">
                            <table>
                              <tbody>
                                <tr>
                                  <td>
                                    <h6>5 Best matches</h6>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Company</td>
                                  <td>Private Info</td>
                                  <td>Recent Work History</td>
                                </tr>
                                <QuestionierCompany />
                                <QuestionierCompanyInfo />
                              </tbody>
                            </table>
                          </div>
                          <div className="custom-search-table table-2">
                            <table>
                              <tbody>
                                <tr>
                                  <td>
                                    <h6>Did you mean one of these?</h6>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Company</td>
                                  <td>Private Info</td>
                                  <td>Recent Work History</td>
                                </tr>
                                <QuestionierCompany />
                                <QuestionierCompanyInfo />
                              </tbody>
                            </table>
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

export default QuestionierInviteSearch;
