import React from 'react';
import { Route } from 'react-router-dom';
import DashBoard from './screens/dashboard';
import Invitation from './screens/invitation';

const IFJ = ({ match }) => {
  const { url } = match;
  return (
    <div>
      <Route exact path={`${url}`} component={DashBoard} />
      <Route path={`${url}/invitation/:invitationId`} component={Invitation} />
    </div>
  );
};

export default IFJ;
