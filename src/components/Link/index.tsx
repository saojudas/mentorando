import React from 'react';
import Ink from 'react-ink';
import { Link as ReactLink } from 'react-router-dom';

import { Container } from './styles';

interface LinkProps {
  to: string;
  color: string;
  outline?: boolean;
  amount?: number;
  func?: 'lighten' | 'darken';
}

const Link: React.FC<LinkProps> = ({
  to,
  color,
  outline,
  amount,
  func,
  children,
}) => {
  return (
    <Container color={color} outline={outline} amount={amount} func={func}>
      <ReactLink to={to}>
        {children}
        <Ink />
      </ReactLink>
    </Container>
  );
};

export default Link;
