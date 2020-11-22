import React, { useState, useCallback } from 'react';

import Iframe from 'react-iframe';

import AsideMenu from '../../components/AsideMenu';
import Tag from '../../components/Tag';

import {
  Container,
  Title,
  ContentSection,
  Content,
  FrameVideo,
  Description,
  Tags,
} from './styles';

const Video: React.FC = () => {
  const [isTheater, setIsTheater] = useState<boolean>(true);

  const toggleTheater = useCallback(() => {
    setIsTheater(!isTheater);
  }, [isTheater]);

  return (
    <Container>
      <ContentSection>
        {isTheater && <AsideMenu />}
        <Content isTheater={isTheater}>
          {isTheater && (
            <Title>
              <h1>
                O último Code/Drops! Script que calcula horas de vídeo |
                Code/Drops #68
              </h1>
            </Title>
          )}
          <FrameVideo>
            <button type="button" onClick={toggleTheater}>
              MODO TEATRO
            </button>
            <Iframe
              url="https://www.youtube.com/embed/faekjlZuTFA"
              width="100%"
              height="664px"
              allow="fullscreen"
            />
          </FrameVideo>
          <Description>
            <h3>Descrição</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              consequuntur dolores accusamus voluptate. Iure, a, blanditiis
              dolore sapiente ipsa iste numquam, quisquam non neque corporis
              quidem sunt quis expedita delectus.
            </p>
          </Description>
          <Tags>
            <Tag name="React JS" />
            <Tag name="Node JS" />
            <Tag name="Docker" />
          </Tags>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default Video;
