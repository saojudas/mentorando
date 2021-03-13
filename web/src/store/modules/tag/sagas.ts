import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';

import api from '../../../services/api';
import history from '../../../services/history';

import { Tag } from './interfaces';

import { createTagSuccess, createTagFailure } from './actions';

import { CREATE_TAG_REQUEST } from './constants';

export function* create({ payload }: AnyAction) {
  try {
    const { name, area_id } = payload as Tag;

    const response: AxiosResponse = yield call(api.post, 'tags', {
      name,
      area_id,
    });

    yield delay(1000);

    const newTag = response.data as Tag;

    yield put(createTagSuccess(newTag));

    toast.success('Cadastro efetuado com sucesso!');

    history.push('/tags');
  } catch (err) {
    yield put(createTagFailure());

    toast.error('Cadastro não efetuado, verifique os dados do formulário!');
  }
}

export default all([takeLatest(CREATE_TAG_REQUEST, create)]);
