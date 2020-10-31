import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { Container, Logo, NavigationBar, Profile } from './styles';

import logo from '../../assets/logo.svg';
import userImg from '../../assets/jhon.jpg';

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container color={colors.primary}>
      <Logo>
        <img src={logo} alt="Mentorando" />
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
        <span>Jhonatan da Costa</span>
        <img src={userImg} alt="Jhonatan" />
      </Profile>
    </Container>
  );
};

export default Header;
