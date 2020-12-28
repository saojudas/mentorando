import {
  CREATE_TAG_REQUEST,
  CREATE_TAG_SUCCESS,
  CREATE_TAG_FAILURE,
} from './constants';

import { Tag } from './interfaces';

export function createTagRequest(newTag: Tag) {
  return { type: CREATE_TAG_REQUEST, payload: { ...newTag } };
}

export function createTagSuccess(tag: Tag) {
  return { type: CREATE_TAG_SUCCESS, payload: { tag } };
}

export function createTagFailure() {
  return { type: CREATE_TAG_FAILURE };
}
