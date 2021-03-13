import {
  CREATE_MEET_REQUEST,
  CREATE_MEET_SUCCESS,
  CREATE_MEET_FAILURE,
  DELETE_MEET_REQUEST,
  DELETE_MEET_SUCCESS,
  DELETE_MEET_FAILURE,
} from './constants';

import { Meet } from './interfaces';

export function createMeetRequest(newMeet: Meet) {
  return { type: CREATE_MEET_REQUEST, payload: { ...newMeet } };
}

export function createMeetSuccess(meet: Meet) {
  return { type: CREATE_MEET_SUCCESS, payload: { meet } };
}

export function createMeetFailure() {
  return { type: CREATE_MEET_FAILURE };
}

export function deleteMeetRequest(meet_id: string) {
  return { type: DELETE_MEET_REQUEST, payload: { meet_id } };
}

export function deleteMeetSuccess() {
  return { type: DELETE_MEET_SUCCESS };
}

export function deleteMeetFailure() {
  return { type: DELETE_MEET_FAILURE };
}
