import React from 'react';
import { Link } from 'react-router-dom';

import AsideMenu from '../../components/AsideMenu';
import CardUser from '../../components/CardUser';

import { Container, Title, ContentSection, Content, Users } from './styles';

const Students: React.FC = () => {
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
            <Link to={`/user/${1}`}>
              <CardUser />
            </Link>
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

export default Students;
