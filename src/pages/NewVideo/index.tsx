import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import AsideMenu from '../../components/AsideMenu';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Upload from '../../components/Upload';
import Link from '../../components/Link';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import {
  createVideoRequest,
  uploadThumbnailRequest,
} from '../../store/modules/video/actions';
import { Video } from '../../store/modules/video/interfaces';

import {
  Container,
  Title,
  ContentSection,
  Content,
  Item,
  ActionButons,
} from './styles';

const NewVideo: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const formRef = useRef<FormHandles>(null);

  const [hasNewTags, setHasNewTags] = useState<boolean>(false);
  const [areaOptions, setAreaOptions] = useState();
  const [tagOptions, setTagOptions] = useState();

  const toggleNewTags = useCallback(() => {
    setHasNewTags(!hasNewTags);
  }, [hasNewTags]);

  const handleUpload = useCallback(
    async (files: any) => {
      dispatch(uploadThumbnailRequest(files));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(
    async (data: Video) => {
      try {
        const schema = Yup.object().shape({
          title: Yup.string().required('Título obrigatório!'),
          video_link: Yup.string().required('Link do vídeo obrigatório!'),
          description: Yup.string().required(
            'Preencha uma breve descrição sobre seu vídeo!',
          ),
          tags_ids: Yup.string().required(
            'Selecione pelo menos uma tag para o seu vídeo ser categorizado!',
          ),
        });

        await schema.validate(data, { abortEarly: false });

        formRef.current?.setErrors({});

        dispatch(createVideoRequest(data));
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [dispatch],
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

  useEffect(() => {
    async function loadTags() {
      const response = await api.get('tags');

      const options = response.data.map((item: any) => {
        return {
          value: item.id,
          label: item.name,
        };
      });

      setTagOptions(options);
    }

    loadTags();
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
          <h1>Cadastrar um novo vídeo</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Item style={{ marginTop: 20 }}>
              <Upload
                onUpload={handleUpload}
                message="Arraste a thumbnail do seu vídeo aqui"
              />
            </Item>
            <Item>
              <span>Título</span>

              <Input name="title" placeholder="Título do vídeo" />
            </Item>

            <Item>
              <span>Link do seu vídeo</span>

              <Input name="video_link" placeholder="https://" />
            </Item>

            <Item>
              <span>Link do seu vídeo</span>

              <Textarea
                name="description"
                placeholder="Digite uma descrição para o seu vídeo"
              />
            </Item>

            <Item>
              <span>Área</span>

              <Select
                name="area_id"
                placeholder="Selecione a área do relacionada ao seu conteúdo."
                options={areaOptions}
              />
            </Item>

            <Item>
              <span>Tags</span>

              <Select
                name="tags_ids"
                placeholder="Selecione as tags dos assuntos relacionados ao seu conteúdo."
                options={tagOptions}
                isMulti
              />
            </Item>

            <Item enabled={hasNewTags} opacity={0.4}>
              <span>Novas tags</span>

              <div className="custom">
                <Input
                  name="new_tags"
                  placeholder="Separe por ponto e vírgula as tags que deseja cadastrar."
                  disabled={!hasNewTags}
                />

                <label>
                  <input type="checkbox" onClick={toggleNewTags} />
                  <span />
                </label>
              </div>
            </Item>

            <ActionButons>
              <Button
                type="submit"
                color={title === 'light' ? colors.orange : colors.secondary}
              >
                Cadastrar
              </Button>

              <Link
                to="/home"
                color={title === 'light' ? colors.orange : colors.secondary}
                outline
              >
                Cancelar
              </Link>
            </ActionButons>
          </Form>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default NewVideo;
