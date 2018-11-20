import React, { Component } from 'react';

class History extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="custom-application-tabber-item">
        <div className="custom-application-top-row">
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
          <div className="custom-application-history-section">
            <h3>Full History</h3>
            <div className="application-history-group">
              <div className="history-items clearfix">
                <div className="left-group">
                  <div className="icon-group" />
                  <div className="history-meta">
                    <span className="history-date">11/10/2018</span>
                    {' '}
at
                    {' '}
                    <span className="history-time">11:11 AM</span>
                    {' '}
HST
                  </div>
                </div>
                <div className="right-group">
                  <div className="member-detail">
                    <div className="icon-group">
                      <span className="member-icon">NK</span>
                    </div>
                    <div className="detail-group">
                      <a href="#" className="member-name">Nishant Kataria</a>
                      {' '}
                      <span>edited the qualification status.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="history-items clearfix">
                <div className="left-group">
                  <div className="icon-group" />
                  <div className="history-meta">
                    <span className="history-date">11/10/2018</span>
                    {' '}
at
                    {' '}
                    <span className="history-time">11:11 AM</span>
                    {' '}
HST
                  </div>
                </div>
                <div className="right-group">
                  <div className="member-detail clearfix">
                    <div className="icon-group">
                      <span className="member-icon">NK</span>
                    </div>
                    <div className="detail-group">
                      <a href="#" className="member-name">Nishant Kataria</a>
                      {' '}
                      <span>
removed
                        {' '}
                        <a href>Aman Talvar</a>
                        {' '}
as an applicant.
                      </span>
                    </div>
                  </div>
                  <div className="about-application">
                    <p>
Hi
                      {' '}
                      <span className="company-name">AA Printers</span>
                      {' '}
Team,
                    </p>
                    <p>I'm writting to invite you to reapply for your qualification. please let me know if you have any question...</p>
                    <a href="#" className="show-more">
show more
                      {' '}
                      <i className="fa fa-angle-down" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="application-history-group bottom-group">
              <h3 className="applicant-heading">
                <span>
Application
                  {' '}
                  <span className="applicant-number">#1</span>
                  {' '}
Denied on
                  {' '}
                  <span className="denied-date">Sep 20, 2018</span>
                </span>

              </h3>
              <div className="history-items clearfix">
                <div className="left-group">
                  <div className="icon-group" />
                  <div className="history-meta">
                    <span className="history-date">11/10/2018</span>
                    {' '}
at
                    {' '}
                    <span className="history-time">11:11 AM</span>
                    {' '}
HST
                  </div>
                </div>
                <div className="right-group">
                  <div className="member-detail">
                    <div className="icon-group">
                      <span className="member-icon">NK</span>
                    </div>
                    <div className="detail-group">
                      <a href="#" className="member-name">Nishant Kataria</a>
                      {' '}
                      <span>edited the qualification status.</span>
                    </div>
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

export default History;
