import React from 'react';
import { connect } from 'react-redux';

const DashBoardHeader = ({ userInfo }) => (
  <header className="custom-header-container-wrapper">
    <div
      className="custom-header-container questionnaire"
      style={{ minHeight: 45 }}
    >
      <div className="header-group">
        <div className="col-md-2 logo">
          <a href="/">
            <img src="/static/images/aexyn-logo.png" alt="Aexyn" />
          </a>
        </div>
        <div className="header-right group col-md-10 text-right">
          <ul>
            <li className="custom-ovel-btn red">
              <a href="#">
                <span className="trial-expired">Trial</span>
                <span className="pro-expired">Pro</span>
                {' '}
Expired (Click hare to
                renew)
              </a>
            </li>
            <li className="custom-ovel-btn green">
              <a href="#">
                Pro version (Validate till
                {' '}
                <span className="validate-date">date</span>
                {')'}
              </a>
            </li>
            <li className="custom-ovel-btn blue">
              <a href="#">
                Free Trial (
                <span className="day">1</span>
                {' '}
                day left)
              </a>
            </li>
            <li className="custom-ovel-btn yellow">
              <a href="#">Start 14 days trial</a>
            </li>
            <li>
              <span className="notify-ico">
                <i className="fa fa-bell" aria-hidden="true" />
              </span>
            </li>
            <li>
              <span className="user-ico">
                <i className="fa fa-user-o" aria-hidden="true" />
              </span>
              <span className="user-name">
                {`${userInfo.first_name} ${userInfo.last_name}`}
                <i className="fa fa-chevron-down" aria-hidden="true" />
              </span>
              <ul>
                <li className="my-account">
                  <a href="/profile-manager">
                    <span>
                      <i className="fa fa-user-o" aria-hidden="true" />
                      My Accounts
                    </span>
                  </a>
                </li>
                <li className="logout">
                  <a href="/logout">
                    <span>
                      <i className="fa fa-power-off" aria-hidden="true" />
                      Logout
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <span className="mobile-trigger">
          <i />
        </span>
      </div>
    </div>
    {/* Siderbar Nav Start */}
    <div className="custom-sidebar-wrapper">
      <div className="sidebar-nav">
        <ul>
          <li>
            <a href="/profile-manager">
              <i className="fa fa-user-circle-o" aria-hidden="true" />
              <span className="menu-text">User</span>
            </a>
          </li>
          <li>
            <a href="/company-manager/offices">
              <i className="fa fa-building-o" aria-hidden="true" />
              <span className="menu-text">Company</span>
            </a>
          </li>
          <li>
            <a href="/projects">
              <i className="fa fa-list-ul" aria-hidden="true" />
              <span className="menu-text">Projects</span>
            </a>
          </li>
          <li>
            <a href="/opportunities">
              <i className="fa fa-database" aria-hidden="true" />
              <span className="menu-text">Opportunities</span>
            </a>
          </li>
          <li>
            <a href="/qualification-manager/manage-food-suppliers">
              <i className="fa fa-tasks" aria-hidden="true" />
              <span className="menu-text">Qualifications</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="custom-sidebar-recent-view">
        <h3>Recently Viewed:</h3>
        <ul>
          <li>
            <a href="#">Nothing viewed yet</a>
          </li>
        </ul>
      </div>
      <div className="custom-sidebar-login-details">
        <ul>
          <li>
            <a href="/logout">Log Out</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
          <li>
            <a href="/terms">Terms</a>
          </li>
          <li>
            <a href="/privacy">Privacy</a>
          </li>
        </ul>
      </div>
    </div>
    {/* Siderbar Nav END */}
  </header>
);

function mapStateToProps(state) {
  return ({
    userInfo: state.common.get('userInfo').toJS(),
  });
}

export default
connect(mapStateToProps)(DashBoardHeader);
