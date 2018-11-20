import React from 'react';
import { Route } from 'react-router-dom';
import Editors from './editors';
import Questions from './questions';
import Tabs from '../../components/tab';

const Invitation = ({ match }) => {
  const { url, params } = match;
  return (
    <section className="custom-body-container-wrapper" style={{ paddingLeft: 50 }}>
      <div className="custom-body-container">
        <Tabs invitationId={params.invitationId} />
        <Route exact path={`${url}`} component={Questions} />
        <Route exact path={`${url}/editors`} component={Editors} />

      </div>
    </section>

  );
};

export default Invitation;
