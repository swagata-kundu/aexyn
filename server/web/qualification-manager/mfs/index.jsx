import React from 'react';
import { Route } from 'react-router-dom';
import Configure from './questions/configure';
import Preview from './questions/preview';
import Invite from './invite';
import Status from './status';
import DashBoard from './dashboard';

const MFS = ({ match }) => {
  const { url } = match;
  return (
    <div>
      <Route exact path={`${url}`} component={DashBoard} />
      <Route exact path={`${url}/preview-questions`} component={Preview} />
      <Route exact path={`${url}/configure-questions`} component={Configure} />
      <Route path={`${url}/invitation/:invitationId`} component={Status} />
      <Route path={`${url}/invite/`} component={Invite} />
    </div>
  );
};

export default MFS;
