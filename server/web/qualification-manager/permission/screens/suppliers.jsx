import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import {
  load_company_permission,
  add_supplier_permission,
  change_company_permission,
  change_supplier_permission,
  delete_supplier_permission,
} from '../../state/action';
import { EmployeeName } from '../../../components/employees';

const AddpermissionForm = (props) => {
  const {
    handleSubmit, onSubmit, employees,
  } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="four-col-permission-form clearfix">
        <div className="column-1">
          <div className="label">
            <label>Add a coworker</label>
          </div>
          <div className="input-field">
            <Field required component="select" name="user_id">
              <option value="">Select</option>
              {employees.map(e => (
                <option value={e.user_id} key={e.user_id}>
                  {`${e.first_name} ${
                    e.last_name
                  }`}

                </option>
              ))}
            </Field>
          </div>
        </div>
        <div className="column-2">
          <div className="input-field">
            <Field required component="select" name="permission">
              <option value="">Select</option>
              <option value="VIEW">View Only Access</option>
              <option value="LIMITED">Limited Access</option>
              <option value="ADMIN">Admin Access</option>
            </Field>
          </div>
        </div>
        <div className="column-3">
          <Field type="checkbox" name="autoAdd" component="input" />
          {' '}
          <strong>Auto add</strong>
        </div>
        <div className="column-4">
          <button type="submit">+ Add</button>
        </div>
      </div>
    </form>
  );
};

const AddpermissionFormConnected = reduxForm({
  form: 'addjunglepermission',
})(AddpermissionForm);
class SupplierPermission extends Component {
  componentDidMount() {
    this.props.load_company_permission();
  }

  addUserPermission = (values) => {
    const params = {
      autoAdd: false,
      ...values,
    };
    this.props.add_supplier_permission(params);
  };

  changeCompanyPermisssion=(e) => {
    this.props.change_company_permission({
      supplier_permission: e.target.value,
    });
  }

  renderPermissionExplanation = () => (
    <div className="jungle-right-group col-md-5">
      <h6>Permission Levels</h6>
      <table>
        <tbody>
          <tr>
            <th />
            <th>View only</th>
            <th>Limited</th>
            <th>Admin</th>
          </tr>
          <tr>
            <td>
              View submitted applications
              <br />
              {' '}
(excluding financial info)
            </td>
            <td>
              <i className="fa fa-check" aria-hidden="true" />
            </td>
            <td>
              <i className="fa fa-check" aria-hidden="true" />
            </td>
            <td>
              <i className="fa fa-check" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Invite to qualify and send reminders</td>
            <td />
            <td>
              <i className="fa fa-check" aria-hidden="true" />
            </td>
            <td>
              <i className="fa fa-check" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>
              Review applications and internal notes
              <br />
              {' '}
(excluding financial info)
            </td>
            <td />
            <td>
              <i className="fa fa-check" aria-hidden="true" />
            </td>
            <td>
              <i className="fa fa-check" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Customize the application questionnaire</td>
            <td />
            <td />
            <td>
              <i className="fa fa-check" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Review financial information</td>
            <td />
            <td />
            <td>
              <i className="fa fa-check" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Approve/Deny applications</td>
            <td />
            <td />
            <td>
              <i className="fa fa-check" aria-hidden="true" />
            </td>
          </tr>
          <tr>
            <td>Modify settings and permissions</td>
            <td />
            <td />
            <td>
              <i className="fa fa-check" aria-hidden="true" />
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Auto add</strong>
        {' '}
is the option to add a team member to every
        new applications.
      </p>
      <p>
        To see a coworker's name in the list of reviewers, you must add them
        indivisually.
      </p>
    </div>
  );

  renderEmployee = (employee) => {
    const { userInfo } = this.props;
    const { supplier_autoAdd, supplier_permission, supplier_permissionId } = employee;
    const changeEmployeePermission = (e) => {
      const { value, checked, name } = e.target;
      const params = {
        supplier_permissionId,
        permission: supplier_permission,
        autoAdd: supplier_autoAdd,
      };
      const newParams = {
        [name]: name === 'permission' ? value : checked,
      };
      this.props.change_supplier_permission(Object.assign(params, newParams));
    };

    const deleteEmployeePermission = () => {
      this.props.delete_supplier_permission(supplier_permissionId);
    };
    return (
      <tr className="reviewer-permissions" key={employee.user_id}>
        <td>
          <EmployeeName {...employee} />
        </td>
        <td>
          <div className="select-field">
            <select name="permission" value={supplier_permission} onChange={changeEmployeePermission}>
              <option value="VIEW">View Only Access</option>
              <option value="LIMITED">Limited Access</option>
              <option value="ADMIN">Admin Access</option>
            </select>
          </div>
        </td>
        <td>
          <input onChange={changeEmployeePermission} name="autoAdd" type="checkbox" defaultChecked={supplier_autoAdd} />
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

  render() {
    const { permission } = this.props;
    if (_.size(permission) === 0) {
      return null;
    }
    const { permissions, suppliers, companyPermission } = permission;
    const { employees = [], permitted_employees = [] } = suppliers;
    return (
      <div className="custom-permission-supplier-group custom-axeyn-tabber-item">
        <div className="container-fluid">
          <div className="row">
            <div className="jungle-left-group col-md-7">
              <h1>Reviewer Permissions</h1>
              <p>Set up who can reviewand see qualification applications.</p>

              <AddpermissionFormConnected
                onSubmit={this.addUserPermission}
                permissionOption={permissions}
                employees={employees}
              />
              <p className="form-bottom-text">
                <strong>Everyone else</strong>
                {' '}
as
                {' '}
                <span className="company-name">Karvi</span>
                {' '}
has
                <select value={companyPermission.supplier_permission} onChange={this.changeCompanyPermisssion}>
                  <option value="NO">No Access</option>
                  <option value="VIEW">View Only Access</option>
                  <option value="LIMITED">Limited Access</option>
                  <option value="ADMIN">Admin Access</option>
                </select>
                {' '}
                to all qualification applications.
              </p>
              {permitted_employees.length > 0 ? (
                <div className="jungle-bottom-group">
                  <table>
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <th>Permission</th>
                        <th>Auto-Add</th>
                        <th>Remove</th>
                      </tr>
                      {permitted_employees.map(pe => this.renderEmployee(pe))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </div>

            {this.renderPermissionExplanation()}
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
    add_supplier_permission,
    change_company_permission,
    change_supplier_permission,
    delete_supplier_permission,
  },
)(SupplierPermission);
