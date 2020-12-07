import React from 'react';

import AsideMenu from '../../components/AsideMenu';

import { Container, Title, ContentSection, Content } from './styles';

const Reports: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>Relatórios</h1>
        <section>teste</section>
      </Title>
      <ContentSection>
        <AsideMenu />
        <Content />
      </ContentSection>
    </Container>
  );
};

export default Reports;
