import styled from 'styled-components';

interface ContainerProps {
  background: string;
  color: string;
  fontSize: number;
}

export const Container = styled.div<ContainerProps>`
  background: ${props => props.background};
  border-radius: 8px;

  padding: 16px;
  width: 90%;

  p {
    color: ${props => props.color};
    font-size: ${props => `${props.fontSize}px`};
    text-align: center;
  }
`;
