import React, { Component } from 'react';
import QuestionierInviteHeader from './questionier-invite-header';
import { CopyToClipboard } from 'react-copy-to-clipboard';


class QuestionierInviteLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkValue: 'https://www.google.com/',
            copied: false,
        };
    }

    handleAfterCopy = () => {
        this.setState({ copied: true });

        setTimeout(() => {
            this.setState({ copied: false });
        }, 500);
    };
    render = () => {
        const { linkValue, copied } = this.state;
        return (
            <section className="custom-body-container-wrapper">
                <div className="custom-body-container">
                    <div className="custom-section">
                        <div className="custom-sidebar-tab">
                            <div className="custom-axeyn-tabber-group">
                                <QuestionierInviteHeader />
                                <div className="custom-axeyn-tabber-item axeyn-tab-share-link-grp d-block">
                                    <div className="axeyn-tab-share-link-inner-grp">
                                        <div className="custom-share-link-tab-img-grp">
                                            <img src="Images/Share-link-image.png" alt="Share Link" />
                                        </div>
                                        <div className="custom-share-link-tab-img-content">
                                            <p />
                                            Share the link below to allow any company to initiate a qualification application or renewal with <b>Karvi</b>. Once an application is started, a Suppliers will appear in <b>"Application in Progress"</b> and once completed, they will move to <b>"Application Submitted"</b>. You will be notified of the status update if you're an auto-add revlewer in settings.<p />
                                            {copied ? <span>Copied</span> : null}
                                        </div>
                                        <div className="custom-copy-link-section">
                                            <input disabled id="copy-link" type="text" defaultValue={linkValue} />
                                            <CopyToClipboard text={linkValue} onCopy={this.handleAfterCopy}>
                                                <button className="copy-link-btn">Copy Link</button>
                                            </CopyToClipboard>

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
}

export default QuestionierInviteLink;
