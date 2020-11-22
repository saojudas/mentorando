import React, { useContext, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { FaUserCog, FaSignOutAlt } from 'react-icons/fa';
import Ink from 'react-ink';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';
import userImg from '../../assets/jhon.jpg';

import { IRootState } from '../../store';

import { Container, Logo, NavigationBar, Profile, Actions } from './styles';

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const profile = useSelector((state: IRootState) => state.user.profile);

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  return (
    <Container color={colors.primary}>
      <Logo>
        <Link to="/home">
          <img src={logo} alt="Mentorando" />
        </Link>
      </Logo>

      <NavigationBar color={colors.white}>
        <ul>
          <li>
            <Link to="/#">HOME</Link>
          </li>
          <li>
            <Link to="/#">MEUS VÍDEOS</Link>
          </li>
          <li>
            <Link to="/#">ASSISTIR VÍDEOS</Link>
          </li>
        </ul>
      </NavigationBar>

      <Profile color={colors.white}>
        <span>{profile?.username}</span>

        <img src={userImg} alt={profile?.username || ''} />
        <Actions>
          <li>
            <Link to="/">
              <Ink />
              <FaUserCog size={16} color={colors.black} />
              Meu perfil
            </Link>
          </li>
          <li>
            <button type="button" onClick={handleSignOut}>
              <Ink />
              <FaSignOutAlt size={16} color={colors.black} />
              Sair
            </button>
          </li>
        </Actions>
      </Profile>
    </Container>
  );
};

export default Header;
