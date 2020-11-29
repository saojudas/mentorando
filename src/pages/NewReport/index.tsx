import React, {
  useContext,
  useCallback,
  useRef,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import AsideMenu from '../../components/AsideMenu';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import Select from '../../components/Select';
import DatePicker from '../../components/DatePicker';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

import { createReportRequest } from '../../store/modules/report/actions';
import { Report } from '../../store/modules/report/interfaces';

import {
  Container,
  Title,
  ContentSection,
  Content,
  DateTimeInputsContainer,
  Item,
  ActionButons,
} from './styles';

const NewReport: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const formRef = useRef<FormHandles>(null);

  const [studentsOptions, setStudentsOptions] = useState();

  const handleSubmit = useCallback(
    async (data: Report) => {
      try {
        const schema = Yup.object().shape({
          students_ids: Yup.string().required(
            'é necessário pelo menos um aluno para criar um relatório',
          ),
          subject_matter: Yup.string().required('Assunto obrigatório'),
          report_date: Yup.string().required('Data obrigatório'),
          start_hour: Yup.string().required('Horário de início obrigatório'),
          end_hour: Yup.string().required('Horário de fim obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        formRef.current?.setErrors({});

        dispatch(createReportRequest(data));
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [dispatch],
  );

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      const options = response.data.map((item: any) => {
        return { value: item.id, label: item.name };
      });

      setStudentsOptions(options);
    }

    loadStudents();
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

              <Select
                name="students_ids"
                placeholder="Selecione o aluno que participou."
                options={studentsOptions}
              />
            </Item>

            <Item color={colors.primary}>
              <span>Assunto</span>

              <Textarea
                name="subject_matter"
                placeholder="Digite uma descrição para o seu relatório"
              />
            </Item>

            <DateTimeInputsContainer>
              <Item color={colors.primary}>
                <span>Data do encontro</span>

                <DatePicker
                  name="report_date"
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
