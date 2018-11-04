import React from 'react';
import { Route } from 'react-router-dom';
import Suppliers from './screens/suppliers';
import Jungle from './screens/jungle';
import Tabs from '../components/tabs';
import Nav from './components/nav';

const Permission = ({ match }) => {
  const { url } = match;
  return (
    <section
      className="custom-body-container-wrapper"
      style={{ paddingLeft: 50 }}
    >
      <div className="custom-body-container">
        <Tabs />
        <div className="custom-permission-section-2">
          <Nav />
          <Route exact path={`${url}`} component={Suppliers} />
          <Route exact path={`${url}/suppliers`} component={Suppliers} />
          <Route exact path={`${url}/jungle`} component={Jungle} />
        </div>
      </div>
    </section>
  );
};

export default Permission;
