import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import video from './video/sagas';
import meet from './meet/sagas';
import report from './report/sagas';
import area from './area/sagas';
import tag from './tag/sagas';

export default function* rootSaga() {
  return yield all([auth, user, video, meet, report, area, tag]);
}
