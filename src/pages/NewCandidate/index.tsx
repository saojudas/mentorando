import React, { useContext, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Link from '../../components/Link';

import { IRootState } from '../../store';

import studentsImg1 from '../../assets/students1.svg';
import studentsImg2 from '../../assets/students2.svg';

import { Container, ContentSection, Content } from './styles';

const NewCandidate: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const profile = useSelector((state: IRootState) => state.user.profile);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async () => {
    console.log(profile);
  }, [profile]);

  return (
    <Container>
      <ContentSection>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Quero ser um Conselheiro</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eros quam, mattis eget neque a, tristique pretium ex. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas.
            </p>

            <img src={studentsImg1} alt="Estudantes" />

            <p>
              Aliquam molestie venenatis risus non mollis. Integer ipsum eros,
              finibus nec enim at, rutrum congue felis. Proin semper risus non
              mi rhoncus luctus. Praesent scelerisque vehicula tempor. Donec
              viverra nisl a porta placerat. Donec convallis feugiat massa, sit
              amet malesuada odio ullamcorper non.
            </p>

            <img src={studentsImg2} alt="Estudantes" />

            <p>
              Vivamus commodo nunc leo. Pellentesque id diam eget mauris lacinia
              feugiat. Suspendisse tincidunt interdum feugiat. Pellentesque
              porta neque quis diam facilisis malesuada. Cras luctus eget ipsum
              a lobortis. Nunc diam risus, faucibus et ultrices vel, posuere vel
              libero. Cras facilisis libero sed neque consectetur laoreet. Donec
              pulvinar sit amet metus in scelerisque.
            </p>

            <Button type="submit" color={colors.primary}>
              Candidatar-se
            </Button>

            <Link to="/login" color={colors.primary} outline>
              Voltar
            </Link>
          </Form>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default NewCandidate;
