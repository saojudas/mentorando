import React, { useState, useEffect, useContext } from 'react';

import { ThemeContext } from 'styled-components';
import api from '../../services/api';

import AsideMenu from '../../components/AsideMenu';
import CardVideo from '../../components/CardVideo';
import Card from '../../components/Card';

import { Video } from '../../store/modules/video/interfaces';

import { Container, Title, ContentSection, Videos } from './styles';

const Home: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadVideos() {
      const response = await api.get('videos');

      setVideos(response.data);
    }

    loadVideos();
  }, []);

  return (
    <Container>
      <Title>
        <h1>Início</h1>
        {/* <section>teste</section> */}
      </Title>
      <ContentSection>
        <AsideMenu />
        <Videos>
          {videos.length >= 1 ? (
            videos.map((video: Video) => (
              <CardVideo
                key={String(video.id)}
                id={video.id}
                title={video.title}
                thumbnail={video.thumbnail?.url || ''}
              />
            ))
          ) : (
            <Card
              background={colors.grayDark}
              color={colors.white}
              fontSize={26}
            >
              <p>Nenhum vídeo encontrado!</p>
            </Card>
          )}
        </Videos>
      </ContentSection>
    </Container>
  );
};

export default Home;
