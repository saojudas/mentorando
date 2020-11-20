import produce from 'immer';
import { AnyAction } from 'redux';

import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './constants';

interface AuthState {
  token: string | undefined;
  signed: boolean;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE = {
  token: undefined,
  signed: false,
  loading: false,
  error: false,
};

export default function auth(
  state: AuthState = INITIAL_STATE,
  action: AnyAction,
) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }

      case SIGN_IN_SUCCESS: {
        draft.loading = false;
        draft.token = action.payload.token;
        draft.signed = true;
        break;
      }

      case SIGN_IN_FAILURE: {
        draft.token = undefined;
        draft.signed = false;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
