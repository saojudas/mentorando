import React, { useContext, useRef, useCallback } from 'react';
import { ThemeContext } from 'styled-components';
import { toast } from 'react-toastify';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Link from '../../components/Link';

import api from '../../services/api';

import studentsImg1 from '../../assets/students1.svg';
import studentsImg2 from '../../assets/students2.svg';

import { Container, ContentSection, Content } from './styles';

const NewCandidate: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async () => {
    try {
      await api.post('/candidates');

      toast.success('Candidatura efetuada com sucesso!');
    } catch (err) {
      toast.error(
        'Ocorreu um erro ao tentar se candidatar, por favor tente novamente mais tarde!',
      );
    }
  }, []);

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

            <Button
              type="submit"
              color={title === 'light' ? colors.orange : colors.secondary}
            >
              Candidatar-se
            </Button>

            <Link
              to="/login"
              color={title === 'light' ? colors.orange : colors.secondary}
              outline
            >
              Voltar
            </Link>
          </Form>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default NewCandidate;
