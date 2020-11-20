import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signInFailure } from './actions';
import { SIGN_IN_REQUEST } from './constants';

export function* signIn({ payload }: AnyAction) {
  try {
    const { email, password } = payload;

    const response: AxiosResponse = yield call(api.post, 'sessions', {
      email,
      password,
    });

    yield delay(1000);

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/home');
  } catch (err) {
    yield put(signInFailure());
  }
}

export default all([takeLatest(SIGN_IN_REQUEST, signIn)]);
