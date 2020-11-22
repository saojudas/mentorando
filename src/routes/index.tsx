import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Route from './Route';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';

import NewVideo from '../pages/NewVideo';
import NewMeet from '../pages/NewMeet';
import NewReport from '../pages/NewReport';

import Advisors from '../pages/Advisors';
import Reports from '../pages/Reports';

import history from '../services/history';

const Routes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Landing} landing />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/home" component={Home} isPrivate />

      <Route path="/new-video" component={NewVideo} isPrivate />
      <Route path="/new-meet" component={NewMeet} isPrivate />
      <Route path="/new-report" component={NewReport} isPrivate />

      <Route path="/advisors" component={Advisors} isPrivate />
      <Route path="/reports" component={Reports} isPrivate />
    </Switch>
  </Router>
);

export default Routes;
