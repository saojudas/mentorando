import produce from 'immer';
import { AnyAction } from 'redux';

import { User } from '../auth/interfaces';

import { SIGN_IN_SUCCESS } from '../auth/constants';
import {
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAILURE,
} from './constants';

interface AuthState {
  profile: User | undefined;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE = {
  profile: undefined,
  loading: false,
  error: false,
};

export default function user(
  state: AuthState = INITIAL_STATE,
  action: AnyAction,
) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_SUCCESS: {
        draft.profile = action.payload.user;
        break;
      }

      case UPDATE_AVATAR_REQUEST: {
        draft.loading = true;
        break;
      }

      case UPDATE_AVATAR_SUCCESS: {
        draft.loading = false;
        if (draft.profile) draft.profile.avatar = action.payload.avatar;
        draft.error = false;
        break;
      }

      case UPDATE_AVATAR_FAILURE: {
        draft.loading = false;
        draft.error = true;
        break;
      }

      default:
    }
  });
}
