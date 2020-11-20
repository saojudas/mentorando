import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './constants';

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
