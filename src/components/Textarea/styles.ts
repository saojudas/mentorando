import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${props =>
    props.theme.title === 'light'
      ? props.theme.colors.white
      : shade(0.2, props.theme.colors.black)};
  border-radius: 4px;
  border: 2px solid ${props => props.theme.colors.primaryLighter};
  padding: 8px 16px;
  width: 100%;
  color: ${props => props.theme.colors.grayLight};
  position: relative;
  margin-bottom: 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;

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

  textarea {
    background: transparent;
    flex: 1;
    border: 0;

    min-height: 100px;
    resize: vertical;

    color: ${props =>
      props.theme.title === 'light'
        ? props.theme.colors.black
        : props.theme.colors.white};

    &::placeholder {
      color: ${props =>
        props.theme.title === 'light'
          ? props.theme.colors.grayLight
          : shade(0.2, props.theme.colors.white)};
      padding-left: ${props => (props.isErrored ? '24px' : '0')};
    }
  }

  svg:nth-of-type(1) {
    cursor: pointer;
  }

  svg:nth-of-type(2) {
    margin-left: 8px;
  }

  > span {
    position: absolute;
    left: 0;
    bottom: -32px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-right: 4px;
  position: absolute;
  top: 8px;

  span {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.red};

    &::before {
      border-color: ${props => props.theme.colors.red} transparent;
    }
  }
`;
