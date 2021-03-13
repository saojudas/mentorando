import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { FaHotel, FaHashtag, FaRegCalendarAlt } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { delay } from 'redux-saga/effects';
import * as Yup from 'yup';

import AsideMenu from '../../components/AsideMenu';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Table from '../../components/Table';
import { TableColumn } from '../../components/Table/THead';

import api from '../../services/api';

import { createAreaRequest } from '../../store/modules/area/actions';
import { Area } from '../../store/modules/area/interfaces';

import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  Title,
  ContentSection,
  Content,
  AreasTitle,
  AreasList,
} from './styles';

const Areas: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const [areas, setAreas] = useState([]);
  const [reload, setReload] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);

  const formRef = useRef<FormHandles>(null);

  const columns: TableColumn[] = [
    { label: 'Id', property: 'id', icon: FaHotel },
    { label: 'Nome', property: 'name', icon: FaHashtag },
    {
      label: 'Cadastrado em',
      property: 'created_at',
      type: 'datetime',
      icon: FaRegCalendarAlt,
    },
    {
      label: 'Atualizado em',
      property: 'updated_at',
      type: 'datetime',
      icon: FaRegCalendarAlt,
    },
  ];

  const toggleShowModal = useCallback(() => {
    setModalShow(!modalShow);
  }, [modalShow]);

  useEffect(() => {
    console.log('Executou Reload');
    async function loadAreas() {
      const response = await api.get('areas');

      setAreas(response.data);
    }

    loadAreas();
  }, [reload]);

  const handleSubmit = useCallback(
    async (formData: Area) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Campo nome obrigatório!'),
        });

        await schema.validate(formData, { abortEarly: false });

        formRef.current?.setErrors({});

        dispatch(createAreaRequest(formData));

        delay(3000);

        setReload(!reload);
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [dispatch, reload],
  );

  const modalFooter = (
    <Button type="submit" color={colors.primary}>
      Cadastrar
    </Button>
  );

  return (
    <Container>
      <Title>
        <h1>Início</h1>
        {/* <section>teste</section> */}
      </Title>
      <ContentSection>
        <AsideMenu />
        <Content>
          <Modal
            show={modalShow}
            title="Cadastrar nova área"
            mode="dark"
            size="sm"
            toggle={toggleShowModal}
            onSubmit={handleSubmit}
            footer={modalFooter}
            formRef={formRef}
          >
            <div style={{ width: '80%', margin: '0 auto' }}>
              <Input
                name="name"
                placeholder="Digite um nome para a nova área"
              />
            </div>
          </Modal>

          <AreasTitle>
            <h2>Areas</h2>

            <Button
              type="button"
              color={colors.primary}
              onClick={toggleShowModal}
            >
              Novo
            </Button>
          </AreasTitle>
          <AreasList>
            <Table columns={columns} data={areas} />
          </AreasList>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default Areas;
