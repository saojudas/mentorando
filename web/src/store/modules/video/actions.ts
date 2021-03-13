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

export function createVideoRequest(newVideo: Video) {
  return { type: CREATE_VIDEO_REQUEST, payload: { ...newVideo } };
}

export function createVideoSuccess(video: Video) {
  return { type: CREATE_VIDEO_SUCCESS, payload: { video } };
}

export function createVideoFailure() {
  return { type: CREATE_VIDEO_FAILURE };
}

export function updateVideoRequest(video: Video) {
  return { type: UPDATE_VIDEO_REQUEST, payload: { ...video } };
}

export function updateVideoSuccess(video: Video) {
  return { type: UPDATE_VIDEO_SUCCESS, payload: { video } };
}

export function updateVideoFailure() {
  return { type: UPDATE_VIDEO_FAILURE };
}

export function deleteVideoRequest(video_id: string) {
  return { type: DELETE_VIDEO_REQUEST, payload: { video_id } };
}

export function deleteVideoSuccess() {
  return { type: DELETE_VIDEO_SUCCESS };
}

export function deleteVideoFailure() {
  return { type: DELETE_VIDEO_FAILURE };
}

export function uploadThumbnailRequest(files: FileList | null) {
  return { type: UPLOAD_THUMBNAIL_REQUEST, payload: { files } };
}

export function uploadThumbnailRequestSend(video_id: string, thumbnail: File) {
  return {
    type: UPLOAD_THUMBNAIL_REQUEST_SEND,
    payload: { video_id, thumbnail },
  };
}

export function uploadThumbnailSuccess(thumbnail: Thumbnail) {
  return { type: UPLOAD_THUMBNAIL_SUCCESS, payload: { thumbnail } };
}

export function uploadThumbnailFailure() {
  return { type: UPLOAD_THUMBNAIL_FAILURE };
}

export function cancelThumbnailRequest() {
  return { type: CANCEL_THUMBNAIL };
}
