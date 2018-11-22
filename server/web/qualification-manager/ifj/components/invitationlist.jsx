import React, { Component } from 'react';
import { stringify } from 'querystring';

import { axios } from '../../../util/axios';
import { JUNGLE_INVITES } from '../../../endpoint';

export default class InvitationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      invitations: [],
    };
  }


  componentDidMount() {
    this.loadInvitations();
  }

  loadInvitations= async () => {
    try {
      const { status } = this.props;
      const result = await axios.get(`${JUNGLE_INVITES}?${stringify({ status })}`);
      this.setState({ invitations: result.data });
    } catch (error) {
      this.state({ invitations: [] });
    }
  }

  renderHeader=() => {
    const { status } = this.props;
    switch (status) {
      case 'SENT': return 'New Invitation';
      case 'IN_PROGRESS': return 'Draft in Progress';
      case 'REVISION': return 'Need Revision';
      case 'SUBMITTED': return 'Submitted';
      default: return '';
    }
  }

  renderItems=() => {
    const { invitations } = this.state;
    return invitations.map(i => (
      <div key={i.id} className="item">
        <div className="contact-detail">
          <div className="icon"><i className="fa fa-building-o" aria-hidden="true" /></div>
          <div className="member-detail">
            <span className="company-name">{i.company_name}</span>
            <span className="name">
              <span className="contact-person" />
              <a href="/user-profile">Member Name</a>
            </span>
            {' '}
  and
            {' '}
            <span>
              <span className="more">1</span>
              {' '}
  other
            </span>
          </div>
        </div>
        <div className="meta">
  Viewed by
          {' '}
          <span className="date">date</span>
        </div>
      </div>
    ));
  }

  render() {
    const { invitations } = this.state;
    return (
      <div className="tab-content">
        <h3 className="orange-border">
          {this.renderHeader()}
          <span className="count-value">{`(${invitations.length})`}</span>
          <span className="sort">
            <img alt="sort_icon" src="/static/images/sorting-icon.svg" />
          </span>
        </h3>
        <div className="item-group">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}
