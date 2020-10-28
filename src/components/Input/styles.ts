import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.white};
  border-radius: 4px;
  border: 2px solid ${props => props.theme.colors.primaryLighter};
  padding: 8px 16px;
  width: 100%;
  color: ${props => props.theme.colors.grayLight};

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 32px;
  }

  &:hover {
    box-shadow: inset 0 0 1em transparent,
      0 0 0.4em ${props => props.theme.colors.primary};
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${props.theme.colors.red};
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${props.theme.colors.primary};
      border-color: ${props.theme.colors.primary};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${props.theme.colors.primary};
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: ${props => props.theme.colors.black};

    &::placeholder {
      color: ${props => props.theme.colors.grayLight};
    }
  }

  svg:nth-of-type(1) {
    margin-right: 8px;
  }

  svg:nth-of-type(2) {
    margin-left: 8px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-right: 4px;

  span {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.red};

    &::before {
      border-color: ${props => props.theme.colors.red} transparent;
    }
  }
`;
