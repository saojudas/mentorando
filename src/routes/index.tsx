import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
