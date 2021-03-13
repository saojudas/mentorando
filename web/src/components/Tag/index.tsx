import React from 'react';

import { Container } from './styles';

interface TagProps {
  name: string;
}

const Tag: React.FC<TagProps> = ({ name }) => {
  return (
    <Container>
      <strong>{name}</strong>
    </Container>
  );
};

export default Tag;
