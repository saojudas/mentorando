import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';

import api from '../../../services/api';

import { updateAvatarSuccess, updateAvatarFailure } from './actions';

import { UPDATE_AVATAR_REQUEST } from './constants';

export function* update({ payload }: AnyAction) {
  try {
    const { files } = payload;

    if (!files[0]) return;

    const data = new FormData();

    data.append('avatar', files[0]);

    const response: AxiosResponse = yield call(api.patch, 'users/avatar', data);

    yield delay(1000);

    toast.success('Avatar atualizado com sucesso!');

    yield put(updateAvatarSuccess(response.data));
  } catch (err) {
    yield put(updateAvatarFailure());

    toast.error('Ops não foi possível atualizar o avatar!');
  }
}

export default all([takeLatest(UPDATE_AVATAR_REQUEST, update)]);
