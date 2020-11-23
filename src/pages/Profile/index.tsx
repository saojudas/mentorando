import React, { useCallback, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from 'styled-components';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import AsideMenu from '../../components/AsideMenu';
import Select from '../../components/Select';

import { ReactComponent as EditSVG } from '../../assets/edit.svg';

import {
  Container,
  Title,
  ContentSection,
  Content,
  UserPhoto,
  Item,
  ActionButons,
} from './styles';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

const Profile: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    return null;
  }, []);

  const options = [
    { value: 'tecnology', label: 'Tecnologia' },
    { value: 'lawyer', label: 'Direito' },
    { value: 'biology', label: 'Biologia' },
  ];

  return (
    <Container>
      <Title>
        <h1>Perfil</h1>
        <section>teste</section>
      </Title>
      <ContentSection>
        <AsideMenu />
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <UserPhoto>
              <img
                src="https://avatars3.githubusercontent.com/u/39928763?s=460&u=4f646846555a7597d42a9685c053df562a57a779&v=4"
                alt="A Lenda"
              />
              <Link to="/home">
                <EditSVG />
              </Link>
            </UserPhoto>

            <Item>
              <span>Nome de usuário:</span>
              <Input name="username" placeholder="Digite seu username" />
            </Item>

            <Item>
              <span>Nome Completo:</span>
              <Input name="name" placeholder="Digite seu nome completo " />
            </Item>

            <Item>
              <span>Tags</span>

              <Select name="area" placeholder="Tecnologia" options={options} />
            </Item>

            <Item>
              <span>E-Mail:</span>
              <Input name="email" placeholder="Digite seu e-mail" />
            </Item>

            <Item>
              <span>Descrição</span>
              <Textarea
                name="description"
                placeholder="Digite uma descrição para o seu relatório"
              />
            </Item>

            <Item>
              <span>Instituição de ensino:</span>
              <Input name="university" placeholder="Instituição de ensino" />
            </Item>

            <Item>
              <span>Matrícula:</span>
              <Input name="registration" placeholder="Matrícula" />
            </Item>

            <ActionButons>
              <Button
                type="submit"
                color={title === 'light' ? colors.orange : colors.secondary}
              >
                Salvar
              </Button>
            </ActionButons>
          </Form>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default Profile;
