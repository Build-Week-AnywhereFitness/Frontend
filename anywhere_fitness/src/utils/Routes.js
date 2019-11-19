import React from 'react';

import { Route, Link } from 'react-router-dom';

const Routes = () => {
  return (
    <div>
      <Route path='/' component={Navigation} />
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <PrivateRoute exact path='' component={} />
      <PrivateRoute exact path='' component={} />
    </div>
  );
};

export default Routes;
