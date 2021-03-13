import { all, takeLatest, call, put, delay, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';

import api from '../../../services/api';
import history from '../../../services/history';

import { Video } from './interfaces';
import { IRootState } from '../..';

import {
  createVideoSuccess,
  createVideoFailure,
  updateVideoSuccess,
  updateVideoFailure,
  deleteVideoSuccess,
  deleteVideoFailure,
  uploadThumbnailSuccess,
  uploadThumbnailFailure,
  uploadThumbnailRequestSend,
} from './actions';

import {
  CREATE_VIDEO_REQUEST,
  UPDATE_VIDEO_REQUEST,
  DELETE_VIDEO_REQUEST,
  UPLOAD_THUMBNAIL_REQUEST_SEND,
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

    const video = yield select((state: IRootState) => state.video);

    const { files: thumbnail } = video;

    if (!thumbnail) {
      toast.info(
        'Cadastro não efetuado, você precisa enviar uma thumbnail para o seu vídeo!',
      );

      return;
    }

    if (!video_link.includes('www.youtube.com')) {
      toast.info(
        'Cadastro não efetuado, temos suporte apenas aos vídeos do youtube!',
      );

      return;
    }

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

    yield put(uploadThumbnailRequestSend(newVideo.id, thumbnail[0]));
  } catch (err) {
    yield put(createVideoFailure());

    toast.error('Cadastro não efetuado, verifique os dados do formulário!');
  }
}

export function* upload({ payload }: AnyAction) {
  try {
    const { video_id, thumbnail } = payload;

    const data = new FormData();

    data.append('thumbnail', thumbnail);

    const response = yield call(api.post, `videos/thumbnail/${video_id}`, data);

    yield delay(1000);

    toast.success('Vídeo cadastrado com sucesso!');

    yield put(uploadThumbnailSuccess(response.data));

    history.push('/home');
  } catch (err) {
    toast.error('Ocorreu um erro ao realizar o upload do arquivo!');

    yield put(uploadThumbnailFailure());
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
  takeLatest(UPLOAD_THUMBNAIL_REQUEST_SEND, upload),
  takeLatest(UPDATE_VIDEO_REQUEST, update),
  takeLatest(DELETE_VIDEO_REQUEST, deleteVideo),
]);
