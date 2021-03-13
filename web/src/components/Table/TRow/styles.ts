import styled from 'styled-components';

interface TrProps {
  isOperationBuy?: string;
}

export const Tr = styled.tr<TrProps>`
  height: 48px;

  cursor: pointer;

  transition: background 200ms;

  &:hover {
    background: red;
  }
`;
