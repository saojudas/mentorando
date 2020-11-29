import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import video from './video/reducer';
import meet from './meet/reducer';

export default combineReducers({
  auth,
  user,
  video,
  meet,
});
