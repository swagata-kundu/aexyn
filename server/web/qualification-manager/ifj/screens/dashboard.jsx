import React from 'react';
import Tabs from '../../components/tabs';

const DashBoard = () => (
  <section className="custom-body-container-wrapper" style={{ paddingLeft: 50 }}>
    <div className="custom-body-container">
      <div className="custom-section">
        <div className="custom-sidebar-tab" id="tab1">
          <div className="custom-tabber-group">

            <Tabs />

            <div className="tabber-content-group qualification-layout">
              <div className="qualification-layout-top-bar">
                <div className="row">
                  <div className="col-sm-6 qualification-layout-top-bar-left-col">
                    <form>
                      <input type="Search" placeholder="Find" />
                      {' '}
                      <i className="fa fa-search" aria-hidden="true" />
                    </form>
                  </div>
                  <div className="col-sm-6 qualification-layout-top-bar-right-col text-right">
                    <span className="video-btn"> View our introductory video &gt;&gt;</span>
                  </div>
                </div>
              </div>
              <div className="custom-qualification-section-1 clearfix">
                <div className="custom-qualification-section-1-inner clearfix">
                  <div className="tab-content">
                    <h3 className="orange-border">
New Invitation
                      {' '}
                      <span className="count-value">(0)</span>
                      <span className="sort"><img src="/static/images/sorting-icon.svg" /></span>
                    </h3>
                    <div className="item-group">
                      <div className="item">
                        <div className="contact-detail">
                          <div className="icon"><i className="fa fa-building-o" aria-hidden="true" /></div>
                          <div className="member-detail">
                            <span className="company-name">Company name</span>
                            <span className="name">
                              <span className="contact-person" />
                              <a href="/user-profile">Member Name</a>
                            </span>
                            {' '}
and
                            {' '}
                            <span>
                              <span className="more">1</span>
                              {' '}
other
                            </span>
                          </div>
                        </div>
                        <div className="meta">
Viewed by
                          {' '}
                          <span className="date">date</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content">
                    <h3 className="dark-green-border">
Need Revision
                      {' '}
                      <span className="count-value">(0)</span>
                      <span className="sort"><img src="/static/images/sorting-icon.svg" /></span>
                    </h3>
                    <div className="item-group">
                      <div className="item">
                        <div className="contact-detail">
                          <div className="icon"><i className="fa fa-building-o" aria-hidden="true" /></div>
                          <div className="member-detail">
                            <span className="company-name">Company name</span>
                            <span className="name">
                              <span className="contact-person" />
                              <a href="/user-profile">Member Name</a>
                            </span>
                            {' '}
and
                            {' '}
                            <span>
                              <span className="more">1</span>
                              {' '}
other
                            </span>
                          </div>
                        </div>
                        <div className="meta">
Viewed by
                          {' '}
                          <span className="date">date</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content">
                    <h3 className="blue-border">
Draft in Progress
                      {' '}
                      <span className="count-value">(0)</span>
                      <span className="sort"><img src="/static/images/sorting-icon.svg" /></span>
                    </h3>
                    <div className="item-group">
                      <div className="item">
                        <div className="contact-detail">
                          <div className="icon"><i className="fa fa-building-o" aria-hidden="true" /></div>
                          <div className="member-detail">
                            <span className="company-name">Company name</span>
                            <span className="name">
                              <span className="contact-person" />
                              <a href="/user-profile">Member Name</a>
                            </span>
                            {' '}
and
                            {' '}
                            <span>
                              <span className="more">1</span>
                              {' '}
other
                            </span>
                          </div>
                        </div>
                        <div className="meta">
Viewed by
                          {' '}
                          <span className="date">date</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content">
                    <h3 className="green-border">
Submitted
                      {' '}
                      <span className="count-value">(0)</span>
                      <span className="sort"><img src="/static/images/sorting-icon.svg" /></span>
                    </h3>
                    <div className="item-group">
                      <div className="item">
                        <div className="contact-detail">
                          <div className="icon"><i className="fa fa-building-o" aria-hidden="true" /></div>
                          <div className="member-detail">
                            <span className="company-name">Company name</span>
                            <span className="name">
                              <span className="contact-person" />
                              <a href="/user-profile">Member Name</a>
                            </span>
                            {' '}
and
                            {' '}
                            <span>
                              <span className="more">1</span>
                              {' '}
other
                            </span>
                          </div>
                        </div>
                        <div className="meta">
Viewed by
                          {' '}
                          <span className="date">date</span>
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
    </div>
  </section>
);

export default DashBoard;
