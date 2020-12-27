import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';

import api from '../../../services/api';
import history from '../../../services/history';

import { Area } from './interfaces';

import { createAreaSuccess, createAreaFailure } from './actions';

import { CREATE_AREA_REQUEST } from './constants';

export function* create({ payload }: AnyAction) {
  try {
    const { name } = payload as Area;

    const response: AxiosResponse = yield call(api.post, 'areas', {
      name,
    });

    yield delay(1000);

    const newArea = response.data as Area;

    yield put(createAreaSuccess(newArea));

    toast.success('Cadastro efetuado com sucesso!');

    history.push('/areas');
  } catch (err) {
    yield put(createAreaFailure());

    toast.error('Cadastro não efetuado, verifique os dados do formulário!');
  }
}

export default all([takeLatest(CREATE_AREA_REQUEST, create)]);
