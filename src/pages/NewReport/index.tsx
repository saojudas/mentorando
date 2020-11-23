import React, { useContext, useCallback, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import AsideMenu from '../../components/AsideMenu';
import Textarea from '../../components/Textarea';
import Input from '../../components/Input';
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
import Button from '../../components/Button';

const NewReport: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        members: Yup.string().required(
          'é necessário pelo menos um aluno para criar um relatório',
        ),
        subject: Yup.string().required('Assunto obrigatório'),
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
          <h1>Cadastrar novo relatório</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Item color={colors.primary}>
              <span>Nome dos alunos</span>
              <Input
                name="members"
                placeholder="Selecione os alunos que participaram da reunião."
              />
            </Item>

            <Item color={colors.primary}>
              <span>Assunto</span>
              <Textarea
                name="subject"
                placeholder="Digite uma descrição para o seu relatório"
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
                />
              </Item>
            </DateTimeInputsContainer>

            <ActionButons>
              <Button
                type="submit"
                color={title === 'light' ? colors.orange : colors.secondary}
              >
                Cadastrar
              </Button>

              <Button
                color={title === 'light' ? colors.orange : colors.secondary}
                outline
              >
                Cancelar
              </Button>
            </ActionButons>
          </Form>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default NewReport;
