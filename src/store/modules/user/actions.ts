import {
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAILURE,
} from './constants';

import { UserAvatar } from './interfaces';

export function updateAvatarRequest(files: FileList | null) {
  return { type: UPDATE_AVATAR_REQUEST, payload: { files } };
}

export function updateAvatarSuccess(avatar: UserAvatar) {
  return { type: UPDATE_AVATAR_SUCCESS, payload: { avatar } };
}

export function updateAvatarFailure() {
  return { type: UPDATE_AVATAR_FAILURE };
}
