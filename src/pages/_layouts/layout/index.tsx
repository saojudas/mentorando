import React from 'react';

import { Wrapper, Content } from './styles';

const DefaultLayout: React.FC = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);

export default DefaultLayout;
