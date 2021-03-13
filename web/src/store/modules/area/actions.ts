import {
  CREATE_AREA_REQUEST,
  CREATE_AREA_SUCCESS,
  CREATE_AREA_FAILURE,
} from './constants';

import { Area } from './interfaces';

export function createAreaRequest(newArea: Area) {
  return { type: CREATE_AREA_REQUEST, payload: { ...newArea } };
}

export function createAreaSuccess(area: Area) {
  return { type: CREATE_AREA_SUCCESS, payload: { area } };
}

export function createAreaFailure() {
  return { type: CREATE_AREA_FAILURE };
}
