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

  getHeaderClass=() => {
    const { status } = this.props;
    switch (status) {
      case 'SENT': return 'orange-border';
      case 'IN_PROGRESS': return 'blue-border';
      case 'REVISION': return 'dark-green-border';
      case 'SUBMITTED': return 'green-border';
      default: return '';
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
            <span className="company-name" data-toggle="modal" data-target="#company-detail-popup">
              {i.company_name}
            </span>
            <div>
              <span className="name">
                <span className="contact-person" />
                <a href="#" data-toggle="modal" data-target="#user-detail-popup">Member Name</a>
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
        </div>
        <div className="meta">
Viewed by
          {' '}
          <span className="date">date</span>
        </div>
        <a href={`/qualification-manager/invitation-from-jungle/invitation/${i.id}`} className="item-link" />
      </div>
    ));
  }

  render() {
    const { invitations } = this.state;
    const headerClass = this.getHeaderClass();

    return (
      <div className="tab-content">
        <h3 className={headerClass}>
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
