import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

import { load_invitation_answers, save_invitation_status } from '../../state/invitation_action';
import { submit_invitation_review } from '../../state/action';
import { formatDate, formatTime, userIcon } from '../../../util';
import StatusForm from './statusForm';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readyToReview: false,
    };
  }

  componentDidMount() {
    const { invitationId } = this.props;
    this.props.load_invitation_answers(invitationId);
  }

  toogleReady = () => {
    const { readyToReview } = this.state;
    this.setState({
      readyToReview: !readyToReview,
    });
  };

  submitReview = (status) => {
    const { invitationId, userInfo } = this.props;
    const { id } = userInfo;
    const params = { invitation_id: invitationId, user_id: id, status };
    this.props.submit_invitation_review(invitationId, params);
  };

  renderTopStatus = () => {
    const { invitation, reviewers } = this.props;
    const completedReviews = reviewers.filter(r => r.status === 'DONE');
    const { detail } = invitation;
    if (detail.status === 'SENT' || detail.status === 'IN_PROGRESS') {
      return (
        <div className="custom-application-top-row">
          <div className="custom-application-top-row-item awaiting-response">
            <div className="top-row-left-content">Awaiting response</div>
            <a className="pull-to-right send-reminder" href="#">
              Send reminder
              <i className="fa fa-angle-double-right" />
            </a>
          </div>
        </div>
      );
    }

    if (
      detail.status === 'SUBMITTED'
      && completedReviews.length !== reviewers.length
    ) {
      return (
        <div className="custom-application-top-row">
          <div className="custom-application-top-row-item under-review">
            <div className="top-row-left-content">
              Application under review
              <span>
                (
                <span className="review-number">{reviewers.length}</span>
                {' '}
of
                {' '}
                <span className="total-review">{completedReviews.length}</span>
                {' '}
                complete)
              </span>
            </div>
            <a className="pull-to-right complete-review-btn" href="#">
              Complete My Review
            </a>
          </div>
        </div>
      );
    }

    if (
      detail.status === 'SUBMITTED'
      && completedReviews.length === reviewers.length
    ) {
      const { readyToReview } = this.state;

      return (
        <div className="custom-application-top-row">
          <div className="custom-application-top-row-item complete-review">
            <div className="top-row-left-content">All reviews complete</div>
            {!readyToReview && (
              <a
                onClick={this.toogleReady}
                className="pull-to-right deny-btn"
                href="#"
              >
                I'm Ready to Qualify/Deny
                <i className="fa fa-angle-double-right" />
              </a>
            )}
          </div>
        </div>
      );
    }

    if (detail.status === 'APPROVED' || detail.status === 'APPROVED_EXCEPTION') {
      return (
        <div className="custom-application-top-row">
          <div className="custom-application-top-row-item qualified">
            <div className="top-row-left-content">
              <i className="fa fa-check" aria-hidden="true" />
              Qualified
            </div>
          </div>
        </div>
      );
    }

    return null;
  };


  saveInvitationStatus=() => {
    this.props.submit('qualification-status');
  }

  submitInvitationForm=(values) => {
    const { invitationId, invitation } = this.props;
    const { detail } = invitation;
    const { invited_company_id } = detail;
    if (!values.files || values.files.length === 0) {
      delete values.files;
    }
    const params = {
      ...values,
      invitation_id: invitationId,
      invited_company_id,
    };
    this.props.save_invitation_status(invitationId, params);
  }

  renderForm = () => {
    const { invitation, reviewers } = this.props;
    const completedReviews = reviewers.filter(r => r.status === 'DONE');
    const { detail } = invitation;
    const { status } = detail;
    const { invited_company_name, invited_by_company_name } = detail;
    const { readyToReview } = this.state;
    let isApproved = false;
    if (status === 'APPROVED_EXCEPTION' || status === 'APPROVED' || status === 'DENIED') {
      isApproved = true;
    }
    if (isApproved) {
      return (
        <div className="custom-qualification-status-form">
          <div className="custom-form-top-content clearfix">
            <div className="form-title">
              <h3>Qualification Status</h3>
            </div>
            <StatusForm disabled={isApproved} onSubmit={this.submitInvitationForm} />
          </div>
        </div>
      );
    }

    if (status !== 'SUBMITTED') {
      return (
        <div className="custom-qualification-status-form">
          <div className="form-bottom-tagline">
            <p>
              Once you are finished reviewing
              <span className="company-name">
                {' '}
                {invited_company_name}
              </span>
              {' '}
              application, you can set their qualification limits, set as
              expiration date, and attach files.
            </p>
          </div>
        </div>
      );
    }


    if (
      detail.status === 'SUBMITTED'
      && completedReviews.length === reviewers.length
    ) {
      return (
        <div className="custom-qualification-status-form">
          <div className="custom-form-top-content clearfix">
            <div className="form-title">
              <h3>Qualification Status</h3>
            </div>
            <div className="custom-form-btn">
              {readyToReview && (
                <button onClick={this.toogleReady} type="button" className="cancel-btn">
                  Cancel
                </button>
              )}
              {readyToReview && (
                <button onClick={this.saveInvitationStatus} type="button" className="custom-btn save-btn">
                  Save
                </button>
              )}
              {!readyToReview && (
                <button
                  onClick={this.toogleReady}
                  className="custom-btn ready-btn"
                  type="button"
                >
                  I'm Ready to Qualify/Deny
                </button>
              )}
            </div>
          </div>
          {readyToReview && (
            <StatusForm onSubmit={this.submitInvitationForm} />
          )}
          <div className="form-bottom-tagline">
            <p>
              Once you are finished reviewing
              <span className="company-name">
                {' '}
                {invited_by_company_name}
              </span>
              {' '}
              application, you can set their qualification limits, set as
              expiration date, and attach files.
            </p>
          </div>
        </div>
      );
    }
  };

  renderReviewers = () => {
    const { userInfo, reviewers } = this.props;

    return reviewers.map((r) => {
      const { first_name, last_name } = r;
      return (
        <div key={r.id} className="custom-app-process-listing-item clearfix">
          <div className="custom-invite-item-left-col">
            <div className="custom-invite-member-details">
              <div className="member-left-icon">
                <span className="short">AA</span>
                {r.status === 'DONE' && (
                  <span className="checked">
                    <i className="fa fa-check" aria-hidden="true" />
                  </span>
                )}
              </div>
              <div className="member-details-right-col">
                <span className="invited-member-name">
                  <a href="#">
                    {first_name}
                    {' '}
                    {last_name}
                  </a>
                </span>
                <span className="invited-member-designation">Job Title</span>
              </div>
            </div>
          </div>

          {userInfo.id === r.user_id && (
            <div className="custom-invite-item-right-col">
              {r.status !== 'DONE' && (
                <button
                  type="button"
                  className="custom-btn"
                  onClick={() => this.submitReview('DONE')}
                >
                  I'm Done Reviewing
                </button>
              )}
              {r.status !== 'DONE' && (
                <span className="not-review">Did not reviw</span>
              )}
              {r.status === 'DONE' && (
                <span className="complete-review-byline">
                  Completed review on
                  {' '}
                  <span className="invite-date">
                    {formatDate(r.date_modified)}
                  </span>
                  {' '}
                  at
                  {' '}
                  <span className="invite-time">
                    {formatTime(r.date_modified)}
                  </span>
                </span>
              )}
            </div>
          )}
        </div>
      );
    });
  };

  renderInvitees=() => {
    const { invitation } = this.props;
    const { detail, invitee } = invitation;
    const { invited_company_name } = detail;

    return (
      <div className="custom-app-process-item">
        <div className="custom-app-process-item-title">
          <span className="app-process-number">1</span>
          {' '}
Invite
          {' '}
          <span className="custom-company-name">Vendor</span>
          {' '}
to apply
        </div>
        <div className="invite-app-inner">
          <div className="invited-form">
            <span className="sorting">
              <i className="fa fa-sort-alpha-asc" />
            </span>
        Invited from
            {' '}
            {' '}
            <span className="invited-company">{invited_company_name}</span>
          </div>
          <div className="custom-app-process-listing">

            {invitee.map(i => (
              <div key={i.user_id} className="custom-app-process-listing-item clearfix">
                <div className="custom-invite-item-left-col">
                  <div className="custom-invite-member-details">
                    <div className="member-left-icon">
                      <span className="short">{userIcon(i)}</span>
                    </div>
                    <div className="member-details-right-col">
                      <span className="invited-member-name">
                        <a href="#">
                          {i.first_name}
                          {' '}
                          {i.last_name}
                        </a>
                      </span>
                      <span className="invited-member-designation">
                        {i.job_title}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="custom-invite-item-right-col">
                  <span className="invite-byline">
              Invited to apply on
                    {' '}
                    <span className="invite-date">{formatDate(i.invited_on)}</span>
                    {' '}
at
                    {' '}
                    <span className="invite-time">{formatTime(i.invited_on)}</span>
                  </span>
                </div>
              </div>
            ))}


          </div>

        </div>
      </div>
    );
  }

  render() {
    const { invitation } = this.props;

    if (_.isEmpty(invitation.detail)) {
      return null;
    }
    const { detail } = invitation;
    const { invited_by_company_name, status } = detail;
    let isSubmitted = false;
    if (status === 'APPROVED_EXCEPTION' || status === 'APPROVED' || status === 'DENIED') {
      isSubmitted = true;
    }

    return (
      <div className="custom-application-tabber-item">
        {this.renderTopStatus()}
        {this.renderForm()}
        <div className="custom-application-process-section">
          <h3>Application Process</h3>
          <div className="custom-application-process-main-grp">

            {this.renderInvitees()}

            <div className="custom-app-process-item item-2">
              <div className="custom-app-process-item-title">
                <span className="app-process-number">2</span>
                {' '}
Wait for
                {' '}
                <span className="custom-company-name">Vendor</span>
                {' '}
to Submit
                Completed Questionaire
              </div>
              <div className="row">
                <div className="col-sm-9">
                  <p>
                    <span className="custom-company-name">Vendor</span>
                    {' '}
will be
                    asked to fill out your company's
                    {' '}
                    <a href="#">qualification questionnaire</a>
.
                  </p>
                  <div className="custom-sent-invitation-byline">
                    <p>
                      <span className="sent-invitation-company-name">
                        Plaster paris
                      </span>
                      {' '}
                      set an invitaion to apply on
                      {' '}
                      <span className="sent-invite-date">Oct 29, 2018</span>
                      {' '}
at
                      {' '}
                      <span className="sent invite-time">11:29 PM PDT</span>
.
                    </p>
                  </div>
                  <div className="custom-skipped-step-byline">
                    <p>
                      <span className="sent-invitation-company-name">
                        Plaster paris
                      </span>
                      {' '}
                      skipped this step on
                      {' '}
                      <span className="skipped-invite-date">Oct 29, 2018</span>
                      {' '}
                      at
                      {' '}
                      <span className="skipped-invite-time">11:29 PM PDT</span>
.
                    </p>
                  </div>
                  <div className="custom-undo-step">
                    <p>
                      <a href="#" className="undo-step">
                        Undo
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <a href="#" className="custom-btn reminder-btn">
                    Send a Reminder
                  </a>
                  <a href="#" className="custom-continue-btn">
                    Continue without waiting
                    {' '}
                    <i className="fa fa-angle-double-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="custom-app-process-item item-3">
              <div className="custom-app-process-item-title">
                <span className="app-process-number">3</span>
                {' '}
Review Application
                (
                <span className="reviw-app-no">1</span>
                {' '}
of
                {' '}
                <span className="total-review">1</span>
                {' '}
completed)
              </div>
              <div className="invite-app-inner">
                <div className="review-summery">
                  After a questionnaire is submitted, you and your team have
                  {' '}
                  <br />
                  the opportunity to review and sign-off. Use the area in the
                  {' '}
                  <br />
                  {' '}
right-hand panel to leave notes for your team.
                </div>
                <div className="invited-form">
                  <span className="sorting">
                    <i className="fa fa-sort-alpha-asc" />
                  </span>
                  Review from
                  {' '}
                  <span className="invited-company">
                    {invited_by_company_name}
                  </span>
                </div>
                <div className="custom-app-process-listing">
                  {this.renderReviewers()}
                </div>
                <div className="sent-invitation-byline">
                  <div className="row">
                    <div className="col-sm-6">
                      <p>
                        <span className="sent-invitation-company-name">
                          Plaster paris
                        </span>
                        {' '}
                        skipped this step on
                        {' '}
                        <span className="skipped-review-date">
                          Oct 29, 2018
                        </span>
                        {' '}
                        at
                        {' '}
                        <span className="skipped-review-time">
                          11:29 PM PDT
                        </span>
                        .
                        {' '}
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <a href="#" className="continue-without-reviewing-btn">
                        Continue without reviewing
                        <i className="fa fa-angle-double-right" />
                      </a>
                      <a href="#" className="reopen-reviewing-btn">
                        Reopen reviewing
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="custom-app-process-item item-4">
              <div className="custom-app-process-item-title">
                <span className="app-process-number">4</span>
                {' '}
Finalize
                Application
              </div>
              <div className="invite-app-inner">
                <div className="finalize-row row">
                  <div className="custom-finalize-left-col col-sm-6">
                    <div className="custom-finalize-review-summery">
                      When your team is done reviewing, don't forget to mark the
                      <span className="custom-company-name">Vendor</span>
                      {' '}
as
                      Qualified or Denied. This is also where you will set
                      limits, add exception, and assign expiration dates.
                    </div>
                  </div>
                  <div className="custom-finalize-right-col col-sm-6">
                    {isSubmitted || (
                    <button
                      onClick={this.toogleReady}
                      type="button"
                      className="custom-btn ready-btn"
                    >
                      I'm Ready to Qualify/Deny
                    </button>
                    )}
                    <a href="#" className="finalize-btn">
                      Finalized
                    </a>
                  </div>
                </div>
                <div className="finalize-row finalize-row-2 row">
                  <div className="custom-finalize-left-col col-sm-6">
                    <p>
                      <span className="finalize-company-name">
                        Plaster paris
                      </span>
                      {' '}
                      finalized this application on
                      {' '}
                      <span className="finalize-app-date">Oct 29, 2018</span>
                      {' '}
at
                      {' '}
                      <span className="finalize-app-time">11:29 PM PDT</span>
.
                      {' '}
                    </p>
                  </div>
                  <div className="custom-finalize-right-col col-sm-6">
                    <a href="#" className="reopen-app-btn">
                      Reopen application
                      {' '}
                      <i className="fa fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    invitation: state.invites.invitation,
    reviewers: state.invites.reviewers,
    userInfo: state.common.get('userInfo').toJS(),
  }),
  {
    load_invitation_answers,
    submit_invitation_review,
    save_invitation_status,
    submit,
  },
)(Status);
