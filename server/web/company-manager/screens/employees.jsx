import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from '../components/sidebar';
import NavBar from '../components/officenav';
import {
  getEmployee, delete_employee, invite_employee, changeTL,
} from '../state/action';
import { EmployeeName } from '../../components/employees/index';

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  componentDidMount = () => {
    this.loadEmployees();
  }

  loadEmployees=() => {
    const { office_id } = this.props.match.params;
    this.props.getEmployee(office_id);
  }

  deleteEmployee=(user_id) => {
    const { office_id } = this.props.match.params;
    this.props.delete_employee({ office_id, user_id });
  }

  changeEmail=(e) => {
    this.setState({ email: e.target.value });
  }

  invite=(e) => {
    const { office_id } = this.props.match.params;
    e.preventDefault();
    this.props.invite_employee({
      email: this.state.email,
      office_id,
    });
    this.setState({ email: '' });
  }

  changeTl=(technical_lead, id) => {
    const { office_id } = this.props.match.params;
    this.props.changeTL({ office_id, technical_lead, id });
  }

  render() {
    const { employees, match, userInfo } = this.props;
    const { id } = userInfo;
    const { office_id } = match.params;
    const { email } = this.state;
    return (
      <section className="custom-body-container-wrapper" style={{ paddingLeft: '50px' }}>
        <div className="custom-body-container">
          <div className="custom-questionnaire-section">
            <SideBar />
            <div className="custom-right-group">
              <NavBar office_id={office_id} />
              <div className="custom-employee-right-col-inner">
                <div className="employee-form">
                  <form onSubmit={this.invite}>
                    <div className="form-field">
                      <input onChange={this.changeEmail} value={email} type="Email" placeholder="Coworker Email" />
                    </div>
                    <div className="form-btn-grp">
                      <button type="submit">+ Invite Coworker</button>
                    </div>
                  </form>
                </div>
                {!!employees.length && (
                <table className="Company-detail-table">
                  <tbody>
                    <tr>
                      <td>
                        <span className="custom-name">Name</span>
                        {/* <span className="sort"><i className="fa fa-sort-asc" aria-hidden="true" /></span> */}
                      </td>
                      <td><span className="custom-employee">Contact</span></td>
                      <td>
                        <span className="custom-phone">
                          Lead
                          <i data-toggle="tooltip" title="Technical Lead" className="fa fa-question-circle" aria-hidden="true" />
                        </span>

                      </td>
                      <td><span className="custom-address"><div className="arrow"><i className="fa fa-angle-down" aria-hidden="true" /></div></span></td>
                    </tr>
                    {employees.map(val => (
                      <tr key={val.id}>
                        <td>
                          <EmployeeName {...val} />
                        </td>
                        <td><span className="custom-employee">{val.email}</span></td>
                        <td><input type="checkbox" onChange={(e) => { this.changeTl(e.target.checked, val.id); }} checked={val.technical_lead} /></td>
                        <td>
                          <span className="custom-address">
                            {id === val.user_id ? <i className="fa fa-times-circle" aria-hidden="true" data-toggle="tooltip" title="Can not delete" />
                              : (
                                <i
                                  onClick={() => { this.deleteEmployee(val.user_id); }}
                                  className="fa fa-times-circle"
                                  aria-hidden="true"
                                  data-toggle="tooltip"
                                  title=""
                                />
                              )}

                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
                )}
                {!employees.length && <p>No Employees</p>}
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
    employees: state.company.employees,
    userInfo: state.common.get('userInfo').toJS(),
  };
}
export default connect(mapStateToProps,
  {
    getEmployee, delete_employee, invite_employee, changeTL,
  })(Employees);
