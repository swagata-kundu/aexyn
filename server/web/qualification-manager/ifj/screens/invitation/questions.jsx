import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { QualificationForm } from '../../../mfs/questions/qualification-form';

const QualificationFormConnected = reduxForm({
  form: 'qualificationForm',
  enableReinitialize: true,
})(QualificationForm);

const QF = connect(state => ({
  initialValues: state.invites.invitation.questions,
}))(QualificationFormConnected);

class Questions extends Component {
  componentDidMount() {}

  renderSideOptions=() => (
    <div className="custom-left-group ifj-ques-left-group">
      <div className="top-group">
        <a href="#">
jump to next unanswered
          {' '}
          <i className="fa fa-angle-double-right" aria-hidden="true" />
        </a>
      </div>
      <div className="middle-group">
        <h3>Sections:</h3>
        <ul>
          <li><a href="#">Company Profile</a></li>
          <li><a href="#">Certification &amp; Licenses</a></li>
          <li><a href="#">Health &amp; Safety</a></li>
          <li><a href="#">Insurance &amp; Surety</a></li>
          <li><a href="#">Financials</a></li>
          <li><a href="#">Work Experience</a></li>
          <li><a href="#">Legal</a></li>
          <li><a href="#">Other</a></li>
          <li><a href="#">Signature</a></li>
        </ul>
      </div>
    </div>

  )

  render() {
    const { detail } = this.props;
    const { opening_statement } = detail;
    return (
      <div className="custom-questionnaire-section ifj-questionnaire-section">
        {this.renderSideOptions()}
        <div className="custom-right-group ifj-ques-right-group">
          <div className="custom-preview-ques-group">
            <div className="bottom-group">
              <div className="icon-grp">
                <i className="fa fa-shield" aria-hidden="true" />
              </div>
              <div className="content-group">
                <p>
                  <span className="company-name">Talwar Electronics</span>
                  {' '}
trusts Aexyn connected to securely collect and transmit your qualification. Your information will only be made available to
                  {' '}
                  <span className="company-name">Talwar Electronics</span>
. Other clients will only receive your information if your information if you explicity send them a qualification application.
                </p>
              </div>
              <QF onSubmit={() => {}} opening_statement={opening_statement} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(state => ({
  detail: state.invites.invitation.detail,
}))(Questions);
