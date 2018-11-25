import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import { formatDate } from '../../../util';
import { EmployeeName } from '../../../components/employees/index';
import { load_invitation_reviewers, add_invitation_reviewers, delete_invitation_reviewers } from '../../state/action';

class Reviewers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: {},
    };
  }

  componentDidMount() {}


  handleEmployeeChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  renderAddReviewer=() => {
    const { employees } = this.props;

    const options = employees.map(e => ({
      label: e.email,
      value: e.user_id,
    }));
    const { selectedOption } = this.state;

    return (

      <div className="right-group">
        <form className="custom-add-review-form" onSubmit={this.addReviewer}>
          <div className="custom-review-form-inner">
            <Select
              value={selectedOption}
              onChange={this.handleEmployeeChange}
              isMulti={false}
              options={options}
            />
            {' '}
            <button type="submit">+</button>
          </div>
        </form>
      </div>

    );
  }

  addReviewer=(e) => {
    e.preventDefault();
    const { selectedOption } = this.state;
    const { invitationId } = this.props;

    if (selectedOption) {
      const params = {
        invitation_id: invitationId,
        user_id: selectedOption.value,
      };
      this.props.add_invitation_reviewers(invitationId, params);
      this.setState({ selectedOption: null });
    }
  }

  removeReviewer=(reviewerId) => {
    const { invitationId } = this.props;
    this.props.delete_invitation_reviewers(reviewerId, invitationId);
  }

  renderReviewers=() => {
    const { reviewers } = this.props;
    if (!reviewers.length) {
      return <p>No Record</p>;
    }

    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Review Status</th>
            <th>Remove</th>
          </tr>
          {reviewers.map(r => (
            <tr key={r.id}>
              <td>
                <EmployeeName {...r} />
              </td>
              <td>
                {r.status === 'NONE' ? <div className="invite-status">Invited</div> : null}
                <div className="meta-date">{formatDate(r.date_modified)}</div>
              </td>

              <td>
                <span className="custom-address">
                  <i onClick={() => { this.removeReviewer(r.id); }} data-toggle="tooltip" title="Remove Reviewer" className="fa fa-times-circle" aria-hidden="true" />
                </span>
              </td>

            </tr>
          ))}

        </tbody>
      </table>
    );
  }


  render() {
    return (
      <div className="custom-application-tabber-item">
        <div className="custom-application-top-row">
          <div className="custom-application-top-row-item under-review">
            <div className="top-row-left-content">
Application under review
              <span>
(
                <span className="review-number">0</span>
                {' '}
of
                {' '}
                <span className="total-review">1</span>
                {' '}
complete)
              </span>
            </div>
            <a className="pull-to-right complete-review-btn" href="#">Complete My Review</a>
          </div>
        </div>
        <div className="custom-application-reviewer-section">
          <div className="application-reviewer-top-group clearfix">
            <div className="left-group">
              <h3>Reviewers</h3>
            </div>
            {this.renderAddReviewer()}
          </div>
          <div className="application-reviewer-bottom-group">
            {this.renderReviewers()}
          </div>
        </div>
      </div>


    );
  }
}

function mapStateToProps(state) {
  return ({
    reviewers: state.invites.reviewers,
    employees: state.common.get('employees').toJS(),
  });
}

export default
connect(mapStateToProps,
  { load_invitation_reviewers, add_invitation_reviewers, delete_invitation_reviewers })(Reviewers);
