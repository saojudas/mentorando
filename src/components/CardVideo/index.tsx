import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEllipsisV } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';

import { Container, Thumbnail, CardInfo } from './styles';

interface CardVideoProps {
  title: string;
  thumbnail: string;
  preview: string;
}

const CardVideo: React.FC<CardVideoProps> = ({ title, thumbnail, preview }) => {
  const { colors } = useContext(ThemeContext);

  const [isHover, setIsHover] = useState(false);

  return (
    <Container>
      <Link to="/video">
        <Thumbnail
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {!isHover ? (
            <img src={thumbnail} alt="Thumbnail" />
          ) : (
            <img src={preview} alt="Preview" />
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
