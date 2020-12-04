import React from 'react';

import { ReactComponent as AdviserSVG } from '../../assets/adviser.svg';
import defaultAvatar from '../../assets/avatar-default.png';

import { Container, CardBody, CardInfo, TagArea } from './styles';

interface CardUser {
  name: string;
  area?: string;
  avatar?: string;
}

const CardUser: React.FC<CardUser> = ({ name, area, avatar }) => {
  const adviser = true;

  return (
    <Container>
      {adviser && <AdviserSVG />}

      <CardBody>
        <img src={avatar || defaultAvatar} alt={`Foto de ${name}`} />

        <TagArea>
          <div>
            <span>{area}</span>
          </div>
        </TagArea>
      </CardBody>

      <CardInfo>
        <strong>{name}</strong>
      </CardInfo>
    </Container>
  );
};

export default CardUser;
