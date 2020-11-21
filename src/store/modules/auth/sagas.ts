import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
} from './actions';

import { SIGN_IN_REQUEST, SIGN_UP_REQUEST } from './constants';

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
  } catch (err) {
    yield put(signUpFailure());

    toast.error('Cadastro não efetuado, verifique seus dados!');
  }
}

export default all([
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_UP_REQUEST, signUp),
]);
