import React, { Component } from 'react';
import QuestionierInviteHeader from './questionier-invite-header';
import { invitationEmail } from '../../../service/qualification-manager';


export default class QuestionierInviteEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [{ email: '' }],

    };
  }

  sendInvitation = async () => {
    const { emails } = this.state;
    const data = emails.map(e => e.email);
    invitationEmail(data);
    this.setState({
      emails: [{ email: '' }],
    });
  };

  addMore=() => {
    const { emails } = this.state;
    emails.push({ email: '' });
    this.setState({ emails });
  }

  onInputChange=(index, e) => {
    const { emails } = this.state;
    emails[index].email = e.target.value;
    this.setState({ emails });
  }

  renderField=() => {
    const { emails } = this.state;
    return (
      <div>
        {emails.map((e, index) => (
          <div className="custom-email-form-field" key={index}>
            <input
              type="text"
              placeholder="Enter email address .."
              value={e.email}
              onChange={ev => this.onInputChange(index, ev)}
            />
          </div>
        ))}
        <button type="button" onClick={this.addMore}>+ More</button>
      </div>
    );
  }

  render = () => (

    <section
      className="custom-body-container-wrapper"
      style={{ paddingLeft: '50px' }}
    >
      <div className="custom-body-container">
        <div className="custom-section">
          <div className="custom-sidebar-tab">
            <div className="custom-axeyn-tabber-group">
              <QuestionierInviteHeader />
              <div className="custom-axeyn-tabber-item axeyn-tab-email-grp d-block">
                <div className="axeyn-tab-email-inner-grp">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-6 axeyn-tab-email-left-col">
                        <h3>Invite to Apply By Email Address</h3>
                        <p>Suppliers can be invited by indivisual emails, or by copying and pasting your list from elsewhere (such as Excel, Google Sheets, etc).</p>
                      </div>
                      <div className="col-sm-6 axeyn-tab-email-right-col">
                        <div className="axeyn-tab-email-right-col-btn-grp">
                          <a className="custom-btn" onClick={this.sendInvitation} href="#">Invite Selected Suppliers</a>
                        </div>
                        <div className="custom-email-form-section">
                          {this.renderField()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
