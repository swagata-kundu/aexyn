import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Status from './status';
import Reviewers from './reviewers';
import History from './history';

import ReviewersSidemenu from '../components/reviewers';

class Invitation extends Component {
  componentDidMount() {

  }

  renderTabs=() => {
    const { match } = this.props;
    const { url } = match;

    return (
      <div className="custom-section">
        <div className="custom-section-header-main-wrapper" style={{ minHeight: 105 }}>
          <div className="section-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <h1>AA printer Application</h1>
                </div>
                <div className="col-sm-12">
                  <div className="custom-taber-link">
                    <ul>
                      <li><NavLink to={`${url}/status`}>Status</NavLink></li>
                      <li><NavLink to={`${url}/form`}>Submitted Form</NavLink></li>
                      <li><NavLink to={`${url}/reviewers`}>Reviwers</NavLink></li>
                      <li><NavLink to={`${url}/history`}>History</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { match } = this.props;
    const { url } = match;
    return (
      <section className="custom-body-container-wrapper" style={{ paddingLeft: 50 }}>
        <div className="custom-body-container">
          {this.renderTabs()}
          <div className="custom-two-col-right-sidebar-grp" />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-9 custom-application-tabber-item-grp">
                <Route exact path={`${url}/status`} component={Status} />
                <Route exact path={`${url}/reviewers`} component={Reviewers} />
                <Route exact path={`${url}/history`} component={History} />
              </div>
              <ReviewersSidemenu />
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default Invitation;
