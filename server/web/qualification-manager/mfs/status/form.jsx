import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Fields from './fields';
import { load_invitation_answers, change_invitation_status } from '../../state/invitation_action';
import { formatDate } from '../../../util';

class Form extends Component {
  componentDidMount() {
    const { invitationId } = this.props;
    this.props.load_invitation_answers(invitationId);
  }

  renderQuestions=() => {
    const { invitation } = this.props;
    const { questions } = invitation;
    if (_.isEmpty(questions)) {
      return null;
    }
    return (
      <div>
        <div>
          <h3>Company profile</h3>
          <Fields questions={questions.CP} />
        </div>
        <div>
          <h3>Certification And Licenses</h3>
          <Fields questions={questions.CL} />
        </div>
        <div>
          <h3>Health And Safety</h3>
          <Fields questions={questions.HS} />
        </div>
        <div>
          <h3>Insurance And Surity</h3>
          <Fields questions={questions.IS} />
        </div>
        <div>
          <h3>Financials</h3>
          <Fields questions={questions.FIN} />
        </div>
        <div>
          <h3>Work Experience</h3>
          <Fields questions={questions.WEX} />
        </div>
        <div>
          <h3>Legal</h3>
          <Fields questions={questions.LGL} />
        </div>
        <div>
          <h3>Others</h3>
          <Fields questions={questions.OTH} />
        </div>
        <div>
          <h3>Signature</h3>
          <Fields questions={questions.SIG} />
        </div>
      </div>
    );
  }

  renderNotSubmitted=() => (
    <div className="custom-application-tabber-item">
      <div className="custom-qualification-status-form">
        <div className="submitted-form-group">
          <p>Application has not been submitted</p>
        </div>
      </div>
    </div>)

    reviseForm=() => {
      const { invitationId } = this.props;
      this.props.change_invitation_status(invitationId, { invitation_id: invitationId, status: 'REVISION' });
    }


renderInfo=() => {
  const { invitation } = this.props;
  const { detail } = invitation;
  const { status } = detail;


  const {
    submitted_by_name, invited_company_name, date_submitted, date_created, sent_by_name, sent_by_email,
  } = detail;
  return (
    <div>

      <div className="submitted-form-content clearfix">
        <div className="left-content">
          <h3>Completed Questionnaire</h3>
          <p>
Submitted on
            {' '}
            <span className="date">{formatDate(date_submitted)}</span>
            {' '}
by
            {' '}
            <span className="member-name">{submitted_by_name}</span>
          </p>
        </div>
        {status === 'SUBMITTED' && (
        <div className="right-content">
          <button onClick={this.reviseForm} type="button" className="custom-btn">Invite to Revise</button>
        </div>
        )}
      </div>
      <hr />

      <div className="clearfix">
        <div className="left-content">
          <h3><span className="company-name">{invited_company_name}</span></h3>
          <p>
Invitation to apply sent on
            {' '}
            <span className="date">{formatDate(date_created)}</span>
          </p>
          <div className="member-detail clearfix">
            <div className="icon-group">
              <span className="icon" />
            </div>
            <div className="member-detail">
              <span className="member-name">{sent_by_name}</span>
              {' '}
              <span className="email">{sent_by_email}</span>
            </div>
          </div>
        </div>
        <div className="right-content" />
      </div>
    </div>
  );
}

render() {
  const { invitation } = this.props;
  const { detail } = invitation;
  const { status } = detail;
  let isSubmitted = false;
  if (status === 'SUBMITTED' || status === 'APPROVED_EXCEPTION' || status === 'APPROVED' || status === 'DENIED') {
    isSubmitted = true;
  }

  if (!isSubmitted) {
    return this.renderNotSubmitted();
  }

  return (
    <div className="custom-application-tabber-item">


      <div className="custom-qualification-status-form">
        <div className="submitted-form-group">

          {this.renderInfo()}
          {this.renderQuestions()}
        </div>
      </div>
    </div>
  );
}
}


export default connect(state => ({
  invitation: state.invites.invitation,
}), { load_invitation_answers, change_invitation_status })(Form);
