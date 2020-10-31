import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Header from '../components/Header';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/header" component={Header} />
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />
      {/* <Route path="/home" component={Home} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
