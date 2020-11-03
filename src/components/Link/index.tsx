import React from 'react';
import Ink from 'react-ink';

import { Ancor } from './styles';

interface LinkProps {
  to: string;
  color: string;
  outline?: boolean;
}

const Link: React.FC<LinkProps> = ({ to, color, outline, children }) => {
  return (
    <Ancor to={to} color={color} outline={outline}>
      {children}
      <Ink />
    </Ancor>
  );
};

export default Link;
