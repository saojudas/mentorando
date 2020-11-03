import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Lottie from 'react-lottie';

import Button from '../../components/Button';

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

      <ActionButtons>
        <Button color={colors.orange}>Inscrever-se</Button>

        <Button color={colors.white} outline>
          Fazer login
        </Button>
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
