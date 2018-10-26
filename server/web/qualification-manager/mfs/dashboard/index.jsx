import React from 'react';

const DashBoard = () => {
  return (
    <section
      className="custom-body-container-wrapper"
      style={{ paddingLeft: 50 }}
    >
      <div className="custom-body-container">
        <div className="custom-section">
          <div className="custom-sidebar-tab" id="tab1">
            <div className="custom-tabber-group">
              <div className="section-header">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1>Qualification Manager </h1>
                    </div>
                    <div className="col-sm-12">
                      <ul>
                        <li className="active">
                          <a href="#">Manage Food Suppliers</a>
                        </li>
                        <li>
                          <a href="#">Invitations From Jungles</a>
                        </li>
                        <li>
                          <a href="#">Permissions &amp; Settings</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabber-content-group mfs-layout">
                <div className="mfs-layout-top-bar">
                  <div className="row">
                    <div className="col-sm-6 mfs-layout-top-bar-left-col">
                      <ul>
                        <li>
                          <a href="/questionnaire">
                            <i className="fa fa-tasks" aria-hidden="true" />{' '}
                            Questionnaire
                          </a>
                        </li>
                        <li>
                          <div className="single-check-grp">
                            <input
                              type="checkbox"
                              defaultValue="Only Show my application"
                            />
                            <label>Only Show my application</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 mfs-layout-top-bar-right-col">
                      <form>
                        <input
                          type="Search"
                          name
                          placeholder="Find application by company or email"
                        />
                        <a href className="custom-btn">
                          + Invite Suppliers
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="custom-mfs-section-1 clearfix">
                  <div className="custom-mfs-section-1-inner clearfix">
                    <div className="tab-content">
                      <h3 className="orange-border">
                        Invitation Sent <span className="count-value">(0)</span>
                        <span className="sort">
                          <img src="/static/images/sorting-icon.svg" />
                        </span>
                      </h3>
                      <div className="item-group">
                        <div className="item">
                          <div className="contact-detail">
                            <div className="icon">
                              <i
                                className="fa fa-building-o"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="member-detail">
                              <span className="company-name">Company name</span>
                              <span className="name">
                                <a href="/user-profile" />
                                Member Name
                              </span>
                            </div>
                          </div>
                          <div className="meta">
                            Viewed by{' '}
                            <span className="name">
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>{' '}
                              <span className="more"> + more</span>
                            </span>
                            <div className="more-items">
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content">
                      <h3 className="dark-green-border">
                        Application in Progress{' '}
                        <span className="count-value">(0)</span>
                        <span className="sort">
                          <img src="/static/images/sorting-icon.svg" />
                        </span>
                      </h3>
                      <div className="item-group">
                        <div className="item">
                          <div className="contact-detail">
                            <div className="icon">
                              <i
                                className="fa fa-building-o"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="member-detail">
                              <span className="company-name">Company name</span>
                              <span className="name">
                                <a href="/user-profile" />
                                Member Name
                              </span>
                            </div>
                          </div>
                          <div className="meta">
                            Viewed by{' '}
                            <span className="name">
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>{' '}
                              <span className="more"> + more</span>
                            </span>
                            <div className="more-items">
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content">
                      <h3 className="blue-border">
                        Application Submitted{' '}
                        <span className="count-value">(0)</span>
                        <span className="sort">
                          <img src="/static/images/sorting-icon.svg" />
                        </span>
                      </h3>
                      <div className="item-group">
                        <div className="item">
                          <div className="contact-detail">
                            <div className="icon">
                              <i
                                className="fa fa-building-o"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="member-detail">
                              <span className="company-name">Company name</span>
                              <span className="name">
                                <a href="/user-profile" />
                                Member Name
                              </span>
                            </div>
                          </div>
                          <div className="meta">
                            Viewed by{' '}
                            <span className="name">
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>{' '}
                              <span className="more"> + more</span>
                            </span>
                            <div className="more-items">
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content">
                      <h3 className="green-border">
                        Approved <span className="count-value">(0)</span>
                        <span className="sort">
                          <img src="/static/images/sorting-icon.svg" />
                        </span>
                      </h3>
                      <div className="item-group">
                        <div className="item">
                          <div className="contact-detail">
                            <div className="icon">
                              <i
                                className="fa fa-building-o"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="member-detail">
                              <span className="company-name">Company name</span>
                              <span className="name">
                                <a href="/user-profile" />
                                Member Name
                              </span>
                            </div>
                          </div>
                          <div className="meta">
                            Viewed by{' '}
                            <span className="name">
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>{' '}
                              <span className="more"> + more</span>
                            </span>
                            <div className="more-items">
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content">
                      <h3 className="pink-border">
                        Explring Soon <span className="count-value">(0)</span>
                        <span className="sort">
                          <img src="/static/images/sorting-icon.svg" />
                        </span>
                      </h3>
                      <div className="item-group">
                        <div className="item">
                          <div className="contact-detail">
                            <div className="icon">
                              <i
                                className="fa fa-building-o"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="member-detail">
                              <span className="company-name">Company name</span>
                              <span className="name">
                                <a href="/user-profile" />
                                Member Name
                              </span>
                            </div>
                          </div>
                          <div className="meta">
                            Viewed by{' '}
                            <span className="name">
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>{' '}
                              <span className="more"> + more</span>
                            </span>
                            <div className="more-items">
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content">
                      <h3 className="grey-border">
                        Explring <span className="count-value">(0)</span>
                        <span className="sort">
                          <img src="/static/images/sorting-icon.svg" />
                        </span>
                      </h3>
                      <div className="item-group">
                        <div className="item">
                          <div className="contact-detail">
                            <div className="icon">
                              <i
                                className="fa fa-building-o"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="member-detail">
                              <span className="company-name">Company name</span>
                              <span className="name">
                                <a href="/user-profile" />
                                Member Name
                              </span>
                            </div>
                          </div>
                          <div className="meta">
                            Viewed by{' '}
                            <span className="name">
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>{' '}
                              <span className="more"> + more</span>
                            </span>
                            <div className="more-items">
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content">
                      <h3 className="pink-border">
                        Denied <span className="count-value">(0)</span>
                        <span className="sort">
                          <img src="/static/images/sorting-icon.svg" />
                        </span>
                      </h3>
                      <div className="item-group">
                        <div className="item">
                          <div className="contact-detail">
                            <div className="icon">
                              <i
                                className="fa fa-building-o"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="member-detail">
                              <span className="company-name">Company name</span>
                              <span className="name">
                                <a href="/user-profile" />
                                Member Name
                              </span>
                            </div>
                          </div>
                          <div className="meta">
                            Viewed by{' '}
                            <span className="name">
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>{' '}
                              <span className="more"> + more</span>
                            </span>
                            <div className="more-items">
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                              <a href="/user-profile" title="Member Name">
                                MN
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-access-section clearfix">
                  <div className="row">
                    <div className="col-sm-6 custom-access-section-left-col">
                      <div className="custom-access-section-left-col-inner">
                        <div className="top-icon">
                          <i className="fa fa-lock" aria-hidden="true" />
                        </div>
                        <h3>You don't have access</h3>
                        <p>
                          You're logged in as{' '}
                          <a href="mailto:eeee1ea@grr.la">eeee1ea@grr.la</a>
                          <br /> This account does not have access to view
                          applications
                        </p>
                        <div className="bottom-content">
                          <p>
                            <small>
                              Continuing to have problems? Email our support
                              team at{' '}
                              <a href="mailto:support@aexyn.com">
                                support@aexyn.com
                              </a>
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 custom-access-section-right-col">
                      <div className="custom-access-section-right-col-inner">
                        <p>Contact an employee below to request access:</p>
                        <div className="member-sec">
                          <div className="member-icon-left">
                            <span className="member-left-icon">NK</span>
                          </div>
                          <div className="member-details-left">
                            <a href="#">Nishant Kataria</a>
                            <small>Job Title</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mfs-section-3 clearfix">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-12 mfs-section-3-full-width-content">
                        <h3>Qualifying your vendor is easy with Aexyn Pro</h3>
                        <h5>
                          Manage the entire qualifications process through Aexyn
                          pro <br />
                          Customize your questionnair, set up security and
                          startinviting.
                        </h5>
                        <a href="#" className="custom-btn">
                          Start a 14-day Trial
                        </a>
                        <p>
                          <a href="#">Contact our sales team</a> to request a
                          demo.
                        </p>
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
};

export default DashBoard;
