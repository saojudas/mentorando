import React from 'react';
import { useParams } from 'react-router-dom';

import AsideMenu from '../../components/AsideMenu';

import { Container, Title, ContentSection, Content } from './styles';

interface ParamsProps {
  id?: string;
}

const User: React.FC = () => {
  const params = useParams<ParamsProps>();

  return (
    <Container>
      <Title>
        <h1>Início</h1>
        <section>teste</section>
      </Title>
      <ContentSection>
        <AsideMenu />
        <Content>
          <h1>
            User
            {params.id}
          </h1>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default User;
