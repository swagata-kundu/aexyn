import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Nav from '../components/nav';
import { getOffice } from '../state/action';

class Offices extends Component {
  componentDidMount = () => {
    this.props.getOffice();
  }

  render() {
    const { offices } = this.props;
    return (
      <section
        className="custom-body-container-wrapper"
        style={{ paddingLeft: 50 }}
      >
        <div className="custom-body-container">
          <div className="custom-section">
            <div className="custom-sidebar-tab">
              <div className="custom-tabber-group ">
                <Nav heading="Offices" />
                <div className="custom-company-section">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-12 content-align-right">
                        <NavLink to="/offices/create" className="custom-btn">
                      + Add Office
                        </NavLink>

                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table className="Company-detail-table">
                          <tbody>
                            <tr>
                              <td>
                                <span className="custom-name">Name</span>
                                {/* <span className="sort">
                                  <i
                                    className="fa fa-sort-asc"
                                    aria-hidden="true"
                                  />
                                </span> */}
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
                            {offices.length > 0 && offices.map(value => (
                              <tr key={value.id}>
                                <td>
                                  <span className="custom-name">
                                    <NavLink to={`/offices/${value.id}/employees`}>{value.name}</NavLink>
                                    <i
                                      className="fa fa-user-circle"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </td>
                                <td>
                                  <span className="custom-employee">{value.employee_count}</span>
                                </td>
                                <td>
                                  <span className="custom-phone">{value.phone_no ? value.phone_no : 'NA'}</span>
                                </td>
                                <td>
                                  <span className="custom-address">
                                    {value.address1}
                                    {value.address2}
                                  </span>
                                </td>
                              </tr>
                            ))}
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
  }
}

function mapStateToProps(state) {
  return {
    offices: state.company.offices,
    userInfo: state.common.get('userInfo').toJS(),
  };
}
export default connect(mapStateToProps, ({ getOffice }))(Offices);
