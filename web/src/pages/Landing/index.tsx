import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Lottie from 'react-lottie';

import Link from '../../components/Link';

import animationData from '../../assets/hero.json';
import logoImg from '../../assets/logo.svg';

import { Container, ActionButtons, Hero, TotalConnections } from './styles';

const Landing: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <img src={logoImg} alt="Mentorando" />

      <p>
        Acolhimento e acompanhamento nos seus estudos de forma totalmente
        conectada.
      </p>

      <ActionButtons color={colors.orange}>
        <Link to="/register" color={colors.orange}>
          Inscrever-se
        </Link>

        <Link
          to="/login"
          color={colors.white}
          outline
          func="darken"
          amount={0.8}
        >
          Fazer login
        </Link>
      </ActionButtons>

      <Hero>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
          }}
          height={500}
          width={700}
        />
      </Hero>

      <TotalConnections>
        <strong>Uma rede com o total de 201 conexões já realizadas!</strong>
      </TotalConnections>
    </Container>
  );
};

export default Landing;
