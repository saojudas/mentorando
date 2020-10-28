import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FaFacebookF, FaGoogle, FaMailBulk, FaRegEye } from 'react-icons/fa';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

import landingImg from '../../assets/landing.png';

import {
  Container,
  Presentation,
  AccessContainer,
  ActionButons,
  RememberMeContainer,
} from './styles';

const SignIn: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Presentation>
        <h1>Mentorando</h1>

        <p>
          Acolhimento e acompanhamento nos seus estudos de forma totalmente
          conectada.
        </p>

        <img src={landingImg} alt="Mentorando" />
      </Presentation>

      <Form onSubmit={handleSubmit}>
        <AccessContainer>
          <h1>Login</h1>

          <span>Acesse a plataforma inserindo e-mail e senha.</span>

          <ActionButons>
            <Button color={colors.primary}>
              <FaFacebookF color={colors.white} size={18} />
              Facebook
            </Button>

            <Button color={colors.blue}>
              <FaGoogle color={colors.white} size={18} />
              Google
            </Button>
          </ActionButons>

          <span>OU</span>

          <Input
            name="email"
            icon={FaMailBulk}
            placeholder="Digite seu e-mail"
          />

          <Input
            name="password"
            icon={FaRegEye}
            placeholder="Digite sua senha"
          />

          <RememberMeContainer>
            <Checkbox name="is_student" label="Lembrar-me" />

            <a href="/">Esqueçeu sua senha?</a>
          </RememberMeContainer>

          <ActionButons>
            <Button type="submit" color={colors.primary}>
              Entrar
            </Button>

            <Button color={colors.blue} outline>
              Cadastrar
            </Button>
          </ActionButons>
        </AccessContainer>
      </Form>
    </Container>
  );
};

export default SignIn;
