import React, { useContext } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';

import { Container, Thumbnail, CardInfo, Avatar } from './styles';

const CardVideo: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Thumbnail>
        <img src="" alt="" />
      </Thumbnail>
      <CardInfo>
        <Avatar />
        <strong>Título do vídeo</strong>
        <FaEllipsisV color={colors.black} size={20} />
      </CardInfo>
    </Container>
  );
};

export default CardVideo;
