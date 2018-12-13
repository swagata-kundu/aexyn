import React, { Component } from 'react';
import { stringify } from 'querystring';

import { axios } from '../../../util/axios';
import { MFS_INVITES } from '../../../endpoint';

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
      const result = await axios.get(`${MFS_INVITES}?${stringify({ status })}`);
      this.setState({ invitations: result.data });
    } catch (error) {
      this.setState({ invitations: [] });
    }
  }

  renderHeader=() => {
    const { status } = this.props;
    switch (status) {
      case 'SENT': return 'New Invitation';
      case 'IN_PROGRESS': return 'Application in Progress';
      case 'REVISION': return 'Need Revision';
      case 'SUBMITTED': return 'Application Submitted';
      case 'APPROVED': return 'Application Approved';
      case 'EXPIRING': return 'Expiring Soon';
      case 'EXPIRED': return 'Expired';
      case 'DENIED': return 'Denied';
      default: return '';
    }
  }

  getHeaderClass=() => {
    const { status } = this.props;
    switch (status) {
      case 'SENT': return 'orange-border';
      case 'IN_PROGRESS': return 'dark-green-border';
      case 'REVISION': return 'dark-green-border';
      case 'SUBMITTED': return 'blue-border';
      case 'APPROVED': return 'green-border';
      case 'EXPIRING': return 'pink-border';
      case 'EXPIRED': return 'grey-border';
      case 'DENIED': return 'pink-border';
      default: return '';
    }
  }


  renderReviewers=reviewers => reviewers.map(r => (
    <li>
      <span className="reviewed-member-image">
        <img src="/static/images/Steven_Hallam-slide.jpg" alt="Reviewer Name" />
      </span>
      {r.status === 'DONE' && <span className="check"><i className="fa fa-check-circle" aria-hidden="true" /></span>}
    </li>
  ))


  renderItems=() => {
    const { invitations } = this.state;
    return invitations.map((i) => {
      const { sentTo, reviewers } = i;
      const completedReviews = reviewers.filter(r => r.status === 'DONE');

      const sentToUser = sentTo[0];
      const total_sent = sentTo.length;
      return (
        <div key={i.id} className="item">
          <div className="contact-detail">
            <div className="icon"><i className="fa fa-building-o" aria-hidden="true" /></div>
            <div className="member-detail">
              <span className="company-name" data-toggle="modal" data-target="#company-detail-popup">{i.company_name}</span>
              <div>
                <span className="name">
                  <span className="contact-person" />
                  <a href="#">
                    {sentToUser.first_name}
                    {' '}
                    {sentToUser.last_name}

                  </a>
                </span>

                {total_sent > 1 ? (
                  <span>
                    {' '}
                    {' '}
and
                    {' '}
                    <span className="more">{total_sent - 1}</span>
                    {' '}
                    {' '}
other

                  </span>
                ) : null}

              </div>
            </div>
          </div>
          <div className="meta">
Viewed by
            {' '}
            <span className="date">date</span>
          </div>
          <div className="more-member">
            <span className="reviewed-text">
Reviewers (
              {' '}
              <span className="current-reviewer">
                {reviewers.length}
                {' '}
              </span>
          of
              {' '}
              <span className="total-reviewer">{completedReviews.length}</span>
              {' '}
reviews completed )

            </span>
            <ul>
              {this.renderReviewers(reviewers)}

            </ul>
          </div>
          <a href={`/qualification-manager/manage-food-suppliers/invitation/${i.id}/status`} className="item-link" />
        </div>

      );
    });
  }

  render() {
    const { invitations } = this.state;
    const borderClass = this.getHeaderClass();
    return (
      <div className="tab-content">
        <h3 className={borderClass}>
          {this.renderHeader()}
          <span className="count-value">{`(${invitations.length})`}</span>
          <span className="sort">
            <img alt="sort_icon" src="/static/images/sorting-icon.svg" />
          </span>
        </h3>
        <div className="item-group">
          {this.renderItems()}
        </div>
        {invitations.length > 0 && (
        <div className="custom-mfs-item-bottom-text orange-border">
          <a href="#">
Send a message to remind
            {' '}
            {invitations.length}
            {' '}
vendor
            {' '}
            <i className="fa fa-angle-double-right" aria-hidden="true" />
          </a>
        </div>
        )}
      </div>
    );
  }
}
