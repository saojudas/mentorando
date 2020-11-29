import produce from 'immer';
import { AnyAction } from 'redux';

import {
  CREATE_VIDEO_REQUEST,
  CREATE_VIDEO_SUCCESS,
  CREATE_VIDEO_FAILURE,
  UPDATE_VIDEO_REQUEST,
  UPDATE_VIDEO_SUCCESS,
  UPDATE_VIDEO_FAILURE,
  DELETE_VIDEO_REQUEST,
  DELETE_VIDEO_SUCCESS,
  DELETE_VIDEO_FAILURE,
  UPLOAD_THUMBNAIL_REQUEST,
  UPLOAD_THUMBNAIL_SUCCESS,
  UPLOAD_THUMBNAIL_FAILURE,
  CANCEL_THUMBNAIL,
  UPLOAD_THUMBNAIL_REQUEST_SEND,
} from './constants';

import { Thumbnail, Video } from './interfaces';

interface VideoState {
  video: Video | undefined;
  created: boolean;
  updated: boolean;
  loading: boolean;
  error: boolean;
  thumbnail: Thumbnail | undefined;
  files: FileList | undefined;
}

const INITIAL_STATE = {
  video: undefined,
  created: false,
  updated: false,
  loading: false,
  error: false,
  thumbnail: undefined,
  files: undefined,
};

export default function video(
  state: VideoState = INITIAL_STATE,
  action: AnyAction,
) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_VIDEO_REQUEST: {
        draft.loading = true;
        break;
      }

      case CREATE_VIDEO_SUCCESS: {
        draft.loading = false;
        draft.video = action.payload.video;
        draft.created = true;
        break;
      }

      case CREATE_VIDEO_FAILURE: {
        draft.video = undefined;
        draft.created = false;
        draft.loading = false;
        break;
      }

      case UPDATE_VIDEO_REQUEST: {
        draft.loading = true;
        break;
      }

      case UPDATE_VIDEO_SUCCESS: {
        draft.loading = false;
        draft.video = action.payload.video;
        draft.updated = true;
        break;
      }

      case UPDATE_VIDEO_FAILURE: {
        draft.loading = false;
        draft.error = true;
        break;
      }

      case DELETE_VIDEO_REQUEST: {
        draft.loading = true;
        break;
      }

      case DELETE_VIDEO_SUCCESS: {
        draft.video = undefined;
        draft.loading = false;
        break;
      }

      case DELETE_VIDEO_FAILURE: {
        draft.loading = false;
        draft.error = true;
        break;
      }

      case UPLOAD_THUMBNAIL_REQUEST: {
        draft.thumbnail = { url: URL.createObjectURL(action.payload.files[0]) };
        draft.files = action.payload.files;
        break;
      }

      case UPLOAD_THUMBNAIL_SUCCESS: {
        draft.thumbnail = action.payload.thumbnail;
        draft.loading = false;
        break;
      }

      case UPLOAD_THUMBNAIL_FAILURE: {
        draft.loading = false;
        draft.thumbnail = undefined;
        draft.error = true;
        break;
      }

      case UPLOAD_THUMBNAIL_REQUEST_SEND: {
        draft.thumbnail = undefined;
        break;
      }

      case CANCEL_THUMBNAIL: {
        draft.thumbnail = undefined;
        break;
      }

      default:
    }
  });
}
