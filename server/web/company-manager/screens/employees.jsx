import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from '../components/sidebar';
import NavBar from '../components/employeeNav';
import { getEmployee } from '../state/action';
import { EmployeeName } from '../../components/employees/index';

class Employees extends Component {
  componentDidMount = async () => {
    const { office_id } = this.props.match.params;
    await this.props.getEmployee(office_id);
  }

  render() {
    const { getEmployees, commonData } = this.props;
    return (
      <section className="custom-body-container-wrapper" style={{ paddingLeft: '50px' }}>
        <div className="custom-body-container">
          <div className="custom-questionnaire-section">
            <SideBar />
            <div className="custom-right-group">
              <NavBar />
              <div className="custom-employee-right-col-inner">
                <div className="employee-form">
                  <form>
                    <div className="form-field">
                      <input type="Email" placeholder="Coworker Email" />
                    </div>
                    <div className="form-btn-grp">
                      <button type="submbit">+ Invite Coworker</button>
                    </div>
                  </form>
                </div>
                <table className="Company-detail-table">
                  <tbody>
                    <tr>
                      <td>
                        <span className="custom-name">Name</span>
                        <span className="sort"><i className="fa fa-sort-asc" aria-hidden="true" /></span>
                      </td>
                      <td><span className="custom-employee">Contact</span></td>
                      <td>
                        <span className="custom-phone">
Lead
                          <i data-toggle="tooltip" title="uidgghfgurfgvhcgjdhff fugrfuigufgrf kjfhrjgfjrgfrfjhrgfhrgjgfrj" className="fa fa-question-circle" aria-hidden="true" />
                        </span>

                      </td>
                      <td><span className="custom-address"><div className="arrow"><i className="fa fa-angle-down" aria-hidden="true" /></div></span></td>
                    </tr>
                    {getEmployees.length > 0 && getEmployees.map(val => (
                      <tr key={val.id}>
                        <td>
                          <EmployeeName {...val} />
                        </td>
                        <td><span className="custom-employee">{val.email}</span></td>
                        <td><input type="checkbox" defaultChecked={val.technical_lead} /></td>
                        <td>
                          {commonData.id !== val.user_id ? (
                            <span className="custom-address">
                              <i className="fa fa-times-circle" aria-hidden="true" />
                            </span>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
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
    getEmployees: state.company.getEmployees,
    commonData: state.common.get('userInfo').toJS(),
  };
}
export default connect(mapStateToProps, { getEmployee })(Employees);
