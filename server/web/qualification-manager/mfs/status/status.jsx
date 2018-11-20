import React, { Component } from 'react';

class Status extends Component {
  componentDidMount() {}

  render() {
    return (


      <div className="custom-application-tabber-item">
        <div className="custom-application-top-row">
          <div className="custom-application-top-row-item awaiting-response">
            <div className="top-row-left-content">Awaiting response</div>
            <a className="pull-to-right send-reminder" href="#">
Send reminder
              <i className="fa fa-angle-double-right" />
            </a>
          </div>
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
          <div className="custom-application-top-row-item complete-review">
            <div className="top-row-left-content">All reviews complete</div>
            <a className="pull-to-right deny-btn" href="#">
I'm Ready to Qualify/Deny
              <i className="fa fa-angle-double-right" />
            </a>
          </div>
          <div className="custom-application-top-row-item complete-review">
            <div className="top-row-left-content">All reviews complete</div>
            <span className="pull-to-right">Setting Status</span>
          </div>
          <div className="custom-application-top-row-item qualified">
            <div className="top-row-left-content">
              <i className="fa fa-check" aria-hidden="true" />
              {' '}
Qualified
            </div>
          </div>
        </div>
        <div className="custom-qualification-status-form">
          <form>
            <div className="custom-form-top-content clearfix">
              <div className="form-title">
                <h3>Qualification Status</h3>
              </div>
              <div className="custom-form-btn">
                <a href="#" className="cancel-btn">Cancel</a>
                <a href="#" className="custom-btn save-btn">Save</a>
                <a href="#" className="custom-btn ready-btn">I'm Ready to Qualify/Deny</a>
              </div>
            </div>
            <div className="row custom-qualification-form-field">
              <div className="col-sm-2"><label>Status</label></div>
              <div className="col-sm-5 input-field">
                <select className="custom-input">
                  <option value="volvo">Select a Status</option>
                  <option value="Item-1">Item-1</option>
                  <option value="Item-2">Item-2</option>
                </select>
              </div>
              <div className="col-sm-5">
                <div className="field-help-text">Choose a status to finalize this application</div>
              </div>
            </div>
            <div className="row custom-qualification-form-field">
              <div className="col-sm-2"><label>Total Limit</label></div>
              <div className="col-sm-5 input-field">
                <input className="custom-input" type="number" step="any" />
                <span className="form-field-icon dollar-icon">$</span>
              </div>
              <div className="col-sm-5">
                <div className="field-help-text">All remaining fiels are optional</div>
              </div>
            </div>
            <div className="row custom-qualification-form-field">
              <div className="col-sm-2"><label>Single Project Limit</label></div>
              <div className="col-sm-5 input-field">
                <input className="custom-input" type="number" step="any" />
                <span className="form-field-icon dollar-icon">$</span>
              </div>
              <div className="col-sm-5" />
            </div>
            <div className="row custom-qualification-form-field">
              <div className="col-sm-2"><label>Expiration Date</label></div>
              <div className="col-sm-5 input-field">
                <input className="custom-input" type="date" />
                <span className="form-field-icon date-icon"><i className="fa fa-calendar-o" aria-hidden="true" /></span>
              </div>
              <div className="col-sm-5" />
            </div>
            <div className="row custom-qualification-form-field">
              <div className="col-sm-2"><label>Summary</label></div>
              <div className="col-sm-10 input-field">
                <textarea className="custom-input" placeholder="Summarize the decision on this application (Internal use only)" defaultValue="" />
              </div>
            </div>
            <div className="row custom-qualification-form-field">
              <div className="col-sm-2"><label>Company Tags</label></div>
              <div className="col-sm-10 input-field">
                <input type="text" className="custom-input" />
              </div>
            </div>
            <div className="row custom-qualification-form-field">
              <div className="col-sm-2"><label>Attachments</label></div>
              <div className="col-sm-10 input-field">
                <input type="file" className="custom-input" />
              </div>
            </div>
          </form>
          <div className="form-bottom-tagline">
            <p>
Once you are finished reviewing
              <span className="company-name">AA priters</span>
              {' '}
application, you can set their qualification limits, set as expiration date, and attach files.
            </p>
          </div>
        </div>
        <div className="custom-application-process-section">
          <h3>Application Process</h3>
          <div className="custom-application-process-main-grp">
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
                  <span className="sorting"><i className="fa fa-sort-alpha-asc" /></span>
Invited from
                  <span className="invited-company">Company Name</span>
                </div>
                <div className="custom-app-process-listing">
                  <div className="custom-app-process-listing-item clearfix">
                    <div className="custom-invite-item-left-col">
                      <div className="custom-invite-member-details">
                        <div className="member-left-icon"><span className="short">AA</span></div>
                        <div className="member-details-right-col">
                          <span className="invited-member-name">
                              <a href="#">Ankit Ahuja</a>
                            </span>
                          <span className="invited-member-designation">tiles</span>
                        </div>
                      </div>
                    </div>
                    <div className="custom-invite-item-right-col">
                      <span className="invite-byline">
                                  Invited to apply on
                        {' '}
                        <span className="invite-date">Oct 29, 2018</span>
                        {' '}
at
                        {' '}
                        <span className="invite-time">11:29 PM PDT</span>
                      </span>
                    </div>
                  </div>
                  <div className="custom-app-process-listing-item clearfix">
                    <div className="custom-invite-item-left-col">
                      <div className="custom-invite-member-details">
                        <div className="member-left-icon"><span className="short">AA</span></div>
                        <div className="member-details-right-col">
                          <span className="invited-member-name">
                              <a href="#">Nick</a>
                            </span>
                          <span className="invited-member-designation">Abc</span>
                        </div>
                      </div>
                    </div>
                    <div className="custom-invite-item-right-col">
                      <span className="invite-byline">
                                  Invited to apply on
                        {' '}
                        <span className="invite-date">Oct 29, 2018</span>
                        {' '}
at
                        {' '}
                        <span className="invite-time">11:29 PM PDT</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sent-invitation-byline">
                  <p>
                    <span className="sent-invitation-company-name">Plaster paris</span>
                    {' '}
set an invitaion to apply on
                    {' '}
                    <span className="sent-invite-date">Oct 29, 2018</span>
                    {' '}
at
                    {' '}
                    <span className="sent-invite-time">11:29 PM PDT</span>
.
                    {' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="custom-app-process-item item-2">
              <div className="custom-app-process-item-title">
                <span className="app-process-number">2</span>
                {' '}
Wait for
                {' '}
                <span className="custom-company-name">Vendor</span>
                {' '}
to Submit Completed Questionaire
              </div>
              <div className="row">
                <div className="col-sm-9">
                  <p>
                    <span className="custom-company-name">Vendor</span>
                    {' '}
will be asked to fill out your company's
                    {' '}
                    <a href="#">qualification questionnaire</a>
.
                  </p>
                  <div className="custom-sent-invitation-byline">
                    <p>
                      <span className="sent-invitation-company-name">Plaster paris</span>
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
                      <span className="sent-invitation-company-name">Plaster paris</span>
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
                    <p><a href="#" className="undo-step">Undo</a></p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <a href="#" className="custom-btn reminder-btn">Send a Reminder</a>
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
Review Application (
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
                  <span className="sorting"><i className="fa fa-sort-alpha-asc" /></span>
Review from
                  {' '}
                  <span className="invited-company">Company Name</span>
                </div>
                <div className="custom-app-process-listing">
                  <div className="custom-app-process-listing-item clearfix">
                    <div className="custom-invite-item-left-col">
                      <div className="custom-invite-member-details">
                        <div className="member-left-icon">
                          <span className="short">AA</span>
                          <span className="checked"><i className="fa fa-check" aria-hidden="true" /></span>
                        </div>
                        <div className="member-details-right-col">
                          <span className="invited-member-name">
                              <a href="#">Ankit Ahuja</a>
                            </span>
                          <span className="invited-member-designation">tiles</span>
                        </div>
                      </div>
                    </div>
                    <div className="custom-invite-item-right-col">
                      <a href="#" className="custom-btn">I'm Done Reviewing</a>
                      <span className="not-review">Did not reviw</span>
                      <span className="complete-review-byline">
                                  Completed review on
                        {' '}
                        <span className="invite-date">Oct 29, 2018</span>
                        {' '}
at
                        {' '}
                        <span className="invite-time">11:29 PM PDT</span>
                      </span>
                      <a href="#" className="undo-step">Undo</a>
                    </div>
                  </div>
                </div>
                <div className="sent-invitation-byline">
                  <div className="row">
                    <div className="col-sm-6">
                      <p>
                        <span className="sent-invitation-company-name">Plaster paris</span>
                        {' '}
skipped this step on
                        {' '}
                        <span className="skipped-review-date">Oct 29, 2018</span>
                        {' '}
at
                        {' '}
                        <span className="skipped-review-time">11:29 PM PDT</span>
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
Finalize Application
              </div>
              <div className="invite-app-inner">
                <div className="finalize-row row">
                  <div className="custom-finalize-left-col col-sm-6">
                    <div className="custom-finalize-review-summery">
When your team is done reviewing, don't forget to mark the
                      <span className="custom-company-name">Vendor</span>
                      {' '}
as Qualified or Denied. This is also where you will set limits, add exception, and assign expiration dates.
                    </div>
                  </div>
                  <div className="custom-finalize-right-col col-sm-6">
                    <a href="#" className="custom-btn ready-btn">I'm Ready to Qualify/Deny</a>
                    <a href="#" className="finalize-btn">Finalized</a>
                  </div>
                </div>
                <div className="finalize-row finalize-row-2 row">
                  <div className="custom-finalize-left-col col-sm-6">
                    <p>
                      <span className="finalize-company-name">Plaster paris</span>
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

export default Status;
