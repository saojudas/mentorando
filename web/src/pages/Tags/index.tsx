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
import Select from '../../components/Select';
import Button from '../../components/Button';
import Table from '../../components/Table';
import { TableColumn } from '../../components/Table/THead';

import api from '../../services/api';

import { createTagRequest } from '../../store/modules/tag/actions';
import { Tag } from '../../store/modules/tag/interfaces';

import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  Title,
  ContentSection,
  Content,
  TagsTitle,
  TagsList,
} from './styles';

const Tags: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const [tags, setTags] = useState([]);
  const [reload, setReload] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [areaOptions, setAreaOptions] = useState();

  const formRef = useRef<FormHandles>(null);

  const columns: TableColumn[] = [
    { label: 'Id', property: 'id', icon: FaHotel },
    { label: 'Nome', property: 'name', icon: FaHashtag },
    { label: 'Área', property: 'area.name', icon: FaHashtag },
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
    async function loadTags() {
      await delay(2000);

      const response = await api.get('tags');

      setTags(response.data);
    }

    loadTags();
  }, [reload]);

  const handleSubmit = useCallback(
    async (formData: Tag) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Campo nome obrigatório!'),
          area_id: Yup.string().required('Selecione uma área!'),
        });

        await schema.validate(formData, { abortEarly: false });

        formRef.current?.setErrors({});

        dispatch(createTagRequest(formData));

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

  useEffect(() => {
    async function loadAreas() {
      const response = await api.get('areas');

      const options = response.data.map((item: any) => {
        return {
          value: item.id,
          label: item.name,
        };
      });

      setAreaOptions(options);
    }

    loadAreas();
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
          <Modal
            show={modalShow}
            title="Cadastrar nova tag"
            mode="dark"
            size="sm"
            toggle={toggleShowModal}
            onSubmit={handleSubmit}
            footer={modalFooter}
            formRef={formRef}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ width: '80%', margin: '8px auto' }}>
                <Input
                  name="name"
                  placeholder="Digite um nome para a nova tag"
                />
              </div>

              <div style={{ width: '80%', margin: '8px auto' }}>
                <Select
                  name="area_id"
                  placeholder="Selecione a área do relacionada ao seu conteúdo."
                  options={areaOptions}
                />
              </div>
            </div>
          </Modal>

          <TagsTitle>
            <h2>Tags</h2>

            <Button
              type="button"
              color={colors.primary}
              onClick={toggleShowModal}
            >
              Novo
            </Button>
          </TagsTitle>

          <TagsList>
            <Table columns={columns} data={tags} />
          </TagsList>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default Tags;
