import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';

import api from '../../../services/api';
import history from '../../../services/history';

import { Report } from './interfaces';

import { createReportSuccess, createReportFailure } from './actions';

import { CREATE_REPORT_REQUEST } from './constants';

export function* create({ payload }: AnyAction) {
  try {
    const {
      students_ids,
      subject_matter,
      report_date,
      start_hour,
      end_hour,
    } = payload as Report;

    const response: AxiosResponse = yield call(api.post, 'reports', {
      students_ids: [students_ids],
      subject_matter,
      report_date,
      start_hour,
      end_hour,
    });

    yield delay(1000);

    const newReport = response.data as Report;

    yield put(createReportSuccess(newReport));

    toast.success('Relatório cadastrado com sucesso.');

    yield delay(3000);

    history.push('/home');
  } catch (err) {
    yield put(createReportFailure());

    toast.error('Cadastro não efetuado, verifique os dados do formulário!');
  }
}

export default all([takeLatest(CREATE_REPORT_REQUEST, create)]);
