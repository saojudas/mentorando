import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';

import api from '../../../services/api';

import { Video } from './interfaces';

import {
  createVideoSuccess,
  createVideoFailure,
  updateVideoSuccess,
  updateVideoFailure,
  deleteVideoSuccess,
  deleteVideoFailure,
} from './actions';

import {
  CREATE_VIDEO_REQUEST,
  UPDATE_VIDEO_REQUEST,
  DELETE_VIDEO_REQUEST,
} from './constants';

export function* create({ payload }: AnyAction) {
  try {
    const {
      title,
      description,
      video_link,
      area_id,
      tags_ids,
    } = payload as Video;

    const response: AxiosResponse = yield call(api.post, 'videos', {
      title,
      description,
      video_link,
      area_id,
      tags_ids,
    });

    yield delay(1000);

    const newVideo = response.data as Video;

    yield put(createVideoSuccess(newVideo));

    toast.success('Vídeo cadastrado com sucesso!');
  } catch (err) {
    yield put(createVideoFailure());

    toast.error('Cadastro não efetuado, verifique os dados do formulário!');
  }
}

export function* update({ payload }: AnyAction) {
  try {
    const {
      title,
      description,
      video_link,
      area_id,
      tags_ids,
    } = payload as Video;

    const video = yield call(api.put, 'videos', {
      title,
      description,
      video_link,
      area_id,
      tags_ids,
    });

    yield delay(1000);

    toast.success('Vídeo atualizado com sucesso!');

    yield put(updateVideoSuccess(video));
  } catch (err) {
    yield put(updateVideoFailure());

    toast.error('Edição não efetuada, verifique os dados do formulário!');
  }
}

export function* deleteVideo({ payload }: AnyAction) {
  try {
    const { video_id } = payload;

    yield call(api.delete, `videos/${video_id}`);

    yield delay(1000);

    toast.success('Vídeo removido com sucesso!');

    yield put(deleteVideoSuccess());
  } catch (err) {
    yield put(deleteVideoFailure());

    toast.error(
      'Não foi possível excluir o vídeo, tente novamente mais tarde!',
    );
  }
}

export default all([
  takeLatest(CREATE_VIDEO_REQUEST, create),
  takeLatest(UPDATE_VIDEO_REQUEST, update),
  takeLatest(DELETE_VIDEO_REQUEST, deleteVideo),
]);
