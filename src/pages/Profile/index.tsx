import React, {
  useCallback,
  useRef,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSelector } from 'react-redux';

import { ThemeContext } from 'styled-components';

import { Form } from '@unform/web';
import { FormHandles, Scope } from '@unform/core';

import { IRootState } from '../../store';

import Avatar from '../../components/Avatar';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import AsideMenu from '../../components/AsideMenu';

import api from '../../services/api';

import { Area } from '../../store/modules/auth/interfaces';

import {
  Container,
  Title,
  ContentSection,
  Content,
  Item,
  ActionButons,
} from './styles';

const Profile: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);

  const profile = useSelector((state: IRootState) => state.user.profile);

  const formRef = useRef<FormHandles>(null);

  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );

  const handleSubmit = useCallback(() => {
    return null;
  }, []);

  useEffect(() => {
    async function loadAreas() {
      const response = await api.get<Area[]>('areas');

      const { data } = response;

      const areaOptions = data.map(area => ({
        value: area.id,
        label: area.name,
      }));

      setOptions(areaOptions);
    }

    loadAreas();
  }, []);

  return (
    <Container>
      <Title>
        <h1>Perfil</h1>
        {/* <section>teste</section> */}
      </Title>
      <ContentSection>
        <AsideMenu />

        <Content>
          <Form ref={formRef} initialData={profile} onSubmit={handleSubmit}>
            <Avatar />

            <Item>
              <span>Nome de usuário:</span>
              <Input name="username" placeholder="Digite seu username" />
            </Item>

            <Item>
              <span>Nome Completo:</span>
              <Scope path={`${profile.teacher ? 'teacher' : 'student'}`}>
                <Input name="name" placeholder="Digite seu nome completo " />
              </Scope>
            </Item>

            <Item>
              <span>Área</span>

              <Select
                name="area"
                placeholder="Selecione uma área"
                options={options}
              />
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
              <Scope path={`${profile.teacher ? 'teacher' : 'student'}`}>
                <Input name="university" placeholder="Instituição de ensino" />
              </Scope>
            </Item>

            {profile.student && (
              <Item>
                <span>Matrícula:</span>
                <Scope path="student">
                  <Input name="registration" placeholder="Matrícula" />
                </Scope>
              </Item>
            )}

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
