import React, { useState, useCallback, useEffect } from 'react';
import Iframe from 'react-iframe';

import useQueryParams from '../../hooks/useQueryParams';

import {
  Video as IVideo,
  Tag as ITag,
} from '../../store/modules/video/interfaces';

import api from '../../services/api';

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
  const [video, setVideo] = useState<IVideo>();

  const [isTheater, setIsTheater] = useState<boolean>(true);

  const video_id = useQueryParams('video_id');

  const toggleTheater = useCallback(() => {
    setIsTheater(!isTheater);
  }, [isTheater]);

  useEffect(() => {
    async function loadVideo() {
      const response = await api.get(`videos/${video_id}`);

      const { video_link } = response.data;

      response.data.key = video_link.substr(
        video_link.search('v=') + 2,
        video_link.length,
      );

      setVideo(response.data);
    }

    loadVideo();
  }, [video_id]);

  return (
    <Container>
      <ContentSection>
        {isTheater && <AsideMenu />}

        <Content isTheater={isTheater}>
          {isTheater && (
            <Title>
              <h1>{video?.title}</h1>
            </Title>
          )}

          <FrameVideo>
            <button type="button" onClick={toggleTheater}>
              MODO TEATRO
            </button>

            <Iframe
              url={`https://www.youtube.com/embed/${video?.key}`}
              width="100%"
              height={`${window.innerHeight - 160}px`}
              allow="fullscreen"
            />
          </FrameVideo>

          <Description>
            <h3>Descrição</h3>

            <p style={{ whiteSpace: 'break-spaces' }}>{video?.description}</p>
          </Description>

          <Tags>
            {video?.tags.map((tag: ITag) => (
              <Tag key={tag.id} name={tag.name} />
            ))}
          </Tags>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default Video;
