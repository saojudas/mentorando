import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ReactComponent as AdviserSVG } from '../../assets/adviser.svg';

import { Container, CardBody, CardInfo, TagArea } from './styles';

const CardUser: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const adviser = true;

  return (
    <Container>
      {adviser ? <AdviserSVG /> : <></>}
      <CardBody>
        <img
          src="https://avatars3.githubusercontent.com/u/39928763?s=460&u=4f646846555a7597d42a9685c053df562a57a779&v=4"
          alt="A Lenda"
        />
        <TagArea color={colors.secondaryLighter}>
          <div>
            <span>Tecnologia</span>
          </div>
        </TagArea>
      </CardBody>
      <CardInfo color={colors.primaryLighter}>
        <strong>Jhonatan da Costa</strong>
      </CardInfo>
    </Container>
  );
};

export default CardUser;
