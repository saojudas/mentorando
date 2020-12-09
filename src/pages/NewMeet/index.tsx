import React, {
  useContext,
  useCallback,
  useRef,
  useState,
  useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import AsideMenu from '../../components/AsideMenu';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import { createMeetRequest } from '../../store/modules/meet/actions';
import { Meet } from '../../store/modules/meet/interfaces';

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
  const { title, colors } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const formRef = useRef<FormHandles>(null);

  const [membersOptions, setMembersOptions] = useState();

  const handleSubmit = useCallback(
    async (data: Meet) => {
      try {
        const schema = Yup.object().shape({
          title: Yup.string().required('Título obrigatório!'),
          meet_link: Yup.string().required('Link do encontro obrigatório'),
          members_id: Yup.string().required(
            'é necessário pelo menos um membro para criar uma reunião',
          ),
          date_meet: Yup.string().required('Data obrigatório'),
          start_hour: Yup.string().required('Horário de início obrigatório'),
          end_hour: Yup.string().required('Horário de fim obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        formRef.current?.setErrors({});

        dispatch(createMeetRequest(data));
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [dispatch],
  );

  useEffect(() => {
    async function loadMembers() {
      const response = await api.get('users');

      const options = response.data.map((item: any) => {
        return {
          value: item.id,
          label: item.student ? item.student.name : item.teacher.name,
        };
      });

      setMembersOptions(options);
    }

    loadMembers();
  }, []);

  return (
    <Container>
      <Title>
        <h1>Início</h1>
        {/* <section>teste</section> */}
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

              <Input name="meet_link" placeholder="https://" />
            </Item>

            <Item color={colors.primary}>
              <span>Integrantes da reunião</span>

              <Select
                name="members_id"
                placeholder="Selecione os integrantes que participarão da reunião."
                options={membersOptions}
                isMulti
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

export default NewMeet;
