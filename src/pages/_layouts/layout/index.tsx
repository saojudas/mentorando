import React from 'react';

import Header from '../../../components/Header';

import { Wrapper, Content } from './styles';

const DefaultLayout: React.FC = ({ children }) => (
  <Wrapper>
    <Header />
    <Content>{children}</Content>
  </Wrapper>
);

export default DefaultLayout;
