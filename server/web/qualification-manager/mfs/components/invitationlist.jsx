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
    return invitations.map((i) => {
      const { sentTo, reviewers } = i;
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
              <span className="current-reviewer">1</span>
          of
              {' '}
              <span className="total-reviewer">10</span>
              {' '}
reviews completed )

            </span>
            <ul>
              <li>
                <span className="reviewed-member-image" />
                <span className="check"><i className="fa fa-check-circle" aria-hidden="true" /></span>
              </li>
              <li>
                <span className="reviewed-member-image"><img src="/static/images/Steven_Hallam-slide.jpg" alt="Reviewer Name" /></span>
                <span className="check"><i className="fa fa-check-circle" aria-hidden="true" /></span>
              </li>
              <li className="view-all">
View all
                <ul>
                  <li>
                    <span className="name">
                      <span className="contact-person">
                        <span className="check"><i className="fa fa-check-circle" aria-hidden="true" /></span>
                      </span>
                      <a href="/user-profile">Member Name</a>

                    </span>

                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a href={`/qualification-manager/manage-food-suppliers/invitation/${i.id}/status`} className="item-link" />
        </div>

      );
    });
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
        <div className="custom-mfs-item-bottom-text orange-border">
          <a href="#">
Send a message to remind 1 vendor
            {' '}
            <i className="fa fa-angle-double-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }
}
