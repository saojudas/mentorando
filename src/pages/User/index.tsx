import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { toast } from 'react-toastify';

import AsideMenu from '../../components/AsideMenu';
import Tag from '../../components/Tag';
import Button from '../../components/Button';
import CardVideo from '../../components/CardVideo';

import useQueryParams from '../../hooks/useQueryParams';

import api from '../../services/api';
import history from '../../services/history';

import defaultAvatar from '../../assets/avatar-default.png';

import { User as IUser } from '../../store/modules/auth/interfaces';

import { ReactComponent as AdviserSVG } from '../../assets/adviser.svg';

import {
  Container,
  Title,
  ContentSection,
  Content,
  UserPhoto,
  Name,
  Description,
  MoreInfo,
  Videos,
} from './styles';
import { IRootState } from '../../store';
import { Video } from '../../store/modules/video/interfaces';

const User: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);

  const profile = useSelector((state: IRootState) => state.user.profile);

  const [user, setUser] = useState<IUser>();

  const user_id = useQueryParams('user_id');

  const handleApproveCandidate = useCallback(async () => {
    try {
      await api.put('advisors', { student_id: user?.student?.id });

      toast.success('Candidato aprovado com sucesso!');

      history.push('/home');
    } catch (err) {
      toast.error('Ocorreu um erro ao aprovar este candidato!');
    }
  }, [user?.student?.id]);

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`users/${user_id}`);

      setUser(response.data);
    }

    loadUser();
  }, [user_id]);

  return (
    <Container>
      <Title>
        <h1>Início</h1>
        {/* <section>teste</section> */}
      </Title>

      <ContentSection>
        <AsideMenu />

        <Content>
          <UserPhoto>
            <img
              src={user?.avatar?.url || defaultAvatar}
              alt={`Foto de ${user?.username}`}
            />
          </UserPhoto>

          <Name>
            <span>
              {user?.student ? user?.student?.name : user?.teacher?.name}
            </span>

            {user?.student?.is_advisor && <AdviserSVG />}
          </Name>

          <Description>
            <p>{user?.description}</p>
          </Description>

          <MoreInfo>
            {user?.area && <Tag name={user?.area.name || ''} />}

            {user?.area &&
              user?.student?.is_advisor &&
              !profile.teacher &&
              user?.id !== profile.id && (
                <Button
                  type="submit"
                  color={title === 'light' ? colors.orange : colors.secondary}
                >
                  Escolher conselheiro
                </Button>
              )}

            {user?.area &&
              profile?.teacher &&
              user?.student?.candidate &&
              user?.student?.teacher_id === profile?.teacher?.id && (
                <Button
                  type="submit"
                  color={title === 'light' ? colors.orange : colors.secondary}
                  onClick={handleApproveCandidate}
                >
                  Aprovar conselheiro
                </Button>
              )}
          </MoreInfo>

          <h3>Videos</h3>

          <Videos>
            {user?.videos?.map((video: Video) => (
              <CardVideo
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnail={video.thumbnail?.url}
              />
            ))}
          </Videos>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default User;
