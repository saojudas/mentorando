import {
  CREATE_REPORT_REQUEST,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAILURE,
} from './constants';

import { Report } from './interfaces';

export function createReportRequest(newReport: Report) {
  return { type: CREATE_REPORT_REQUEST, payload: { ...newReport } };
}

export function createReportSuccess(video: Report) {
  return { type: CREATE_REPORT_SUCCESS, payload: { video } };
}

export function createReportFailure() {
  return { type: CREATE_REPORT_FAILURE };
}
