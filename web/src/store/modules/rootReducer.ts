import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import video from './video/reducer';
import meet from './meet/reducer';
import report from './report/reducer';
import area from './area/reducer';
import tag from './tag/reducer';

export default combineReducers({
  auth,
  user,
  video,
  meet,
  report,
  area,
  tag,
});
