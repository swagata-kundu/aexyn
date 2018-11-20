import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from '../../components/tabs';

const DashBoard = () => (
  <section
    className="custom-body-container-wrapper"
    style={{ paddingLeft: 50 }}
  >
    <div className="custom-body-container custom-section custom-sidebar-tab custom-tabber-group">
      <Tabs />
      <div className="tabber-content-group mfs-layout">
        <div className="mfs-layout-top-bar">
          <div className="row">
            <div className="col-sm-6 mfs-layout-top-bar-left-col">
              <ul>
                <li>
                  <Link to="/manage-food-suppliers/preview-questions">
                    <i className="fa fa-tasks" aria-hidden="true" />
                    {' '}
                      Questionnaire
                  </Link>
                </li>
                <li>
                  <div className="single-check-grp">
                    <input
                      type="checkbox"
                      defaultValue="Only Show my application"
                    />
                    <label>Only Show my application</label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 mfs-layout-top-bar-right-col">
              <form>
                <input
                  type="Search"
                  name
                  placeholder="Find application by company or email"
                />
                <a
                  href="/qualification-manager/manage-food-suppliers/invite/by-search"
                  className="custom-btn"
                >
                  <i className="fa fa-plus" aria-hidden="true" />
                  {' '}
Invite
                    Suppliers
                </a>
              </form>
            </div>
          </div>
        </div>
        <div className="custom-mfs-section-1 clearfix">
          <div className="custom-mfs-section-1-inner clearfix">
            <div className="tab-content">
              <h3 className="orange-border">
                  Invitation Sent
                {' '}
                <span className="count-value">(0)</span>
                <span className="sort">
                  <img src="/static/images/sorting-icon.svg" />
                </span>
              </h3>
              <div className="item-group">
                <div className="item">
                  <div className="contact-detail">
                    <div className="icon">
                      <i className="fa fa-building-o" aria-hidden="true" />
                    </div>
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
                  <div className="more-member">
                    <span className="reviewed-text">
                        Reviewers (
                      {' '}
                      <span className="current-reviewer">1</span>
                      {' '}
                        of
                      {' '}
                      <span className="total-reviewer">10</span>
                      {' '}
reviews
                        completed )
                    </span>
                    <ul>
                      <li>
                        <span className="reviewed-member-image" />
                        <span className="check">
                          <i
                            className="fa fa-check-circle"
                            aria-hidden="true"
                          />
                        </span>
                      </li>
                      <li>
                        <span className="reviewed-member-image">
                          <img
                            src="/static/images/Steven_Hallam-slide.jpg"
                            alt="Reviewer Name"
                          />
                        </span>
                        <span className="check">
                          <i
                            className="fa fa-check-circle"
                            aria-hidden="true"
                          />
                        </span>
                      </li>
                      <li className="view-all">
                          View all
                        <ul>
                          <li>
                            <span className="name">
                              <span className="contact-person" />
                              <a href="/user-profile">Member Name</a>
                            </span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content">
              <h3 className="dark-green-border">
                  Application in Progress
                {' '}
                <span className="count-value">(0)</span>
                <span className="sort">
                  <img src="/static/images/sorting-icon.svg" />
                </span>
              </h3>
              <div className="item-group">
                <div className="item">
                  <div className="contact-detail">
                    <div className="icon">
                      <i className="fa fa-building-o" aria-hidden="true" />
                    </div>
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
                  Application Submitted
                {' '}
                <span className="count-value">(0)</span>
                <span className="sort">
                  <img src="/static/images/sorting-icon.svg" />
                </span>
              </h3>
              <div className="item-group">
                <div className="item">
                  <div className="contact-detail">
                    <div className="icon">
                      <i className="fa fa-building-o" aria-hidden="true" />
                    </div>
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
                  Approved
                {' '}
                <span className="count-value">(0)</span>
                <span className="sort">
                  <img src="/static/images/sorting-icon.svg" />
                </span>
              </h3>
              <div className="item-group">
                <div className="item">
                  <div className="contact-detail">
                    <div className="icon">
                      <i className="fa fa-building-o" aria-hidden="true" />
                    </div>
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
              <h3 className="pink-border">
                  Explring Soon
                {' '}
                <span className="count-value">(0)</span>
                <span className="sort">
                  <img src="/static/images/sorting-icon.svg" />
                </span>
              </h3>
              <div className="item-group">
                <div className="item">
                  <div className="contact-detail">
                    <div className="icon">
                      <i className="fa fa-building-o" aria-hidden="true" />
                    </div>
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
              <h3 className="grey-border">
                  Explring
                {' '}
                <span className="count-value">(0)</span>
                <span className="sort">
                  <img src="/static/images/sorting-icon.svg" />
                </span>
              </h3>
              <div className="item-group">
                <div className="item">
                  <div className="contact-detail">
                    <div className="icon">
                      <i className="fa fa-building-o" aria-hidden="true" />
                    </div>
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
              <h3 className="pink-border">
                  Denied
                {' '}
                <span className="count-value">(0)</span>
                <span className="sort">
                  <img src="/static/images/sorting-icon.svg" />
                </span>
              </h3>
              <div className="item-group">
                <div className="item">
                  <div className="contact-detail">
                    <div className="icon">
                      <i className="fa fa-building-o" aria-hidden="true" />
                    </div>
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
  </section>
);

export default DashBoard;
