import React, { useContext, useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import {
  FaFacebookF,
  FaRegEyeSlash,
  FaGoogle,
  FaMailBulk,
  FaRegEye,
} from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

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

  const [isShow, setIsShow] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleShowPassword = useCallback(() => setIsShow(!isShow), [isShow]);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido!')
          .required('E-mail obrigatório!'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos!'),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current?.setErrors({});
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

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

      <Form ref={formRef} onSubmit={handleSubmit}>
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
            type={isShow ? 'text' : 'password'}
            icon={isShow ? FaRegEye : FaRegEyeSlash}
            placeholder="Digite sua senha"
            iconClick={handleShowPassword}
          />

          <RememberMeContainer>
            <Checkbox name="is_student" label="Lembrar-me" />

            <Link to="/forgot-password">Esqueçeu sua senha?</Link>
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