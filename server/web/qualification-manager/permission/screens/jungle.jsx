import React, { Component } from 'react';
import { connect } from 'react-redux';
import MultiSelect from 'react-select';

import _ from 'lodash';

import {
  load_company_permission,
  change_company_permission,
  delete_jungle_permission,
  add_jungle_permission,
} from '../../state/action';
import { EmployeeName } from '../../../components/employees';

class JunglePermission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  componentDidMount() {
    this.props.load_company_permission();
  }

  renderEmployee = (employee) => {
    const { userInfo } = this.props;
    const { jungle_permissionId } = employee;

    const deleteEmployeePermission = () => {
      this.props.delete_jungle_permission(jungle_permissionId);
    };
    return (
      <tr className="access-to-jungle" key={employee.user_id}>
        <td>
          <EmployeeName {...employee} />
        </td>

        <td>
          <span className="remove-ico">
            {userInfo.id !== employee.user_id ? <i className="fa fa-times-circle" aria-hidden="true" onClick={deleteEmployeePermission} />
              : <i className="fa fa-times-circle" aria-hidden="true" />}

          </span>
        </td>
      </tr>
    );
  };

  selectEmployee=(selectedOption) => {
    this.setState({ selectedOption });
  }

  changeCompanyPermission=(e) => {
    this.props.change_company_permission({
      jungle_permission: e.target.value,
    });
  }

  addEmployeePermission=() => {
    const { selectedOption } = this.state;
    if (selectedOption) {
      const { value } = selectedOption;
      this.setState({
        selectedOption: null,
      });
      this.props.add_jungle_permission({ user_id: value });
    }
  }


  render() {
    const { selectedOption } = this.state;
    const { permission } = this.props;
    if (_.size(permission) === 0) {
      return null;
    }
    const { jungles, companyPermission } = permission;
    const { employees = [], permitted_employees = [] } = jungles;
    const { jungle_permission } = companyPermission;
    const options = employees.map(e => ({
      value: e.user_id,
      label: `${e.first_name} ${e.last_name}`,
    }));
    return (
      <div className="custom-permission-jungles-group custom-axeyn-tabber-item">
        <div className="container-fluid">
          <div className="row">
            <div className="jungle-left-group col-md-7">
              <h1>Access to invitations from Jungles</h1>
              <p>
                Set up which coworkers can fill out and submit qualification
                application and revise previously submitted application.
              </p>
              <form>
                <div className="form-field">
                  <input type="radio" value="ALL" onChange={this.changeCompanyPermission} checked={jungle_permission === 'ALL'} />
                  {' '}
                  Anyone at
                  {' '}
                  <span className="company-name">Karvi</span>
                  {' '}
                  can view/respond
                  to invites
                  <br />
                  <input type="radio" value="DESIGNATED" onChange={this.changeCompanyPermission} checked={jungle_permission === 'DESIGNATED'} />
                  {' '}
                  Only
                  designated team member can access application
                </div>
              </form>
              <h6>Individual access to invitation</h6>
              <form className="invitation-form">
                <div className="form-field">
                  <MultiSelect onChange={this.selectEmployee} isMulti={false} value={selectedOption} options={options} placeholder="Add a coworker" />
                  <button onClick={this.addEmployeePermission} type="button">+</button>
                </div>
              </form>
              {permitted_employees.length > 0 ? (
                <div className="jungle-bottom-group">
                  <table>
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <th>Remove</th>
                      </tr>
                      {permitted_employees.map(pe => this.renderEmployee(pe))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </div>
            <div className="jungle-right-group col-md-5">
              <h6>Invitation Permission</h6>
              <table>
                <tbody>
                  <tr>
                    <th />
                    <th>Access</th>
                  </tr>
                  <tr>
                    <td>Fill out qualification applications</td>
                    <td>
                      <i className="fa fa-check" aria-hidden="true" />
                    </td>
                  </tr>
                  <tr>
                    <td>Review and revise previously submitted applications</td>
                    <td>
                      <i className="fa fa-check" aria-hidden="true" />
                    </td>
                  </tr>
                  <tr>
                    <td>Grant application access to coworkers</td>
                    <td>
                      <i className="fa fa-check" aria-hidden="true" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    permission: state.permission.toJS(),
    userInfo: state.common.get('userInfo').toJS(),
  }),
  {
    load_company_permission,
    change_company_permission,
    delete_jungle_permission,
    add_jungle_permission,
  },
)(JunglePermission);
