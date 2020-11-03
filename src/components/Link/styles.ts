import styled from 'styled-components';
import { shade, lighten } from 'polished';

import { Link as ReactLink } from 'react-router-dom';

interface ILinkProps {
  outline?: boolean;
  color: string;
}

export const Ancor = styled(ReactLink)<ILinkProps>`
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
    background: ${props => !props.outline && shade(0.2, props.color)};
  }
`;
