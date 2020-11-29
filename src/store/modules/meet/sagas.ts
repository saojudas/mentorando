import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import { format, getHours, getMinutes } from 'date-fns';

import api from '../../../services/api';
import history from '../../../services/history';

import { Meet } from './interfaces';

import {
  createMeetSuccess,
  createMeetFailure,
  deleteMeetSuccess,
  deleteMeetFailure,
} from './actions';

import { CREATE_MEET_REQUEST, DELETE_MEET_REQUEST } from './constants';

export function* create({ payload }: AnyAction) {
  try {
    const {
      title,
      meet_link,
      members_id,
      date_meet,
      start_hour,
      end_hour,
    } = payload;

    const parsedDateMeet = format(date_meet, 'yyyy-MM-dd');

    const startHourI = String(getHours(start_hour)).padStart(2, '0');
    const startHourF = String(getMinutes(start_hour)).padStart(2, '0');

    const parsedStartHour = `${startHourI}:${startHourF}`;

    const endHourI = String(getHours(end_hour)).padStart(2, '0');
    const endHourF = String(getMinutes(end_hour)).padStart(2, '0');

    const parsedEndHour = `${endHourI}:${endHourF}`;

    console.log({
      title,
      meet_link,
      members_id,
      date_meet: parsedDateMeet,
      start_hour: parsedStartHour,
      end_hour: parsedEndHour,
    });

    const response: AxiosResponse = yield call(api.post, 'meets', {
      title,
      meet_link,
      members_id,
      date_meet,
      start_hour: parsedStartHour,
      end_hour: parsedEndHour,
    });

    yield delay(1000);

    const newMeet = response.data as Meet;

    yield put(createMeetSuccess(newMeet));

    toast.success(`Reunião marcada para às ${parsedStartHour} com sucesso.`);

    yield delay(3000);

    history.push('/home');
  } catch (err) {
    yield put(createMeetFailure());

    toast.error('Cadastro não efetuado, verifique os dados do formulário!');
  }
}

export function* deleteMeet({ payload }: AnyAction) {
  try {
    const { meet_id } = payload;

    yield call(api.delete, `meets/${meet_id}`);

    yield delay(1000);

    toast.success('Reunião cancelada com sucesso!');

    yield put(deleteMeetSuccess());
  } catch (err) {
    yield put(deleteMeetFailure());

    toast.error(
      'Não foi possível cancelar a reunião, tente novamente mais tarde!',
    );
  }
}

export default all([
  takeLatest(CREATE_MEET_REQUEST, create),
  takeLatest(DELETE_MEET_REQUEST, deleteMeet),
]);
