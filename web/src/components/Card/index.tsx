import React from 'react';

import { Container } from './styles';

interface CardProps {
  background: string;
  color: string;
  fontSize: number;
}

const Card: React.FC<CardProps> = ({
  background,
  color,
  fontSize,
  children,
}) => {
  return (
    <Container background={background} color={color} fontSize={fontSize}>
      {children}
    </Container>
  );
};

export default Card;
