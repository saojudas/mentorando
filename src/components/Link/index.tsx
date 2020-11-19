import React from 'react';
import Ink from 'react-ink';
import { Link as ReactLink } from 'react-router-dom';

import { Container } from './styles';

interface LinkProps {
  to: string;
  color: string;
  outline?: boolean;
}

const Link: React.FC<LinkProps> = ({ to, color, outline, children }) => {
  return (
    <Container color={color} outline={outline}>
      <ReactLink to={to}>
        {children}
        <Ink />
      </ReactLink>
    </Container>
  );
};

export default Link;
