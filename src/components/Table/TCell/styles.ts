import styled from 'styled-components';

export const Td = styled.td`
  padding: 0 16px;

  background: ${props => props.theme.colors.primary};

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:hover {
    background: ${props => props.theme.colors.primaryLight};
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    position: relative;

    &:before {
      content: '';
      width: 8px;
      height: 100%;

      background: ${props => props.theme.colors.secondary};
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;

      position: absolute;
      left: 0;
      top: 0;
    }
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  span {
    color: ${props => props.theme.colors.white};
  }
`;
