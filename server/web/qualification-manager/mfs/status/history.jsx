import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load_invitation_history_service } from '../../../service/invitation';
import { formatDate, formatTime, userIcon } from '../../../util';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      histories: {
        history: [],
        invitees: [],
      },
    };
  }

  async componentDidMount() {
    const { invitationId } = this.props;
    try {
      const data = await load_invitation_history_service(invitationId);
      this.setState({
        histories: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  renderHistoryItems=() => {
    const { histories } = this.state;
    const { history } = histories;
    return history.map((h) => {
      const { activity_type, activity_status } = h;
      let status = '';
      if (activity_type === 'ANSWER') {
        if (activity_status === 'SUBMITTED') {
          status = 'submitted the qualification form';
        } else if (activity_status === 'IN_PROGRESS') {
          status = 'edited the qualification form';
        }
      } else if (activity_type === 'REVIEWER_STATUS') {
        if (activity_status === 'DONE') {
          status = 'reviewed the qualification answers';
        } else if (activity_status === 'NONE') {
          status = 'invited to review';
        }
      } else if (activity_type === 'INVITATION') {
        if (activity_status === 'REVISION') {
          status = 'asked revission for the qualification';
        } else if (activity_status === 'APPROVED') {
          status = 'approved the qualification status';
        } else if (activity_status === 'APPROVED_EXCEPTION') {
          status = 'approved the qualification status with exception';
        } else if (activity_status === 'DENIED') {
          status = 'denied the qualification status';
        } else if (activity_status === 'SUBMITTED') {
          status = 'submitted the qualification form';
        }
      }

      return (
        <div key={h.id} className="history-items clearfix">
          <div className="left-group">
            <div className="icon-group" />
            <div className="history-meta">
              <span className="history-date">{formatDate(h.date_created)}</span>
              {' '}
at
              {' '}
              <span className="history-time">{formatTime(h.date_created)}</span>
              {' '}
HST
            </div>
          </div>
          <div className="right-group">
            <div className="member-detail">
              <div className="icon-group">
                <span className="member-icon">{userIcon(h)}</span>
              </div>
              <div className="detail-group">
                <a href="#" className="member-name">
                  {h.first_name}
                  {' '}
                  {h.last_name}
                </a>
                {' '}
                <span>
                  {status}
.
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { reviewers } = this.props;
    const completedReviews = reviewers.filter(r => r.status === 'DONE');

    return (
      <div className="custom-application-tabber-item">
        <div className="custom-application-top-row">
          <div className="custom-application-top-row-item under-review">
            <div className="top-row-left-content">
                Application under review
              <span>
                        (
                <span className="review-number">{completedReviews.length}</span>
                {' '}
                    of
                {' '}
                <span className="total-review">{reviewers.length}</span>
                {' '}
                complete)
              </span>
            </div>
            {/* <a className="pull-to-right complete-review-btn" href="#">Complete My Review</a> */}
          </div>
          <div className="custom-application-history-section">
            <h3>Full History</h3>
            <div className="application-history-group">


              {this.renderHistoryItems()}


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    reviewers: state.invites.reviewers,
  }),

)(History);
