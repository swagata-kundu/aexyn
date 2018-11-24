import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { load_invitation_answers } from '../../../state/invitation_action';

import Editors from './editors';
import Questions from './questions';
import Tabs from '../../components/tab';

class Invitation extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { invitationId } = params;
    this.props.load_invitation_answers(invitationId);
  }

  render() {
    const { match, invitation } = this.props;
    const { url, params } = match;
    const { detail } = invitation;
    return (
      <section className="custom-body-container-wrapper" style={{ paddingLeft: 50 }}>
        <div className="custom-body-container">
          <Tabs invitationId={params.invitationId} detail={detail} />
          <Route
            render={props => (
              <Questions
                {...props}
                invitationId={params.invitationId}
              />
            )}
            exact
            path={`${url}`}
          />
          <Route
            exact
            path={`${url}/editors`}
            render={props => (
              <Editors
                {...props}
                invitationId={params.invitationId}
              />
            )}
          />

        </div>
      </section>

    );
  }
}


export default connect(state => ({
  invitation: state.invites.invitation,
}), { load_invitation_answers })(Invitation);
