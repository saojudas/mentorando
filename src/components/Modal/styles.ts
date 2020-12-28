import styled, { css } from 'styled-components';
import { darken } from 'polished';

const states = {
  show: css`
    opacity: 1;
    visibility: visible;
  `,
  hide: css`
    opacity: 0;
    visibility: hidden;
  `,
};

export const Container = styled.div<{ show: boolean }>`
  z-index: 7777777;

  ${props => (props.show ? states.show : states.hide)};

  position: absolute;
  top: 0;
  left: 0;

  padding: 80px;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const backgroundStates = {
  show: css`
    opacity: 0.5;
    visibility: visible;
  `,
  hide: css`
    opacity: 0;
    visibility: hidden;
  `,
};

export const Background = styled.div<{ show: boolean }>`
  background: ${props => darken(0.6, props.theme.colors.black)};

  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 7777777;

  ${props => (props.show ? backgroundStates.show : backgroundStates.hide)};

  transition: opacity 200ms;
`;

const mode = {
  light: css`
    color: ${props => props.theme.colors.black};
    background: ${props => props.theme.colors.white};
  `,
  dark: css`
    color: ${props => props.theme.colors.white};
    background: ${props => darken(0.8, props.theme.colors.white)};
  `,
};

const size = {
  sm: css`
    width: 30vw;
  `,
  md: css`
    width: 50vw;
  `,
  lg: css`
    width: 70vw;
  `,
  xl: css`
    width: 90vw;
  `,
};

interface ContentProps {
  mode: 'light' | 'dark';
  size: 'sm' | 'md' | 'lg' | 'xl';
}

export const Content = styled.div<ContentProps>`
  color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 8px;

  position: absolute;

  z-index: 7777777;

  ${props => size[props.size]};

  header,
  main,
  footer {
    ${props => mode[props.mode]}
  }
`;

export const Header = styled.header`
  color: inherit;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid ${props => props.theme.colors.primary};

  width: 100%;

  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: inherit;
  }

  button {
    color: inherit;
  }
`;

export const Body = styled.main`
  width: 100%;

  padding: 16px;

  display: flex;
`;

export const Footer = styled.footer`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top: 1px solid ${props => props.theme.colors.primary};

  width: 100%;

  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: inherit;
  }
`;
