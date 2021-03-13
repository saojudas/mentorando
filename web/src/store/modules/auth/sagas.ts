import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  signInRequest,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
} from './actions';

import { SIGN_IN_REQUEST, SIGN_UP_REQUEST, SIGN_OUT } from './constants';

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

    toast.success('Bem vindo, login efetuado com sucesso!');

    history.push('/home');
  } catch (err) {
    yield put(signInFailure());

    toast.error('Login não efetuado, verifique suas credenciais!');
  }
}

export function* signUp({ payload }: AnyAction) {
  try {
    const {
      username,
      name,
      email,
      university,
      registration,
      password,
      confirm_password,
      is_student,
    } = payload;

    yield call(api.post, 'users', {
      username,
      name,
      email,
      university,
      registration,
      password,
      confirm_password,
      is_student: is_student[0] === 'true',
    });

    yield delay(1000);

    toast.success('Cadastro efetuado com sucesso!');

    yield put(signUpSuccess());

    yield delay(3000);

    yield put(signInRequest(email, password));
  } catch (err) {
    yield put(signUpFailure());

    toast.error('Cadastro não efetuado, verifique seus dados!');
  }
}

export function signOut() {
  toast.success('Até a próxima!...');

  history.push('/');
}

export function setToken({ payload }: AnyAction) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_UP_REQUEST, signUp),
  takeLatest(SIGN_OUT, signOut),
]);
