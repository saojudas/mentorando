import React, { useContext, useCallback, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';
import DatePicker from '../../components/DatePicker';
import getValidationErrors from '../../utils/getValidationErrors';

import {
  ActionButons,
  Container,
  DateTimeInputsContainer,
  InputsContainer,
} from './styles';
import Button from '../../components/Button';

const Meet: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const formRef = useRef<FormHandles>(null);

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
    <Container color={colors.white}>
      <h1>Marcar uma nova reunião</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <InputsContainer color={colors.primary}>
          <span>Título</span>
          <Input name="title" placeholder="Título da reunião" />
        </InputsContainer>

        <InputsContainer color={colors.primary}>
          <span>Link do encontro</span>
          <Input name="meet" placeholder="https://" />
        </InputsContainer>

        <InputsContainer color={colors.primary}>
          <span>Integrantes da reunião</span>
          <Input
            name="members"
            placeholder="Selecione os integrantes que participarão da reunião."
          />
        </InputsContainer>

        <DateTimeInputsContainer>
          <InputsContainer color={colors.primary}>
            <span>Data do encontro</span>
            <DatePicker
              name="date_meet"
              placeholderText="01/01/2020"
              dateFormat="dd/MM/yyyy"
            />
          </InputsContainer>

          <InputsContainer color={colors.primary}>
            <span>Horário de Inicio</span>
            <DatePicker
              name="start_hour"
              placeholderText="20:00"
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              timeFormat="HH:mm"
              dateFormat="HH:mm"
            />
          </InputsContainer>

          <InputsContainer color={colors.primary}>
            <span>horário de Fim</span>
            <DatePicker
              name="end_hour"
              placeholderText="21:00"
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              timeFormat="HH:mm"
              dateFormat="HH:mm"
            />
          </InputsContainer>
        </DateTimeInputsContainer>

        <ActionButons>
          <Button type="submit" color={colors.orange}>
            Cadastrar
          </Button>

          <Button color={colors.orange} outline>
            Cancelar
          </Button>
        </ActionButons>
      </Form>
    </Container>
  );
};

export default Meet;
