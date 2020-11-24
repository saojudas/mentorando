import React, { useContext, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { FaUserCog, FaRegPlayCircle, FaSignOutAlt } from 'react-icons/fa';
import Ink from 'react-ink';
import Switch from 'react-switch';

import HandlesContext from '../../context/handles';
import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';
import userImg from '../../assets/jhon.jpg';

import { IRootState } from '../../store';

import {
  Container,
  Logo,
  NavigationBar,
  ThemeSwitcher,
  Profile,
  Actions,
} from './styles';

const Header: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);
  const { toggleTheme } = useContext(HandlesContext);

  const dispatch = useDispatch();

  const profile = useSelector((state: IRootState) => state.user.profile);

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  return (
    <Container>
      <Logo>
        <Link to="/home">
          <img src={logo} alt="Mentorando" />
        </Link>
      </Logo>

      <NavigationBar>
        <ul>
          <li>
            <Link to="/">ASSISTIR VÍDEOS</Link>
          </li>
          <li>
            <Link to="/#">MEUS VÍDEOS</Link>
          </li>
          <li>
            <Link to="/new-candidate">SER CONSELHEIRO</Link>
          </li>
        </ul>
      </NavigationBar>

      <ThemeSwitcher>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={colors.black}
          onColor={colors.secondary}
        />
      </ThemeSwitcher>

      <Profile>
        <span>{profile?.username}</span>

        <img src={userImg} alt={profile?.username || ''} />

        <Actions>
          <li>
            <Link to="/profile">
              <Ink />
              <FaUserCog size={16} color={colors.black} />
              Meu perfil
            </Link>
          </li>
          <li>
            <Link to="/">
              <Ink />
              <FaRegPlayCircle size={16} color={colors.black} />
              Meus vídeos
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
