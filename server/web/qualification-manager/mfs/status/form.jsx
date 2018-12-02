import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Fields from './fields';
import { load_invitation_answers } from '../../state/invitation_action';

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

  render() {
    return (
      <div className="custom-application-tabber-item" id="submitted-form" style={{}}>


        <div className="custom-qualification-status-form">
          <div className="submitted-form-group">

            <div className="submitted-form-content clearfix">
              <div className="left-content">
                <h3>Completed Questionnaire</h3>
                <p>
Submitted on
                  {' '}
                  <span className="date">01/01/2018</span>
                  {' '}
by
                  {' '}
                  <span className="member-name">Deepak Kumar</span>
                </p>
              </div>
              <div className="right-content">
                <a href className="custom-btn">Invite to Revise</a>
              </div>
            </div>
            <hr />

            <div className="clearfix">
              <div className="left-content">
                <h3><span className="company-name">AA Printers</span></h3>
                <p>
Invitation to apply sent on
                  {' '}
                  <span className="date">October 12, 2018 at 01:45PM HST</span>
                </p>
                <div className="member-detail clearfix">
                  <div className="icon-group">
                    <span className="icon" />
                  </div>
                  <div className="member-detail">
                    <a href="#"><span className="member-name">Deep Kumar</span></a>
                    <span className="email">abc@def.com</span>
                  </div>
                </div>
              </div>
              <div className="right-content" />
            </div>

            {this.renderQuestions()}
          </div>
        </div>
      </div>
    );
  }
}


export default connect(state => ({
  invitation: state.invites.invitation,
}), { load_invitation_answers })(Form);
