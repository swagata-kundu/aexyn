import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Select from 'react-select';


import { load_invitation_reviewers, add_invitation_reviewers } from '../../state/action';

class Reviewers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: {},
    };
  }

  componentDidMount() {
    const { invitationId } = this.props;
    this.props.load_invitation_reviewers(invitationId);
  }

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
      <form className="custom-add-review-form" onSubmit={this.addReviewer}>
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

  renderReviewers=() => {
    const { reviewers } = this.props;
    return reviewers.map((r) => {
      const {
        pic, first_name, last_name, id, status,
      } = r;
      const icon = `${_.get(first_name, '0', '').toLocaleUpperCase()}${_.get(
        last_name,
        '0',
        '',
      ).toLocaleUpperCase()}`;
      return (
        <li key={id} className="review-item">
          <div className="custom-review-member-details clearfix">
            <div className="member-left-icon">
              <span className="short">{icon}</span>
              {status === 'DONE' ? <span className="checked"><i className="fa fa-check" aria-hidden="true" /></span> : null}
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="custom-sidebar-widget review-widget">
        <h3>Reviewers</h3>
        <div className="custom-sidebar-review">
          <ul className="custom-sidebar-reviw-listing clearfix">
            {this.renderReviewers()}
          </ul>
        </div>
        {this.renderAddReviewer()}
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
connect(mapStateToProps, { load_invitation_reviewers, add_invitation_reviewers })(Reviewers);
