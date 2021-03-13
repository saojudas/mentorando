import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  disabled?: boolean;
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
  color: ${props =>
    props.theme.title === 'light'
      ? props.theme.colors.grayLight
      : props.theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 46px;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.6;
    `}

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
    width: 100%;
    color: ${props =>
      props.theme.title === 'light'
        ? props.theme.colors.black
        : props.theme.colors.white};

    &::placeholder {
      color: ${props =>
        props.theme.title === 'light'
          ? props.theme.colors.grayLight
          : shade(0.2, props.theme.colors.white)};
    }
  }

  svg:nth-of-type(1) {
    cursor: pointer;
  }

  svg:nth-of-type(2) {
    margin-left: 8px;
  }
`;

export const IconContainer = styled.div`
  background: transparent;
  width: 34px;
  height: 34px;
  border-radius: 8px;

  cursor: pointer;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${props =>
      props.theme.title === 'light' ? '#eee' : props.theme.colors.primary};
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-right: 4px;

  span {
    color: ${props => props.theme.colors.white} !important;
    background: ${props => props.theme.colors.red};

    &::before {
      border-color: ${props => props.theme.colors.red} transparent;
    }
  }
`;
