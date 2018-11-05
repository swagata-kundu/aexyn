import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import QuestionierInviteHeader from './questionier-invite-header';
import { getLink } from '../../../service/qualification-manager';

class QuestionierInviteLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkValue: '',
    };
  }

  componentDidMount = async () => {
    const linkUrl = await getLink();
    this.setState({
      linkValue: linkUrl.link,
    });
  }

  render = () => {
    const { linkValue } = this.state;
    return (
      <section
        className="custom-body-container-wrapper"
        style={{ paddingLeft: '50px' }}
      >
        <div className="custom-body-container custom-section custom-sidebar-tab custom-axeyn-tabber-group">
          <QuestionierInviteHeader />
          <div className="custom-axeyn-tabber-item axeyn-tab-share-link-grp d-block">
            <div className="axeyn-tab-share-link-inner-grp">
              <div className="custom-share-link-tab-img-grp">
                <img src="/static/images/-logo.png/Share-link-image.png" alt="Share Link" />
              </div>
              {' '}
              <div className="custom-share-link-tab-img-content">
                <p />
                Share the link below to allow any company to initiate a
                qualification application or renewal with
                {' '}
                <b> Karvi </b>
                .Once an application is started, a Suppliers will appear in
                {' '}
                <b> "Application in Progress" </b>
                {' '}
and once completed, they will
                move to
                {' '}
                <b> "Application Submitted" </b>
                .You will be notified of the status update if you 're an
                auto-add revlewer in settings.
                {' '}
                <p />
                {' '}
                {' '}
              </div>
              {' '}
              <div className="custom-copy-link-section">
                <input
                  disabled
                  id="copy-link"
                  type="text"
                  defaultValue={linkValue}
                />
                <CopyToClipboard
                  text={linkValue}
                >
                  <button className="copy-link-btn">Copy Link</button>
                </CopyToClipboard>
                {' '}
                {/* <CopyToClipboard
                        text={linkValue}
                        onCopy={this.handleAfterCopy}
                      >
                        <button className="copy-link-btn"> Copy Link </button>
                        {' '}
                      </CopyToClipboard> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
}

export default QuestionierInviteLink;
