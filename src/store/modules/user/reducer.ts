import produce from 'immer';
import { AnyAction } from 'redux';

import { User } from '../auth/interfaces';
import { SIGN_IN_SUCCESS } from '../auth/constants';

interface AuthState {
  profile: User | undefined;
}

const INITIAL_STATE = {
  profile: undefined,
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

      default:
    }
  });
}
