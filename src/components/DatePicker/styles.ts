import styled, { css } from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
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

  height: 46px;

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

  .picker {
    background: transparent;
    flex: 1;
    border: 0;
    color: ${props => props.theme.colors.black};

    &::placeholder {
      color: ${props => props.theme.colors.grayLight};
    }
  }
  .react-datepicker__current-month,
  .react-datepicker__day-name,
  .react-datepicker-time__header {
    color: ${props => props.theme.colors.white} !important;
  }

  .react-datepicker__header,
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__time-list-item--selected {
    background-color: ${props => props.theme.colors.primary} !important;
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
