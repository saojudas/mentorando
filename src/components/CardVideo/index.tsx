import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEllipsisV } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';

import { Container, Thumbnail, CardInfo } from './styles';

interface CardVideoProps {
  id: string;
  title: string;
  thumbnail: string;
  preview?: string;
}

const CardVideo: React.FC<CardVideoProps> = ({ id, title, thumbnail }) => {
  const { colors } = useContext(ThemeContext);

  const [isHover, setIsHover] = useState(false);

  return (
    <Container>
      <Link to={`/video?video_id=${id}`}>
        <Thumbnail
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {!isHover ? (
            <img src={thumbnail} alt="Thumbnail" />
          ) : (
            <img src={thumbnail} alt="Preview" />
          )}
        </Thumbnail>
      </Link>

      <CardInfo>
        <div>
          <strong>{title}</strong>
        </div>

        <FaEllipsisV color={colors.black} size={26} />
      </CardInfo>
    </Container>
  );
};

export default CardVideo;
