import React from 'react';
import { Route } from 'react-router-dom';
import Configure from './configure/configure';

const questionnaire = ({ match }) => {
  const { url } = match;
  return (
    <div>
      <Route exact path={`${url}/configure`} component={Configure} />
    </div>
  );
};

export default questionnaire;
