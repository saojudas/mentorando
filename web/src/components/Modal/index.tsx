import React, { useContext } from 'react';
import { FiX } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { ThemeContext } from 'styled-components';

import Button from '../Button';

import { Container, Background, Content, Header, Body, Footer } from './styles';

interface ModalProps {
  show: boolean;
  title: string;
  mode: 'light' | 'dark';
  size: 'sm' | 'md' | 'lg' | 'xl';
  toggle(): void;
  onSubmit(data: any): void;
  footer: React.ReactNode;
  formRef: React.RefObject<FormHandles>;
}

const Modal: React.FC<ModalProps> = ({
  show,
  title,
  mode,
  size,
  toggle,
  onSubmit,
  footer,
  formRef,
  children,
}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container show={show}>
      <Background show={show} onClick={toggle} />

      <Content mode={mode} size={size}>
        <Form ref={formRef} onSubmit={onSubmit}>
          <Header>
            <h1>{title}</h1>

            <button type="button" onClick={toggle}>
              <FiX size={26} />
            </button>
          </Header>

          <Body>{children}</Body>

          <Footer>
            {footer}
            <Button color={colors.primary} outline onClick={toggle}>
              Voltar
            </Button>
          </Footer>
        </Form>
      </Content>
    </Container>
  );
};

export default Modal;
