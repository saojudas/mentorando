import React from 'react';

import AsideMenu from '../../components/AsideMenu';
import CardUser from '../../components/CardUser';

import { Container, Title, ContentSection, Content, Users } from './styles';

const Advisors: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>Início</h1>
        <section>teste</section>
      </Title>
      <ContentSection>
        <AsideMenu />
        <Content>
          <Users>
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
          </Users>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default Advisors;
