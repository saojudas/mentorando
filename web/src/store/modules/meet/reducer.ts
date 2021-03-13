import produce from 'immer';
import { AnyAction } from 'redux';

import {
  CREATE_MEET_REQUEST,
  CREATE_MEET_SUCCESS,
  CREATE_MEET_FAILURE,
  DELETE_MEET_REQUEST,
  DELETE_MEET_SUCCESS,
  DELETE_MEET_FAILURE,
} from './constants';

import { Meet } from './interfaces';

interface MeetState {
  meet: Meet | undefined;
  created: boolean;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE = {
  meet: undefined,
  created: false,
  loading: false,
  error: false,
};

export default function meet(
  state: MeetState = INITIAL_STATE,
  action: AnyAction,
) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_MEET_REQUEST: {
        draft.loading = true;
        break;
      }

      case CREATE_MEET_SUCCESS: {
        draft.loading = false;
        draft.meet = action.payload.meet;
        draft.created = true;
        break;
      }

      case CREATE_MEET_FAILURE: {
        draft.meet = undefined;
        draft.created = false;
        draft.loading = false;
        break;
      }

      case DELETE_MEET_REQUEST: {
        draft.loading = true;
        break;
      }

      case DELETE_MEET_SUCCESS: {
        draft.meet = undefined;
        draft.loading = false;
        break;
      }

      case DELETE_MEET_FAILURE: {
        draft.loading = false;
        draft.error = true;
        break;
      }

      default:
    }
  });
}
