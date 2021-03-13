import produce from 'immer';
import { AnyAction } from 'redux';

import {
  CREATE_REPORT_REQUEST,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAILURE,
} from './constants';

import { Report } from './interfaces';

interface ReportState {
  report: Report | undefined;
  created: boolean;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE = {
  report: undefined,
  created: false,
  loading: false,
  error: false,
};

export default function report(
  state: ReportState = INITIAL_STATE,
  action: AnyAction,
) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_REPORT_REQUEST: {
        draft.loading = true;
        break;
      }

      case CREATE_REPORT_SUCCESS: {
        draft.loading = false;
        draft.report = action.payload.report;
        draft.created = true;
        break;
      }

      case CREATE_REPORT_FAILURE: {
        draft.report = undefined;
        draft.created = false;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
