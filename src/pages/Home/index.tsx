import React from 'react';

import CardVideo from '../../components/CardVideo';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <CardVideo />
      <h1>Home</h1>
    </Container>
  );
};

export default Home;
