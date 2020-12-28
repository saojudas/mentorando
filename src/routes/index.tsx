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

import Areas from '../pages/Areas';
import Tags from '../pages/Tags';
import Students from '../pages/Students';
import Reports from '../pages/Reports';

import NewCandidate from '../pages/NewCandidate';
import Candidates from '../pages/Candidates';

import Video from '../pages/Video';
import User from '../pages/User';
import Profile from '../pages/Profile';

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

      <Route path="/areas" component={Areas} isPrivate />
      <Route path="/tags" component={Tags} isPrivate />
      <Route path="/students" component={Students} isPrivate />
      <Route path="/reports" component={Reports} isPrivate />

      <Route path="/new-candidate" component={NewCandidate} isPrivate />
      <Route path="/candidates" component={Candidates} isPrivate />

      <Route path="/video" component={Video} isPrivate />
      <Route path="/user" component={User} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  </Router>
);

export default Routes;
