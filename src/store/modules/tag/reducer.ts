import produce from 'immer';
import { AnyAction } from 'redux';

import {
  CREATE_TAG_REQUEST,
  CREATE_TAG_SUCCESS,
  CREATE_TAG_FAILURE,
} from './constants';

import { Tag } from './interfaces';

interface TagState {
  tag: Tag | undefined;
  created: boolean;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE = {
  tag: undefined,
  created: false,
  loading: false,
  error: false,
};

export default function tag(
  state: TagState = INITIAL_STATE,
  action: AnyAction,
) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_TAG_REQUEST: {
        draft.loading = true;
        break;
      }

      case CREATE_TAG_SUCCESS: {
        draft.loading = false;
        draft.tag = action.payload.tag;
        draft.created = true;
        break;
      }

      case CREATE_TAG_FAILURE: {
        draft.tag = undefined;
        draft.created = false;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
