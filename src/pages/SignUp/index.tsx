import React, { useContext, useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FaRegEyeSlash, FaMailBulk, FaRegEye } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

import landingImg from '../../assets/landing.png';

import {
  Container,
  Presentation,
  NewAccountContainer,
  UserTypeContainer,
  ActionButons,
} from './styles';

const SignUp: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleShowPassword = useCallback(
    () => setIsShowPassword(!isShowPassword),
    [isShowPassword],
  );
  const handleShowConfirmPassword = useCallback(
    () => setIsShowConfirmPassword(!isShowConfirmPassword),
    [isShowConfirmPassword],
  );

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        username: Yup.string()
          .required('Username obrigatório')
          .min(8, 'No mínimo 8 dígitos!'),
        name: Yup.string()
          .required('Nome de usuário obrigatório')
          .max(150, 'No máximo 150 dígitos!'),
        email: Yup.string()
          .email('Digite um e-mail válido!')
          .required('E-mail obrigatório!'),
        university: Yup.string().required('Universidade obrigatória'),
        registration: Yup.string().required('Matrícula obrigatória'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos!'),
        confirm_password: Yup.string().oneOf(
          [Yup.ref('password')],
          'Senha e Confirmação de senha não estão corretas',
        ),
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
        <NewAccountContainer>
          <h1>Cadastre-se</h1>

          <p>
            Crie sua conta gratuitamente e tenha acesso a todos os conteúdos
          </p>

          <Input name="username" placeholder="Defina um nome de usuário" />
          <Input name="name" placeholder="Seu nome completo" />
          <Input
            name="email"
            placeholder="Digite seu e-mail"
            icon={FaMailBulk}
          />
          <Input name="university" placeholder="Instituição de ensino" />
          <Input name="registration" placeholder="Matrícula" />
          <Input
            name="password"
            type={isShowPassword ? 'text' : 'password'}
            icon={isShowPassword ? FaRegEye : FaRegEyeSlash}
            placeholder="Digite sua senha"
            iconClick={handleShowPassword}
          />
          <Input
            name="confirm_password"
            type={isShowConfirmPassword ? 'text' : 'password'}
            icon={isShowConfirmPassword ? FaRegEye : FaRegEyeSlash}
            placeholder="Confirme sua senha"
            iconClick={handleShowConfirmPassword}
          />

          <UserTypeContainer>
            <Checkbox name="is_student" label="Sou Aluno" type="radio" />
            <Checkbox name="is_student" label="Sou Professor" type="radio" />
          </UserTypeContainer>

          <ActionButons>
            <Button type="submit" color={colors.primary}>
              Cadastrar
            </Button>
            <Button type="submit" color={colors.blue} outline>
              Login
            </Button>
          </ActionButons>
        </NewAccountContainer>
      </Form>
    </Container>
  );
};

export default SignUp;
