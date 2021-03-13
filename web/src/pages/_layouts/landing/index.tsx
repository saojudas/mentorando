import React from 'react';

import { Wrapper, Content } from './styles';

const LandingLayout: React.FC = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);

export default LandingLayout;
