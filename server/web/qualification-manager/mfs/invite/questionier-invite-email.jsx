import React, { Component } from "react";
import QuestionierInviteHeader from "./questionier-invite-header";
import { reduxForm, Field } from 'redux-form';

let validate = false;
let emailTextValue = "";

const InviteEmailForm = (props) => {
  const {
    emailAddress, handleSearch, checkEmail, addMoreEmail, errorMessage, emailTextValue,
    addMoreEmailAddres
  } = props;

  return (
    <div>
      <form>
        <div className="custom-email-form-field"
        >
          <Field
            name="emailTextValue"
            component="input"
            type="text"
            placeholder="Type in email."
            onChange={handleSearch}
            onBlur={checkEmail}
          />
        </div>
        {emailAddress.length >= 1 &&
          emailAddress.map((emailValue, index) => (
            <div
              key={index}
              className="custom-email-form-field"
            >
              <Field
                name={`${emailValue}emailTextValue`}
                component="input"
                type="text"
                placeholder="Type in email."
                onChange={handleSearch}
                onBlur={checkEmail}
              />
            </div>
          ))}
        {errorMessage !== "" ? (
          <span style={{ color: "red" }}>
            {errorMessage}
          </span>
        ) : null}
        {/* <a href="#" className="add-more-email-field">+ More</a> */}
      </form>
      <button onClick={addMoreEmailAddres}>+ More</button>
    </div>
  );
};

const InviteEmailFormConnect = reduxForm({
  form: 'company',
  destroyOnUnmount: false,
})(InviteEmailForm);


class QuestionierInviteEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: [],
      emailText: "",
      validEmail: false,
      errorMessage: "",
      addMoreEmails: false
    };
  }
  handleSearch = e => {
    emailTextValue = e.target.value;
    const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    validate = emailCheck.test(String(emailTextValue).toLowerCase());
    if (validate) {
      this.setState({
        validEmail: true,
        emailText: emailTextValue
      });
    } else {
      this.setState({
        validEmail: false
        
      });
    }
  };
  checkEmail = () => {
    const { validEmail, emailAddress, emailText } = this.state;
    if (validEmail) {
      emailAddress.push(emailText);
      this.setState({
        emailAddress: emailAddress,
        errorMessage: ""
      });
      emailTextValue = "";
    } else {
      this.setState({
        errorMessage: "Please Enter a Valid Email Addresss",
        addMoreEmails: false,

      });
    }
  };
  addMoreEmail = () => {
    const { validEmail } = this.state;

    emailTextValue = "";
    if (validEmail) {
      this.setState({
        addMoreEmails: true
      });
    }
    else {
      this.setState({
        errorMessage: "Please Enter a Valid Email Addresss",
      });
    }
  };
  sendInvitation = () => {
    const { emailAddress } = this.state;
    emailTextValue = "";
    this.setState({
      emailAddress: [],
      emailText: "",
      validEmail: false,
      errorMessage: "",
      addMoreEmails: false

    });
    console.log("Send Invitation To : ", emailAddress);
  };
  render = () => {
    const { emailAddress, errorMessage, addMoreEmails } = this.state;
    return (
      <section className="custom-body-container-wrapper">
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
                          <p>Suppliers can be invited by indivisual emails.</p>
                        </div>
                        <div className="col-sm-6 axeyn-tab-email-right-col">
                          <div className="axeyn-tab-email-right-col-btn-grp">
                            <a
                              className="custom-btn"
                              href="#"
                              onClick={this.sendInvitation}
                            >
                              Invite Selected Suppliers
                            </a>
                          </div>
                          <div className="custom-email-form-section">
                            <InviteEmailFormConnect
                              emailAddress={emailAddress}
                              handleSearch={this.handleSearch}
                              checkEmail={this.checkEmail}
                              addMoreEmail={addMoreEmails}
                              errorMessage={errorMessage}
                              emailTextValue={emailTextValue}
                              addMoreEmailAddres={this.addMoreEmail}
                            />
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
  };
}

export default QuestionierInviteEmail;
