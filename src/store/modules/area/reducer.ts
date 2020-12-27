import produce from 'immer';
import { AnyAction } from 'redux';

import {
  CREATE_AREA_REQUEST,
  CREATE_AREA_SUCCESS,
  CREATE_AREA_FAILURE,
} from './constants';

import { Area } from './interfaces';

interface AreaState {
  area: Area | undefined;
  created: boolean;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE = {
  area: undefined,
  created: false,
  loading: false,
  error: false,
};

export default function area(
  state: AreaState = INITIAL_STATE,
  action: AnyAction,
) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_AREA_REQUEST: {
        draft.loading = true;
        break;
      }

      case CREATE_AREA_SUCCESS: {
        draft.loading = false;
        draft.area = action.payload.area;
        draft.created = true;
        break;
      }

      case CREATE_AREA_FAILURE: {
        draft.area = undefined;
        draft.created = false;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
