import React, { useContext, useState, useRef, useCallback } from 'react';
import { ThemeContext } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import AsideMenu from '../../components/AsideMenu';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Link from '../../components/Link';

import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  Title,
  ContentSection,
  Content,
  Item,
  ActionButons,
} from './styles';

const NewVideo: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const formRef = useRef<FormHandles>(null);

  const [hasNewTags, setHasNewTags] = useState<boolean>(false);

  const toggleNewTags = useCallback(() => {
    setHasNewTags(!hasNewTags);
  }, [hasNewTags]);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('Título obrigatório!'),
        video_link: Yup.string().required('Link do vídeo obrigatório!'),
        description: Yup.string().required(
          'Preencha uma breve descrição sobre seu vídeo!',
        ),
        tags: Yup.string().required(
          'Selecione pelo menos uma tag para o seu vídeo ser categorizado!',
        ),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current?.setErrors({});
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  const options = [
    { value: 'node', label: 'Node.js' },
    { value: 'react', label: 'React JS' },
    { value: 'react-native', label: 'React Native' },
  ];

  return (
    <Container>
      <Title>
        <h1>Início</h1>
        <section>teste</section>
      </Title>
      <ContentSection>
        <AsideMenu />
        <Content>
          <h1>Cadastrar um novo vídeo</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
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
              <span>Tags</span>

              <Select
                name="tags"
                placeholder="Selecione as tags dos assuntos relacionados ao seu conteúdo."
                options={options}
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

            <Item enabled={hasNewTags} opacity={0.4}>
              <span>Relacione a área correlacionada de suas novas tags</span>

              <Select
                name="tags"
                placeholder="Selecione as áreas de correlação de suas tags."
                options={options}
                disabled={!hasNewTags}
              />
            </Item>

            <ActionButons>
              <Button type="submit" color={colors.orange}>
                Cadastrar
              </Button>

              <Link to="/home" color={colors.orange} outline>
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
