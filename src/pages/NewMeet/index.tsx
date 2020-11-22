import React, { useContext, useCallback, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import AsideMenu from '../../components/AsideMenu';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';

import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  Title,
  ContentSection,
  Content,
  DateTimeInputsContainer,
  Item,
  ActionButons,
} from './styles';

const NewMeet: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('Título obrigatório!'),
        meet: Yup.string().required('Link do encontro obrigatório'),
        members: Yup.string().required(
          'é necessário pelo menos um membro para criar uma reunião',
        ),
        date_meet: Yup.string().required('Data obrigatório'),
        start_hour: Yup.string().required('Horário de início obrigatório'),
        end_hour: Yup.string().required('Horário de fim obrigatório'),
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
      <Title>
        <h1>Início</h1>
        <section>teste</section>
      </Title>
      <ContentSection>
        <AsideMenu />
        <Content>
          <h1>Marcar uma nova reunião</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Item color={colors.primary}>
              <span>Título</span>

              <Input name="title" placeholder="Título da reunião" />
            </Item>

            <Item color={colors.primary}>
              <span>Link do encontro</span>

              <Input name="meet" placeholder="https://" />
            </Item>

            <Item color={colors.primary}>
              <span>Integrantes da reunião</span>

              <Select
                name="members"
                placeholder="Selecione os integrantes que participarão da reunião."
              />
            </Item>

            <DateTimeInputsContainer>
              <Item color={colors.primary}>
                <span>Data do encontro</span>

                <DatePicker
                  name="date_meet"
                  placeholderText="01/01/2020"
                  dateFormat="dd/MM/yyyy"
                />
              </Item>

              <Item color={colors.primary}>
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
              </Item>

              <Item color={colors.primary}>
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
                  inputName="end_hour"
                />
              </Item>
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
        </Content>
      </ContentSection>
    </Container>
  );
};

export default NewMeet;
