import styled from 'styled-components';
import { shade, lighten, darken } from 'polished';

interface ILinkProps {
  outline?: boolean;
  color: string;
}

export const Container = styled.div<ILinkProps>`
  a {
    min-width: 180px;

    background: ${props => (props.outline ? 'transparent' : props.color)};
    color: ${props => (props.outline ? props.color : props.theme.colors.white)};
    border: 1px solid ${props => props.color};

    padding: 8px 16px;
    border-radius: 4px;

    font-size: 18px;
    font-weight: bold;

    letter-spacing: 1px;
    text-transform: uppercase;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.4s;

    &:hover {
      color: ${props => props.outline && lighten(0.2, props.color)};
      background: ${props =>
        props.outline ? darken(0.8, props.color) : shade(0.2, props.color)};
    }
  }
`;
