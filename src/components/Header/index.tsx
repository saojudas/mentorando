import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import logo from '../../assets/logo.svg';
import userImg from '../../assets/jhon.jpg';

import { IRootState } from '../../store';

import { Container, Logo, NavigationBar, Profile } from './styles';

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const profile = useSelector((state: IRootState) => state.user.profile);

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

        <img src={userImg} alt="Jhonatan" />
      </Profile>
    </Container>
  );
};

export default Header;
