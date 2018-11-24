import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import { EmployeeName } from '../../../../components/employees';
import { axios, formatDate } from '../../../../util';
import { JUNGLE_EDITORS } from '../../../../endpoint';
import { load_all_employees } from '../../../../state/action';

class Editors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editors: [],
      selectedOption: {},
    };
  }


  componentDidMount() {
    this.loadEditors();
    const { company_id } = this.props.userInfo;
    this.props.load_all_employees(company_id);
  }

  loadEditors = async () => {
    const { invitationId } = this.props;

    try {
      const result = await axios.get(`${JUNGLE_EDITORS}${invitationId}`);
      this.setState({ editors: result.data });
    } catch (error) {
      this.setState({ editors: [] });
    }
  };


  renderEditors=() => {
    const { editors } = this.state;
    if (!editors.length) {
      return <p>No Record</p>;
    }
    return (
      <table>
        <tbody>
          <tr>
            <th>
            Name
              <span className="sort">
                <i className="fa fa-sort-asc" aria-hidden="true" />
              </span>
            </th>
            <th>Editor Status</th>
            <th>Remove</th>
          </tr>
          {editors.map(e => (
            <tr key={e.id}>
              <td>
                <EmployeeName {...e} />
              </td>
              <td>
                {e.status === 'NONE' ? <div className="invite-status">Invited</div> : null}
                <div className="meta-date">{formatDate(e.date_modified)}</div>
              </td>
              <td>
                <span className="custom-address">
                  <i
                    data-toggle="tooltip"
                    title="Remove Editor"
                    className="fa fa-times-circle"
                    aria-hidden="true"
                    onClick={() => this.removeEditor(e.id)}
                  />
                </span>
              </td>
            </tr>))}
        </tbody>
      </table>
    );
  }

  handleEmployeeChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  addEditor= async (e) => {
    e.preventDefault();
    const { selectedOption } = this.state;
    const { invitationId } = this.props;

    if (selectedOption) {
      const params = {
        invitation_id: invitationId,
        user_id: selectedOption.value,
      };
      try {
        await axios.post(JUNGLE_EDITORS, params);
        this.loadEditors();
      } catch (error) {
        console.log(error);
      }
      this.setState({ selectedOption: null });
    }
  }

  removeEditor=async (editorId) => {
    await axios.delete(`${JUNGLE_EDITORS}${editorId}`);
    this.loadEditors();
  }

  renderAddEditor=() => {
    const { employees } = this.props;

    const options = employees.map(e => ({
      label: e.email,
      value: e.user_id,
    }));
    const { selectedOption } = this.state;

    return (

      <div className="right-group">
        <form className="custom-add-review-form" onSubmit={this.addEditor}>
          <div className="custom-review-form-inner">
            <Select
              value={selectedOption}
              onChange={this.handleEmployeeChange}
              isMulti={false}
              options={options}
            />
            <button type="submit">+</button>
          </div>
        </form>
      </div>

    );
  }

  render() {
    const a = 1;
    return (
      <div className="custom-editor-group">
        <div className="container-fluid">
          <div className="row">
            <div className="custom-editors-section col-md-8">
              <div className="editors-top-group clearfix">
                <div className="left-group">
                  <h3>Editors</h3>
                </div>
                {this.renderAddEditor()}
              </div>
              <div className="editors-bottom-group">
                {this.renderEditors()}
              </div>
            </div>
            <div className="editor-right-group col-md-4">
              <div className="editor-right-content clearfix">
                <div className="icon-group">
                  <i className="fa fa-lock" aria-hidden="true" />
                </div>
                <div className="content-group">
                  <p>
                    Only selected indivituals at
                    {' '}
                    <span className="company-name">Trial</span>
                    {' '}
have access to
                    view and edit this questionnaire.
                  </p>
                  <a href="#" className="security-settings">
                    Change your Security Settings &gt;&gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    employees: state.common.get('employees').toJS(),
    userInfo: state.common.get('userInfo').toJS(),
  });
}

export default connect(mapStateToProps, { load_all_employees })(Editors);
