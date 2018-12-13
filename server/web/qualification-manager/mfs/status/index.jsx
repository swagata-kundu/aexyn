import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';


import Status from './status';
import Reviewers from './reviewers';
import History from './history';
import Form from './form';
import { load_all_employees } from '../../../state/action';
import { load_invitation_answers } from '../../state/invitation_action';

import ReviewersSidemenu from '../components/reviewers';
import NotesSidemenu from '../components/notes';
import FilesSidemenu from '../components/files';

class Invitation extends Component {
  componentDidMount() {
    const { company_id } = this.props.userInfo;
    const { match } = this.props;
    const { params } = match;
    const { invitationId } = params;
    this.props.load_invitation_answers(invitationId);
    this.props.load_all_employees(company_id);
  }

  renderTabs=() => {
    const { match, invitation } = this.props;
    const { url } = match;
    const { detail } = invitation;
    const { invited_company_name } = detail;

    return (
      <div className="custom-section">
        <div className="custom-section-header-main-wrapper" style={{ minHeight: 105 }}>
          <div className="section-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <h1>{`${invited_company_name} Application`}</h1>
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
    const { match, invitation } = this.props;
    const { url, params } = match;
    const { invitationId } = params;

    if (_.isEmpty(invitation.detail)) {
      return null;
    }


    return (
      <section className="custom-body-container-wrapper" style={{ paddingLeft: 50 }}>
        <div className="custom-body-container">
          {this.renderTabs()}
          <div className="custom-two-col-right-sidebar-grp" />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-9 custom-application-tabber-item-grp">
                <Route
                  exact
                  path={`${url}/status`}
                  render={props => (
                    <Status
                      {...props}
                      invitationId={invitationId}
                    />
                  )}
                />
                <Route
                  exact
                  path={`${url}/reviewers`}
                  render={props => (
                    <Reviewers
                      {...props}
                      invitationId={invitationId}
                    />
                  )}
                />
                <Route
                  exact
                  path={`${url}/history`}
                  render={props => (
                    <History
                      {...props}
                      invitationId={invitationId}
                    />
                  )}
                />
                <Route
                  exact
                  path={`${url}/form`}
                  render={props => (
                    <Form
                      {...props}
                      invitationId={invitationId}
                    />
                  )}
                />
              </div>
              <div className="col-sm-3 custom-review-sidebar">

                <ReviewersSidemenu invitationId={invitationId} />
                <FilesSidemenu invitationId={invitationId} />
                <NotesSidemenu invitationId={invitationId} />

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
function mapStateToProps(state) {
  return {
    userInfo: state.common.get('userInfo').toJS(),
    invitation: state.invites.invitation,

  };
}

export default connect(mapStateToProps, { load_all_employees, load_invitation_answers })(Invitation);
