import React, { useContext, useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as ReactLink } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FaRegEyeSlash, FaMailBulk, FaRegEye } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Link from '../../components/Link';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import Success from '../../components/Success';

import landingImg from '../../assets/landing.png';
import logoImg from '../../assets/logo.svg';

import { signUpRequest } from '../../store/modules/auth/actions';
import { User } from '../../store/modules/auth/interfaces';

import {
  Container,
  Presentation,
  NewAccountContainer,
  UserTypeContainer,
  ActionButons,
} from './styles';

interface RadioOption {
  id: string;
  value: string;
  label: string;
}

const SignUp: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const [isSuccess, setIsSuccess] = useState(false);
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

  const radioOptions: RadioOption[] = [
    { id: 'is_student', value: 'true', label: 'Sou aluno' },
    { id: 'is_teacher', value: 'false', label: 'Sou professor' },
  ];

  const handleSubmit = useCallback(
    async (data: User) => {
      try {
        const schema = Yup.object().shape({
          username: Yup.string().required('Username obrigatório'),
          name: Yup.string()
            .required('Nome de usuário obrigatório')
            .max(150, 'No máximo 150 dígitos!'),
          email: Yup.string()
            .email('Digite um e-mail válido!')
            .required('E-mail obrigatório!'),
          university: Yup.string().required('Universidade obrigatória'),
          registration: Yup.string().required('Matrícula obrigatória'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos!'),
          confirm_password: Yup.string()
            .required('Confirme sua senha')
            .oneOf(
              [Yup.ref('password')],
              'Senha e Confirmação de senha não estão corretas',
            ),
          is_student: Yup.boolean().required(),
        });

        await schema.validate(data, { abortEarly: false });

        formRef.current?.setErrors({});

        dispatch(signUpRequest(data));

        setIsSuccess(true);
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [dispatch],
  );

  return (
    <Container>
      <Presentation>
        <ReactLink to="/">
          <img src={logoImg} alt="Mentorando" />
        </ReactLink>

        <p>
          Acolhimento e acompanhamento nos seus estudos de forma totalmente
          conectada.
        </p>

        <img src={landingImg} alt="Mentorando" />
      </Presentation>

      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={{ checkbox: ['is_student'] }}
      >
        <NewAccountContainer>
          {isSuccess ? (
            <>
              <h1>Sucesso!</h1>

              <p>Conta criada com sucesso.</p>

              <Success height={450} width={450} />
            </>
          ) : (
            <>
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
                <Checkbox
                  name="is_student"
                  options={radioOptions}
                  type="radio"
                />
              </UserTypeContainer>

              <ActionButons>
                <Button type="submit" color={colors.primary}>
                  Cadastrar
                </Button>

                <Link to="/login" color={colors.blue}>
                  Login
                </Link>
              </ActionButons>
            </>
          )}
        </NewAccountContainer>
      </Form>
    </Container>
  );
};

export default SignUp;
