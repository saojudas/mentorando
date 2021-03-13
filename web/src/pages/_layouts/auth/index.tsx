import React from 'react';

import { Wrapper, Content } from './styles';

const AuthLayout: React.FC = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);

export default AuthLayout;
