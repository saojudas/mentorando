import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FaPlus,
  FaRegPlayCircle,
  FaRegCalendarPlus,
  FaUsers,
  FaUserTag,
  FaArchive,
} from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import Ink from 'react-ink';

import { IRootState } from '../../store';

import advisorImg from '../../assets/advisor-light.svg';

import { Container, Item, Animation } from './styles';

const AsideMenu: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const profile = useSelector((state: IRootState) => state.user.profile);

  return (
    <Container>
      <Item>
        <Link to="/new-video">
          <Animation>
            <FaPlus size={32} color={colors.white} />
            <span>Novo video</span>
            <Ink />
          </Animation>
        </Link>
      </Item>

      <Item>
        <Link to="/new-meet">
          <Animation>
            <FaRegCalendarPlus size={32} color={colors.white} />
            <span>Marcar reunião</span>
            <Ink />
          </Animation>
        </Link>
      </Item>

      {profile?.student && (
        <Item>
          <Link to="/new-report">
            <Animation>
              <FaRegPlayCircle size={32} color={colors.white} />
              <span>Novo relatório</span>
              <Ink />
            </Animation>
          </Link>
        </Item>
      )}

      <Item>
        <Link to="/students">
          <Animation>
            <FaUsers size={32} color={colors.white} />
            <span>Alunos</span>
            <Ink />
          </Animation>
        </Link>
      </Item>

      {profile?.teacher && (
        <>
          <Item>
            <Link to="/candidates">
              <Animation>
                <FaUserTag size={32} color={colors.white} />
                <span>Candidatos</span>
                <Ink />
              </Animation>
            </Link>
          </Item>

          <Item>
            <Link to="/reports">
              <Animation>
                <FaArchive size={32} color={colors.white} />
                <span>Relatórios</span>
                <Ink />
              </Animation>
            </Link>
          </Item>
        </>
      )}

      {profile?.student && (
        <Item>
          <Link to="/new-candidate">
            <Animation>
              <img src={advisorImg} alt="Conselheiros" />
              <span>Tornar conselheiro</span>
              <Ink />
            </Animation>
          </Link>
        </Item>
      )}
    </Container>
  );
};

export default AsideMenu;
