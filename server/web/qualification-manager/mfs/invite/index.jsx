import React from 'react';
import { Route } from 'react-router-dom';
import QuestionierInviteEmail from './questionier-invite-email';
import QuestionierInviteLink from './questionier-invite-link';
import QuestionierInviteSearch from './questionier-invite-search/questionier-invite-search';

const questionnaireInvite = ({ match }) => {
  const { url } = match;
  return (
    <div>
      <Route exact path={`${url}/by-email`} component={QuestionierInviteEmail} />
      <Route exact path={`${url}/by-link`} component={QuestionierInviteLink} />
      <Route exact path={`${url}/by-search`} component={QuestionierInviteSearch} />
    </div>
  );
};

export default questionnaireInvite;
