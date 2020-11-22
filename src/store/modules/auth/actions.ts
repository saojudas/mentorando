import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT,
} from './constants';

import { User } from './interfaces';

export function signInRequest(email: string, password: string) {
  return { type: SIGN_IN_REQUEST, payload: { email, password } };
}

export function signInSuccess(token: string, user: User) {
  return { type: SIGN_IN_SUCCESS, payload: { token, user } };
}

export function signInFailure() {
  return { type: SIGN_IN_FAILURE };
}

export function signUpRequest(newUser: User) {
  return { type: SIGN_UP_REQUEST, payload: { ...newUser } };
}

export function signUpSuccess() {
  return { type: SIGN_UP_SUCCESS };
}

export function signUpFailure() {
  return { type: SIGN_UP_FAILURE };
}

export function signOut() {
  return { type: SIGN_OUT };
}
