import React, { useContext, useCallback, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaCamera } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';

import defaultAvatar from '../../assets/avatar-default.png';

import { IRootState } from '../../store';
import { updateAvatarRequest } from '../../store/modules/user/actions';

import { Container } from './styles';

const Avatar: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const profile = useSelector((state: IRootState) => state.user.profile);

  const handleAvatarChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(updateAvatarRequest(e.target.files));
    },
    [dispatch],
  );

  return (
    <Container>
      <div>
        <img
          src={profile?.avatar?.url || defaultAvatar}
          alt={`Foto de ${
            profile?.student ? profile?.student.name : profile?.teacher.name
          }`}
        />

        <label htmlFor="avatar">
          <FaCamera size={22} color={colors.white} />

          <input type="file" id="avatar" onChange={handleAvatarChange} />
        </label>
      </div>
    </Container>
  );
};

export default Avatar;
