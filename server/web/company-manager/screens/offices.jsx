import React from 'react';

const Offices = () => (
  <section
    className="custom-body-container-wrapper"
    style={{ paddingLeft: 50 }}
  >
    <div className="custom-body-container">
      <div className="custom-section">
        <div className="custom-sidebar-tab">
          <div className="custom-tabber-group ">
            <div
              className="custom-section-header-main-wrapper"
              style={{ minHeight: 105 }}
            >
              <div className="section-header clearfix">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1>Company Name</h1>
                      <ul className="clearfix">
                        <li className="active">
                          <a href="#">Offices</a>
                        </li>
                        <li>
                          <a href="#">Company Profile</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-company-section">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 content-align-right">
                    <a href="#" className="custom-btn">
                      + Add Office
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table className="Company-detail-table">
                      <tbody>
                        <tr>
                          <td>
                            <span className="custom-name">Name</span>
                            <span className="sort">
                              <i
                                className="fa fa-sort-asc"
                                aria-hidden="true"
                              />
                            </span>
                          </td>
                          <td>
                            <span className="custom-employee">Employee</span>
                          </td>
                          <td>
                            <span className="custom-phone">Phone Number</span>
                          </td>
                          <td>
                            <span className="custom-address">Address</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="custom-name">
                              <a href="#">Delhi</a>
                              <i
                                className="fa fa-user-circle"
                                aria-hidden="true"
                              />
                            </span>
                          </td>
                          <td>
                            <span className="custom-employee">2</span>
                          </td>
                          <td>
                            <span className="custom-phone">--</span>
                          </td>
                          <td>
                            <span className="custom-address">Abc</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="custom-name">
                              <a href="#">Gurgaon</a>
                              <i
                                className="fa fa-user-circle"
                                aria-hidden="true"
                              />
                            </span>
                          </td>
                          <td>
                            <span className="custom-employee">2</span>
                          </td>
                          <td>
                            <span className="custom-phone">--</span>
                          </td>
                          <td>
                            <span className="custom-address">Abc</span>
                          </td>
                        </tr>
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
  </section>
);

export default Offices;
