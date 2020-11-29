import React, { useState, useEffect } from 'react';

import { AxiosResponse } from 'axios';
import api from '../../services/api';

import AsideMenu from '../../components/AsideMenu';
import CardVideo from '../../components/CardVideo';

import { Container, Title, ContentSection, Videos } from './styles';
import { Video } from '../../store/modules/video/interfaces';

const Home: React.FC = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadVideos() {
      const response: AxiosResponse = await api.get('videos');

      setVideos(response.data);
    }

    loadVideos();
  }, []);

  return (
    <Container>
      <Title>
        <h1>Início</h1>
        <section>teste</section>
      </Title>
      <ContentSection>
        <AsideMenu />
        <Videos>
          {videos.map((video: Video) => (
            <CardVideo
              key={String(video.id)}
              id={video.id}
              title={video.title}
              thumbnail={video.thumbnail?.url || ''}
            />
          ))}
        </Videos>
      </ContentSection>
    </Container>
  );
};

export default Home;
