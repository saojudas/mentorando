import React from 'react';

import AsideMenu from '../../components/AsideMenu';

import { Container, Title, ContentSection, Content } from './styles';

const NewCandidate: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>Início</h1>
        <section>teste</section>
      </Title>
      <ContentSection>
        <AsideMenu />
        <Content />
      </ContentSection>
    </Container>
  );
};

export default NewCandidate;
