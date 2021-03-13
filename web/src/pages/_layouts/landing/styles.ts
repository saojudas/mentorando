import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  background: ${props => props.theme.colors.primary};
`;

export const Content = styled.div`
  padding: 60px 120px;

  height: 100%;
  display: flex;
`;
