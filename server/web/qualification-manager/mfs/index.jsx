import React from 'react';
import { Route } from 'react-router-dom';
import Configure from './questions/configure';
import DashBoard from './dashboard';

const questionnaire = ({ match }) => {
  const { url } = match;
  return (
    <div>
      <Route exact path={`${url}`} component={DashBoard} />
      <Route exact path={`${url}/configure-questions`} component={Configure} />
    </div>
  );
};

export default questionnaire;
